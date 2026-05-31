// ── Mobile Native Layer ─────────────────────────────────────────────────
// Wires up the iOS-native feel:
//   1. Native chrome bootstrap (Capacitor StatusBar)
//   2. Haptic feedback (Capacitor + browser fallback)
//   3. Bottom tab bar interactions + active-state sync
//   4. Swipe-to-dismiss on modal (drag down) and panel (edge swipe right)
//   5. Pull-to-refresh on the fleet list
//   6. Blur active input on scroll (iOS keyboard dismiss feel)
// ───────────────────────────────────────────────────────────────────────

(function bootstrapNativeChrome() {
  const cap = window.Capacitor;
  if (!cap || typeof cap.isNativePlatform !== 'function' || !cap.isNativePlatform()) return;
  const StatusBar = cap.Plugins && cap.Plugins.StatusBar;
  if (!StatusBar) return;
  try { StatusBar.setStyle({ style: 'DARK' }); } catch (e) {}
  try { StatusBar.setBackgroundColor({ color: '#0a0e1a' }); } catch (e) {}
  try { StatusBar.setOverlaysWebView({ overlay: true }); } catch (e) {}
})();

// ── Haptics ────────────────────────────────────────────────────────────
const Haptics = (function () {
  const cap = window.Capacitor;
  const native = cap && cap.Plugins && cap.Plugins.Haptics;
  function impact(style /* 'LIGHT' | 'MEDIUM' | 'HEAVY' */) {
    if (native) {
      try { native.impact({ style: style || 'LIGHT' }); return; } catch (e) {}
    }
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      const ms = style === 'HEAVY' ? 18 : style === 'MEDIUM' ? 12 : 6;
      navigator.vibrate(ms);
    }
  }
  function selection() {
    if (native) {
      try { native.selectionChanged(); return; } catch (e) {}
    }
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(4);
    }
  }
  function notification(type /* 'SUCCESS' | 'WARNING' | 'ERROR' */) {
    if (native) {
      try { native.notification({ type: type || 'SUCCESS' }); return; } catch (e) {}
    }
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(type === 'ERROR' ? [12, 60, 12] : [8, 40, 8]);
    }
  }
  return { impact, selection, notification };
})();

// Only wire mobile-specific behaviour on small viewports
const isMobile = () => window.matchMedia('(max-width: 900px)').matches;

// ── Bottom tab bar ─────────────────────────────────────────────────────
(function wireTabBar() {
  const tabs = document.querySelectorAll('.mobile-tabbar .tab[data-view]');
  if (!tabs.length) return;

  function setActiveTab(view) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.view === view));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.dataset.view;
      Haptics.selection();
      if (typeof window.switchView === 'function') window.switchView(view);
      setActiveTab(view);
    });
  });

  // Wrap switchView so sidebar/anywhere clicks also update the tab bar
  const originalSwitchView = window.switchView;
  if (typeof originalSwitchView === 'function') {
    window.switchView = function (view) {
      originalSwitchView(view);
      setActiveTab(view);
    };
  }

  // Map tab triggers the map overlay (no view change)
  const mapTab = document.querySelector('.mobile-tabbar .tab[data-action="map"]');
  if (mapTab) {
    mapTab.addEventListener('click', () => {
      Haptics.impact('LIGHT');
      if (typeof window.openMap === 'function') window.openMap();
    });
  }

  // Sync the alerts badge from the sidebar's needs-count
  function syncBadges() {
    const needs = document.getElementById('needs-count');
    const alertsBadge = document.querySelector('.mobile-tabbar .tab[data-view="attention"] .badge');
    if (needs && alertsBadge) {
      const n = parseInt(needs.textContent, 10) || 0;
      alertsBadge.textContent = n > 99 ? '99+' : String(n);
      alertsBadge.classList.toggle('show', n > 0);
    }
  }
  syncBadges();
  setInterval(syncBadges, 1500);

  setActiveTab('fleet');
})();

// ── Card / filter haptics ───────────────────────────────────────────────
(function wireListHaptics() {
  // Delegate so it works for cards rendered after this script runs
  document.addEventListener('click', (e) => {
    if (!isMobile()) return;
    const card = e.target.closest('.vehicle-card');
    if (card) { Haptics.impact('LIGHT'); return; }
    const filter = e.target.closest('.filter-btn');
    if (filter) { Haptics.selection(); return; }
    const tabBtn = e.target.closest('.tab-btn');
    if (tabBtn) { Haptics.selection(); return; }
    const modalBtn = e.target.closest('.modal-btn');
    if (modalBtn) { Haptics.impact(modalBtn.classList.contains('red-btn') ? 'MEDIUM' : 'LIGHT'); return; }
    const panelClose = e.target.closest('.panel-close, .map-close-btn');
    if (panelClose) { Haptics.impact('LIGHT'); return; }
  }, true);
})();

// ── Body scroll lock when overlay open ─────────────────────────────────
// The base JS sets body.style.overflow=hidden; mirror that with a class so
// our CSS can also lock position/inset on iOS (where overflow:hidden alone
// doesn't always stop scroll).
(function wireOverlayLock() {
  const overlays = ['vehicle-panel', 'modal-overlay', 'map-overlay'];
  function syncLock() {
    const anyOpen = overlays.some(id => {
      const el = document.getElementById(id);
      return el && el.classList.contains('open');
    });
    document.body.classList.toggle('overlay-locked', anyOpen && isMobile());
  }
  // Watch class changes via MutationObserver
  overlays.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    new MutationObserver(syncLock).observe(el, { attributes: true, attributeFilter: ['class'] });
  });
})();

// ── Swipe-to-dismiss on modal (bottom sheet) ───────────────────────────
(function wireModalSwipe() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  let startY = 0;
  let currentY = 0;
  let dragging = false;
  let modalEl = null;

  overlay.addEventListener('touchstart', (e) => {
    if (!isMobile() || !overlay.classList.contains('open')) return;
    modalEl = overlay.querySelector('.modal');
    if (!modalEl) return;
    // Only initiate swipe if touch is in the top 80px of the modal
    // (where the grabber sits) OR on the modal itself outside form fields.
    const target = e.target;
    if (target.closest('input, textarea, select, button')) return;
    startY = e.touches[0].clientY;
    currentY = startY;
    dragging = true;
    modalEl.style.transition = 'none';
  }, { passive: true });

  overlay.addEventListener('touchmove', (e) => {
    if (!dragging || !modalEl) return;
    currentY = e.touches[0].clientY;
    const dy = Math.max(0, currentY - startY);
    modalEl.style.transform = `translateY(${dy}px)`;
  }, { passive: true });

  overlay.addEventListener('touchend', () => {
    if (!dragging || !modalEl) return;
    dragging = false;
    const dy = currentY - startY;
    modalEl.style.transition = '';
    if (dy > 100) {
      // Dismiss
      Haptics.impact('LIGHT');
      modalEl.style.transform = '';
      if (typeof window.closeModal === 'function') {
        window.closeModal({ target: overlay });
      }
    } else {
      modalEl.style.transform = '';
    }
    modalEl = null;
  });
})();

// ── Edge-swipe-back on detail panel ────────────────────────────────────
(function wirePanelSwipeBack() {
  const panel = document.getElementById('vehicle-panel');
  if (!panel) return;

  let startX = 0;
  let currentX = 0;
  let dragging = false;
  const EDGE_ZONE = 32; // px from left edge to start the swipe

  panel.addEventListener('touchstart', (e) => {
    if (!isMobile() || !panel.classList.contains('open')) return;
    const t = e.touches[0];
    if (t.clientX > EDGE_ZONE) return; // only from the left edge
    startX = t.clientX;
    currentX = startX;
    dragging = true;
    panel.style.transition = 'none';
  }, { passive: true });

  panel.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    currentX = e.touches[0].clientX;
    const dx = Math.max(0, currentX - startX);
    panel.style.transform = `translateX(${dx}px)`;
  }, { passive: true });

  panel.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    const dx = currentX - startX;
    panel.style.transition = '';
    if (dx > 70) {
      Haptics.impact('LIGHT');
      panel.style.transform = '';
      if (typeof window.closePanel === 'function') window.closePanel();
    } else {
      panel.style.transform = '';
    }
  });
})();

// ── Pull-to-refresh on the fleet list ──────────────────────────────────
(function wirePullToRefresh() {
  if (!('ontouchstart' in window)) return;

  const indicator = document.createElement('div');
  indicator.className = 'ptr-indicator';
  indicator.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`;
  document.body.appendChild(indicator);

  const PULL_TRIGGER = 70;
  const MAX_PULL = 110;
  let startY = 0;
  let pulling = false;
  let refreshing = false;

  function setIndicator(offsetPx, opacity, rotation) {
    indicator.style.setProperty('--ptr-offset', `${offsetPx}px`);
    indicator.style.setProperty('--ptr-opacity', String(opacity));
    indicator.style.setProperty('--ptr-rotation', `${rotation}deg`);
  }

  document.addEventListener('touchstart', (e) => {
    if (!isMobile() || refreshing) return;
    if (window.scrollY > 4) return; // only at the very top
    if (document.body.classList.contains('overlay-locked')) return;
    startY = e.touches[0].clientY;
    pulling = true;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!pulling) return;
    const dy = e.touches[0].clientY - startY;
    if (dy <= 0) { pulling = false; setIndicator(-40, 0, 0); return; }
    const eased = Math.min(MAX_PULL, dy * 0.55);
    const opacity = Math.min(1, eased / PULL_TRIGGER);
    const rotation = Math.min(360, (eased / PULL_TRIGGER) * 360);
    setIndicator(eased, opacity, rotation);
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!pulling) return;
    pulling = false;
    const offset = parseFloat(getComputedStyle(indicator).getPropertyValue('--ptr-offset')) || -40;
    if (offset >= PULL_TRIGGER) {
      // Trigger refresh
      refreshing = true;
      indicator.classList.add('refreshing');
      setIndicator(40, 1, 0);
      Haptics.impact('MEDIUM');
      setTimeout(() => {
        if (typeof window.renderFleet === 'function') window.renderFleet();
        if (typeof window.showToast === 'function') window.showToast('Fleet data synced ✓');
        Haptics.notification('SUCCESS');
        indicator.classList.remove('refreshing');
        setIndicator(-40, 0, 0);
        refreshing = false;
      }, 700);
    } else {
      setIndicator(-40, 0, 0);
    }
  });
})();

// ── Blur active input on scroll (iOS keyboard-dismiss feel) ────────────
(function wireBlurOnScroll() {
  let lastY = window.scrollY;
  document.addEventListener('scroll', () => {
    if (!isMobile()) return;
    const dy = Math.abs(window.scrollY - lastY);
    lastY = window.scrollY;
    if (dy < 6) return;
    const a = document.activeElement;
    if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA')) {
      a.blur();
    }
  }, { passive: true });
})();
