// Arma Fleet Hub v2 — 10x Edition
// Full enriched data with rentals, timeline, driver info, insurance, taxi council

const FLEET_DATA = [
  {
    id: 1, reg: "AE69WYO", make: "TOYOTA", model: "COROLLA", year: 2019,
    colour: "Red", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2027-01-25", mot_status: "PASSED",
    mot_refreshed: "2026-05-06T19:42:00",
    tax: "2026-07-01", tax_status: "Taxed",
    taxi: "Licensed", taxi_expiry: "2026-08-21", taxi_council: "wolvs",
    taxi_source: "wolvs", taxi_checked: "2026-04-16T23:28:00",
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [
      { issue: "Slight scratch rear bumper", severity: "minor", reported: "2026-04-20", status: "Resolved" }
    ],
    rentals: [
      { driver: "Mohammed Ali", start: "2026-04-10", end: "2026-04-17", ref: "BK-1024", phone: "07400 123456" },
      { driver: "John Smith", start: "2026-04-28", end: "2026-05-02", ref: "BK-1087", phone: "07700 987654" }
    ],
    timeline: [
      { date: "2026-05-06T19:42:00", type: "auto_refresh", text: "MOT and tax data refreshed" },
      { date: "2026-04-16T11:44:00", type: "vehicle_added", text: "Record created for AE69WYO" },
      { date: "2026-04-10T09:00:00", type: "rental_started", text: "Rented to Mohammed Ali", details: "Ref: BK-1024 · 7 days" },
      { date: "2026-04-17T18:00:00", type: "rental_ended", text: "Returned by Mohammed Ali", details: "Mileage: +340" },
      { date: "2026-04-28T10:00:00", type: "rental_started", text: "Rented to John Smith", details: "Ref: BK-1087 · 4 days" },
      { date: "2026-05-02T16:00:00", type: "rental_ended", text: "Returned by John Smith", details: "Mileage: +210" },
      { date: "2026-04-20T15:00:00", type: "defect_logged", text: "Defect logged: Slight scratch rear bumper (minor)" },
      { date: "2026-04-25T12:00:00", type: "defect_logged", text: "Defect repaired: scratch fixed" },
    ],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 2, reg: "AK67HWJ", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2027-03-25", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-04-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-07-01", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 6972, tracker_label: "AK67 HWJ TRACK 6972",
    tracker_status: "Parked / active", tracker_carrier: "EE",
    tracker_pos: {lat: 52.478395, lng: -1.867383},
    tracker_signal: 100, tracker_battery: 100,
    tracker_speed: 0, tracker_heading: 102,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 3, reg: "BL70SSX", make: "TESLA", model: "MODEL 3 LONG RANGE AWD", year: 2020,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: "FLT-POL-001",
    insurance_type: "Fleet policy", insurance_valid_from: "2026-02-04",
    mot: "2026-12-21", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-04-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    taxi_source: null, taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 4, reg: "BV16KVU", make: "SKODA", model: "OCTAVIA", year: null,
    colour: null, company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2027-04-22", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-04-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-07-01", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 5, reg: "BX15YRR", make: "MERCEDES-BENZ", model: "E", year: 2015,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: null, insurance_policy: "HVXT",
    insurance_type: "Self insured", insurance_valid_from: null,
    mot: "2027-04-06", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-09-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-04-15", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 1320, tracker_label: "BX15 YRR TRACK 1320",
    tracker_status: "Stopped / active", tracker_carrier: "Vodafone",
    tracker_pos: {lat: 52.536705, lng: -1.888420},
    tracker_signal: 100, tracker_battery: 100,
    tracker_speed: 11, tracker_heading: 210,
    defects: [], rentals: [
      { driver: "David Cooper", start: "2026-04-05", end: "2026-04-08", ref: "BK-1012" },
      { driver: "Sarah Khan", start: "2026-04-18", end: "2026-04-22", ref: "BK-1053" },
    ],
    timeline: [
      { date: "2026-04-05T09:00:00", type: "rental_started", text: "Rented to David Cooper", details: "Ref: BK-1012 · 3 days" },
      { date: "2026-04-08T17:00:00", type: "rental_ended", text: "Returned by David Cooper" },
      { date: "2026-04-18T10:00:00", type: "rental_started", text: "Rented to Sarah Khan", details: "Ref: BK-1053 · 4 days" },
      { date: "2026-04-22T15:00:00", type: "rental_ended", text: "Returned by Sarah Khan" },
    ],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 6, reg: "DK18TTO", make: "SKODA", model: "OCTAVIA", year: 2018,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2026-10-13", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-10-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-11-03", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 7, reg: "FG26GLV", make: "JAECOO", model: "7 LUXURY PHEV AUTO", year: null,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: null, mot_status: null,
    mot_refreshed: null,
    tax: "2027-03-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    taxi_source: null, taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 8, reg: "FH18UAX", make: "HYUNDAI", model: "IONIQ", year: 2018,
    colour: "Blue", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2027-02-16", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-01-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-03-19", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 9, reg: "FJ64HJZ", make: "TOYOTA", model: "AURIS", year: 2014,
    colour: "Blue", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2026-12-16", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-02-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-07-12", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 10, reg: "FL17VBB", make: "TOYOTA", model: "AURIS", year: 2017,
    colour: "Red", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Self insured", insurance_valid_from: null,
    mot: "2026-12-15", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-03-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-01-19", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 9240, tracker_label: "FL17 VBB TRACK 9240",
    tracker_status: "Parked / active", tracker_carrier: "EE",
    tracker_pos: {lat: 52.436080, lng: -1.934653},
    tracker_signal: 100, tracker_battery: 87,
    tracker_speed: 0, tracker_heading: 0,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 11, reg: "GF68YOC", make: "SKODA", model: "OCTAVIA", year: 2018,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: "2027-03-29", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-04-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    taxi_source: null, taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: "GF68 YOC TRACK",
    tracker_status: "Moving / active", tracker_carrier: "O2",
    tracker_pos: {lat: 54.975183, lng: -1.647998},
    tracker_signal: 100, tracker_battery: 85,
    tracker_speed: 42, tracker_heading: 15,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 12, reg: "KF17UFZ", make: "NISSAN", model: "QASHQAI", year: 2017,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: null, insurance_policy: null,
    insurance_type: "Self insured", insurance_valid_from: null,
    mot: "2026-07-07", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-04-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    taxi_source: null, taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [
      { driver: "David Cooper", start: "2026-04-05", end: "2026-04-08", ref: "BK-1012" },
      { driver: "Sarah Khan", start: "2026-04-18", end: "2026-04-22", ref: "BK-1053" },
    ],
    timeline: [
      { date: "2026-04-05T09:00:00", type: "rental_started", text: "Rented to David Cooper", details: "Ref: BK-1012 · 3 days" },
      { date: "2026-04-08T17:00:00", type: "rental_ended", text: "Returned by David Cooper" },
      { date: "2026-04-18T10:00:00", type: "rental_started", text: "Rented to Sarah Khan", details: "Ref: BK-1053 · 4 days" },
      { date: "2026-04-22T15:00:00", type: "rental_ended", text: "Returned by Sarah Khan" },
    ],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 13, reg: "KL68JHU", make: "MERCEDES-BENZ", model: "E", year: 2019,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: "2027-01-08", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-01-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-02-05", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 14, reg: "KM19VUG", make: "MERCEDES-BENZ", model: "E", year: 2019,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: "2027-02-08", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-02-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-02-15", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 15, reg: "KN17LNU", make: "MERCEDES-BENZ", model: "E", year: 2017,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: "2027-01-05", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-10-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-01-13", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [
      { driver: "David Cooper", start: "2026-04-05", end: "2026-04-08", ref: "BK-1012" },
      { driver: "Sarah Khan", start: "2026-04-18", end: "2026-04-22", ref: "BK-1053" },
    ],
    timeline: [
      { date: "2026-04-05T09:00:00", type: "rental_started", text: "Rented to David Cooper", details: "Ref: BK-1012 · 3 days" },
      { date: "2026-04-08T17:00:00", type: "rental_ended", text: "Returned by David Cooper" },
      { date: "2026-04-18T10:00:00", type: "rental_started", text: "Rented to Sarah Khan", details: "Ref: BK-1053 · 4 days" },
      { date: "2026-04-22T15:00:00", type: "rental_ended", text: "Returned by Sarah Khan" },
    ],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 16, reg: "KT16UDW", make: "SEAT", model: "ALHAMBRA", year: null,
    colour: "Black", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: "2027-03-15", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-03-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-03-17", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 3854, tracker_label: "KT16 UDW TRACK 3854",
    tracker_status: "Parked / active", tracker_carrier: "EE",
    tracker_pos: {lat: 53.558632, lng: -2.292005},
    tracker_signal: 100, tracker_battery: 100,
    tracker_speed: 0, tracker_heading: 0,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  },
  {
    id: 17, reg: "LJ16PDX", make: "TOYOTA", model: "PRIUS", year: 2016,
    colour: "White", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2026-07-21", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-07-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2026-08-11", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 18, reg: "LX14EHH", make: "TOYOTA", model: "PRIUS", year: 2014,
    colour: "Maroon", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: "HAVEN", insurance_expiry: "2027-02-04", insurance_policy: null,
    insurance_type: "Fleet policy", insurance_valid_from: null,
    mot: "2026-08-11", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-02-01", tax_status: "Taxed",
    taxi: "Unknown", taxi_expiry: null, taxi_council: null,
    taxi_source: null, taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [
      { driver: "David Cooper", start: "2026-04-05", end: "2026-04-08", ref: "BK-1012" },
      { driver: "Sarah Khan", start: "2026-04-18", end: "2026-04-22", ref: "BK-1053" },
    ],
    timeline: [
      { date: "2026-04-05T09:00:00", type: "rental_started", text: "Rented to David Cooper", details: "Ref: BK-1012 · 3 days" },
      { date: "2026-04-08T17:00:00", type: "rental_ended", text: "Returned by David Cooper" },
      { date: "2026-04-18T10:00:00", type: "rental_started", text: "Rented to Sarah Khan", details: "Ref: BK-1053 · 4 days" },
      { date: "2026-04-22T15:00:00", type: "rental_ended", text: "Returned by Sarah Khan" },
    ],
    issues: ["taxi licence missing", "driver PCO missing", "service missing"]
  },
  {
    id: 19, reg: "SD18ZBG", make: "SKODA", model: "OCTAVIA", year: 2018,
    colour: "White", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2027-01-01", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2026-10-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-01-22", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: null, tracker_label: null, tracker_status: null,
    tracker_pos: null, tracker_signal: null, tracker_battery: null,
    tracker_carrier: null, tracker_speed: null, tracker_heading: null,
    defects: [], rentals: [],
    timeline: [],
    issues: ["taxi licence missing", "insurance missing", "driver PCO missing"]
  },
  {
    id: 20, reg: "WP66WLU", make: "SKODA", model: "OCTAVIA", year: 2016,
    colour: "Blue", company: "ARMA-HIRE", nickname: "",
    availability: "Available", driver: null,
    driver_phone: null, driver_pco: null, driver_pco_expiry: null,
    driver_hire_start: null, driver_hire_end: null,
    insurance: null, insurance_expiry: null, insurance_policy: null,
    insurance_type: null, insurance_valid_from: null,
    mot: "2027-03-05", mot_status: "PASSED",
    mot_refreshed: null,
    tax: "2027-01-01", tax_status: "Taxed",
    taxi: null, taxi_expiry: "2027-03-17", taxi_council: null,
    taxi_source: "Manual import", taxi_checked: null,
    pco: null, pco_expiry: null,
    service: null, service_due: null,
    tracker_id: 3664, tracker_label: "WP66 WLU TRACK 3664",
    tracker_status: "Parked / active", tracker_carrier: "EE",
    tracker_pos: {lat: 52.461490, lng: -1.884795},
    tracker_signal: 100, tracker_battery: 100,
    tracker_speed: 0, tracker_heading: 0,
    defects: [], rentals: [],
    timeline: [],
    issues: []
  }
];

// ── KPI Computations ──

function computeKPIs() {
  const now = new Date();
  const total = FLEET_DATA.length;
  const tracked = FLEET_DATA.filter(v => v.tracker_id).length;
  const moving = FLEET_DATA.filter(v => v.tracker_status && v.tracker_status.toLowerCase().includes("moving")).length;
  const stopped = FLEET_DATA.filter(v => v.tracker_status && v.tracker_status.toLowerCase().includes("parked")).length;
  const onMove = FLEET_DATA.filter(v => v.tracker_status && v.tracker_status.toLowerCase().includes("moving")).length;
  const missingInsurance = FLEET_DATA.filter(v => !v.insurance).length;
  const needsAttention = FLEET_DATA.filter(v => v.issues && v.issues.length > 0).length;
  const overdue = FLEET_DATA.filter(v => {
    if (!v.issues || v.issues.length === 0) return false;
    return v.issues.some(i => i.includes("missing"));
  }).length;
  const due7 = FLEET_DATA.filter(v => {
    const days = Math.min(
      daysUntil(v.mot) || 999,
      daysUntil(v.tax) || 999,
      daysUntil(v.insurance_expiry) || 999,
      daysUntil(v.taxi_expiry) || 999
    );
    return days >= 0 && days <= 7;
  }).length;
  const due30 = FLEET_DATA.filter(v => {
    const days = Math.min(
      daysUntil(v.mot) || 999,
      daysUntil(v.tax) || 999,
      daysUntil(v.insurance_expiry) || 999,
      daysUntil(v.taxi_expiry) || 999
    );
    return days > 7 && days <= 30;
  }).length;
  const taxiLicensed = FLEET_DATA.filter(v => v.taxi === "Licensed").length;
  const missingDates = FLEET_DATA.filter(v => !v.mot || !v.tax).length;

  return {
    total, tracked, moving, stopped, onMove,
    missingInsurance, needsAttention, overdue, due7, due30,
    taxiLicensed, missingDates
  };
}

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
  const critical = (v.issues || []).filter(i => i.includes("missing") || i.includes("overdue"));
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

function formatDate(d) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function formatTime(d) {
  if (!d) return "";
  return new Date(d).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}
