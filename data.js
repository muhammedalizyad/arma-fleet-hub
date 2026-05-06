// Arma Fleet Hub — Vehicle Data
// All 20 vehicles with full compliance, tracker, and defect data
// Extracted from fleet.arma-hire.co.uk on 2026-05-06

const FLEET_DATA = [
  {
    id: 1, reg: "AE69WYO", make: "TOYOTA", model: "COROLLA", year: 2019,
    colour: "Red", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2027-01-25", mot_status: "PASSED",
    tax: "2026-07-01", tax_status: "Taxed",
    taxi: "Licensed", taxi_expiry: null, taxi_council: "wolvs",
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 2, reg: "AK67HWJ", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2027-03-25", mot_status: "PASSED",
    tax: "2026-04-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-07-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 6972, tracker_label: "AK67 HWJ TRACK 6972", tracker_status: "Parked / active",
    tracker_pos: {lat: 52.478395, lng: -1.867383}, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 3, reg: "BL70SSX", make: "TESLA", model: "MODEL 3 LONG RANGE AWD", year: null,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2026-12-21", mot_status: "PASSED",
    tax: "2027-04-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 4, reg: "BV16KVU", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2027-04-22", mot_status: "PASSED",
    tax: "2026-04-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-07-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 5, reg: "BX15YRR", make: "MERCEDES-BENZ", model: "E", year: 2015,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: null, insurance_policy: "HVXT",
    mot: "2027-04-06", mot_status: "PASSED",
    tax: "2026-09-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-04-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 1320, tracker_label: "BX15 YRR TRACK 1320", tracker_status: "Stopped / active",
    tracker_pos: {lat: 52.536705, lng: -1.888420}, tracker_signal: 100, tracker_battery: 100,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 6, reg: "DK18TTO", make: "SKODA", model: "OCTAVIA", year: null,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2026-10-13", mot_status: "PASSED",
    tax: "2026-10-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-11-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 7, reg: "FG26GLV", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: null, mot_status: null,
    tax: "2027-03-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 8, reg: "FH18UAX", make: "HYUNDAI", model: "IONIQ", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2027-02-16", mot_status: "PASSED",
    tax: "2027-01-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-03-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 9, reg: "FJ64HJZ", make: "TOYOTA", model: "AURIS", year: null,
    colour: "Blue", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2026-12-16", mot_status: "PASSED",
    tax: "2027-02-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-07-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 10, reg: "FL17VBB", make: "TOYOTA", model: "AURIS", year: null,
    colour: "Red", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2026-12-15", mot_status: "PASSED",
    tax: "2027-03-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-01-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 9240, tracker_label: "FL17 VBB TRACK 9240", tracker_status: "Parked / active",
    tracker_pos: {lat: 52.436080, lng: -1.934653}, tracker_signal: 100, tracker_battery: 87,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 11, reg: "GF68YOC", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2027-03-29", mot_status: "PASSED",
    tax: "2027-04-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: "GF68 YOC TRACK", tracker_status: "Moving / active",
    tracker_pos: {lat: 54.975183, lng: -1.647998}, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 12, reg: "KF17UFZ", make: "NISSAN", model: "QASHQAI", year: null,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2026-07-07", mot_status: "PASSED",
    tax: "2027-04-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 13, reg: "KL68JHU", make: "MERCEDES-BENZ", model: "E", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2027-01-08", mot_status: "PASSED",
    tax: "2027-01-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-02-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 14, reg: "KM19VUG", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2027-02-08", mot_status: "PASSED",
    tax: "2027-02-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-02-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 15, reg: "KN17LNU", make: "MERCEDES-BENZ", model: "E", year: null,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2027-01-05", mot_status: "PASSED",
    tax: "2026-10-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-01-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 16, reg: "KT16UDW", make: "SEAT", model: "ALHAMBRA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2027-03-15", mot_status: "PASSED",
    tax: "2027-03-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-03-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 3854, tracker_label: "KT16 UDW TRACK 3854", tracker_status: "Parked / active",
    tracker_pos: {lat: 53.558632, lng: -2.292005}, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  },
  {
    id: 17, reg: "LJ16PDX", make: "TOYOTA", model: "PRIUS", year: null,
    colour: "White", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2026-07-21", mot_status: "PASSED",
    tax: "2026-07-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-08-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 18, reg: "LX14EHH", make: "TOYOTA", model: "PRIUS", year: null,
    colour: "Maroon", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    mot: "2026-08-11", mot_status: "PASSED",
    tax: "2027-02-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 19, reg: "SD18ZBG", make: "SKODA", model: "OCTAVIA", year: null,
    colour: "White", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2027-01-01", mot_status: "PASSED",
    tax: "2026-10-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-01-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 20, reg: "WP66WLU", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    mot: "2027-03-05", mot_status: "PASSED",
    tax: "2027-01-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-03-01", taxi_council: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 3664, tracker_label: "WP66 WLU TRACK 3664", tracker_status: "Parked / active",
    tracker_pos: {lat: 52.461490, lng: -1.884795}, tracker_signal: null, tracker_battery: null,
    defects: [], rentals: [],
    issues: []
  }
];

// ── KPI Computations ──

function computeKPIs() {
  const now = new Date();
  const missingInsurance = FLEET_DATA.filter(v => !v.insurance).length;
  const insuranceDue = FLEET_DATA.filter(v => {
    if (!v.insurance_expiry) return false;
    const d = new Date(v.insurance_expiry);
    return d > now && d < new Date(now.getTime() + 30*86400000);
  }).length;
  const taxiLicensed = FLEET_DATA.filter(v => v.taxi === "Licensed").length;
  const missingDates = FLEET_DATA.filter(v => !v.mot || !v.tax).length;
  const tracked = FLEET_DATA.filter(v => v.tracker_id).length;
  const moving = FLEET_DATA.filter(v => v.tracker_status && v.tracker_status.toLowerCase().includes("moving")).length;
  const needsAttention = FLEET_DATA.filter(v => v.issues && v.issues.length > 0).length;

  return {
    needsAttention, overdue: 0, due7: 0, due30: 0,
    missingInsurance, insuranceDue, taxiLicensed, missingDates,
    tracked, moving, total: FLEET_DATA.length
  };
}

// ── Days until date helper ──

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  const now = new Date();
  return Math.ceil((d - now) / 86400000);
}

function statusClass(dateStr, okThreshold = 30, warnThreshold = 14) {
  const days = daysUntil(dateStr);
  if (days === null) return "dim";
  if (days < 0) return "red";
  if (days < warnThreshold) return "red";
  if (days < okThreshold) return "amber";
  return "green";
}

function urgencyClass(v) {
  const critical = (v.issues || []).filter(i =>
    i.includes("missing") || i.includes("overdue")
  );
  if (critical.length >= 2) return "urgent-red";
  if (critical.length >= 1) return "urgent-amber";
  return "urgent-green";
}

function availClass(s) {
  const map = {
    "Available": "available", "Rented out": "rented",
    "In service": "service", "Off road": "offroad",
    "Awaiting documents": "documents", "Accident/repair": "repair"
  };
  return map[s] || "available";
}
