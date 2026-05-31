🚛 Arma Fleet Hub — Neon Blue Redesign
========================================

A standalone single-page fleet management command centre.
Dark neon blue theme. One screen. All vehicles. All actions.

## What it replaces

The existing fleet.arma-hire.co.uk had 9 separate pages:
Dashboard → Track → Availability → Defects → Rentals → Service → Calendar → Import → Vehicle Detail

This merges them into ONE screen.

## How it works

1. **Fleet grid** — all 20 vehicles as cards with status at a glance
2. **Side panel** — click any vehicle → full detail + all actions without leaving the grid
3. **Map overlay** — toggle full-screen fleet tracker map
4. **Compliance strip** — MOT, Tax, Insurance, Taxi Licence, PCO, Service — all colour-coded
5. **Quick actions** — change status, log defect, rent out, all from the side panel
6. **Filters** — company, urgency, compliance item, search

## Design

- Dark theme: #0a0e1a background
- Neon blue accent: #00d4ff
- Green: #00ff88 (all good)
- Amber: #ffaa00 (due soon)
- Red: #ff3355 (overdue/missing)
- Purple: #8844ff (tracker online)
- Font: Inter, system-ui
- Mobile responsive

---

## Native mobile app (Capacitor)

The same web app ships as a real iOS + Android binary via [Capacitor](https://capacitorjs.com).
The web shell, native projects, and shared assets all live in this one repo.

```
arma-fleet/
├── index.html, fleet.css, data.js     ← canonical web sources
├── mobile-native.css, mobile-native.js ← bottom tab bar + status-bar bootstrap
├── www/                                ← copy used by the native shell
├── android/                            ← Gradle/Android Studio project
└── ios/                                ← Xcode project (build on macOS)
```

After editing any of the web files, run `npm run sync` to copy them into `www/` and push them into the native projects.

### Android (build locally on Linux/Mac/Win)

Prereqs:
- Node 18+
- JDK 21 (Capacitor 7 requirement) — `sudo apt install openjdk-21-jdk-headless`
- Android SDK 35 with build-tools 35.0.0
- Set `ANDROID_HOME`, or write `android/local.properties` with `sdk.dir=…`

Build a debug APK:

```bash
npm install
npm run android:apk
# → android/app/build/outputs/apk/debug/app-debug.apk  (~4 MB)
```

Sideload onto a phone (USB-debug enabled):

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

Or open in Android Studio for emulator / signed-release / Play Store flow:

```bash
npm run android:open
```

### iOS (build on macOS)

The Xcode project is scaffolded but **iOS binaries can only be built on macOS**
(Apple toolchain limitation — Xcode + CocoaPods are macOS-only).

On a Mac:

```bash
brew install cocoapods       # one-time
npm install
npm run ios:open             # opens ios/App/App.xcworkspace in Xcode
```

In Xcode: select your team (Signing & Capabilities), pick a simulator or
connected device, hit ▶. For TestFlight: Product → Archive → Distribute App.

**No Mac?** Use a cloud Mac builder — the project is already configured:
- [Codemagic](https://codemagic.io) — free tier covers small builds
- [Ionic Appflow](https://ionic.io/appflow) — Capacitor-native CI
- [EAS Build](https://docs.expo.dev/build/introduction/) — works for any Capacitor project too

Each lets you trigger an iOS build from a git push and download the `.ipa` or push to TestFlight.

### Capacitor app metadata

- **App ID**: `uk.co.armahire.fleethub`
- **Display name**: Fleet Hub
- **Background colour**: `#0a0e1a` (matches the web theme)
- **Status bar**: dark, overlays the WebView (the web layout reserves safe-area padding)
- **Plugin**: `@capacitor/status-bar` only — keep the surface area small

To change the app id / name, edit `capacitor.config.json` then run `npm run sync`.
