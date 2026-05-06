# Arma-Hire Fleet — Full Data Model

Extracted via Chrome from fleet.arma-hire.co.uk on 2026-05-06.
Credentials: test / testpassword123

## Pages
- page=dashboard — KPI stats + "Attention now" cards + vehicle compliance table
- page=track — GPS tracking map + tracker table (6 tracked vehicles)
- page=availability — Status board per vehicle
- page=defects — Log defect/damage + open/resolved table
- page=rentals — Check out/in + rental history table
- page=service → redirects to dashboard
- page=calendar — Month view
- page=import — CSV upload
- page=vehicle&id=N — Vehicle detail page
- page=vehicles → redirects to dashboard
- page=admin → redirects to dashboard
- page=settings → empty

## Vehicle Data Fields (per vehicle detail page)
- company (ARMA-HIRE / Default Company)
- registration (text)
- availability (Available, Rented out, In service, Off road, Awaiting documents, Accident/repair)
- nickname (text)
- make (text)
- model (text)
- colour (text)
- year (number)
- navixy_tracker_id (number)
- track_taxi_licensing (checkbox)

- driver_name
- hire_start_date
- hire_end_date
- driver_phone
- has_pco (checkbox)
- pco_expiry

- insurance_type (None, Self insured, Fleet policy - HAVEN)
- insurance_valid_from
- insurance_expiry_date
- insurance_policy_number

- tax_status (Taxed / Untaxed)
- tax_due_date
- mot_status (PASSED / FAILED)
- mot_expiry_date
- last_refreshed
- last_error

- taxi_licence_status (Licensed, Not licensed, Unknown, Check failed)
- taxi_licence_expiry
- taxi_council
- taxi_check_source
- taxi_last_checked

- vehicle_timeline (audit log — events, driver assignments, services, rentals, defects)
- driver_history (table: driver, phone, pco, hire dates)

## All 20 Vehicles
ID | Reg | Make/Model | Year | Colour | MOT | Tax | Taxi | Insurance | Tracker
1  | AE69WYO | TOYOTA COROLLA | 2019 | Red | 25/01/2027 | 01/07/2026 | Licensed(wolvs) | None | None
17 | LJ16PDX | TOYOTA PRIUS | - | White | 21/07/2026 | 01/07/2026 | Aug-26 | None | None
12 | KF17UFZ | NISSAN QASHQAI | - | Black | 07/07/2026 | 01/04/2027 | Unknown | HAVEN 04/02/2027 | None
18 | LX14EHH | TOYOTA PRIUS | - | Maroon | 11/08/2026 | 01/02/2027 | Unknown | HAVEN 04/02/2027 | None
5  | BX15YRR | MERCEDES-BENZ E | 2015 | Black | 06/04/2027 | 01/09/2026 | Apr-26 | HAVEN | TRACK 1320
6  | DK18TTO | SKODA OCTAVIA | - | Black | 13/10/2026 | 01/10/2026 | Nov-26 | None | None
15 | KN17LNU | MERCEDES-BENZ E | - | Black | 05/01/2027 | 01/10/2026 | Jan-27 | HAVEN | None
19 | SD18ZBG | SKODA OCTAVIA | - | White | 01/01/2027 | 01/10/2026 | Jan-27 | None | None
10 | FL17VBB | TOYOTA AURIS | - | Red | 15/12/2026 | 01/03/2027 | Jan-27 | HAVEN | TRACK 9240
9  | FJ64HJZ | TOYOTA AURIS | - | Blue | 16/12/2026 | 01/02/2027 | Jul-26 | None | None
3  | BL70SSX | TESLA MODEL 3 LR AWD | - | Black | 21/12/2026 | 01/04/2027 | Unknown | HAVEN | None
8  | FH18UAX | HYUNDAI IONIQ | - | - | 16/02/2027 | 01/01/2027 | Mar-27 | None | None
13 | KL68JHU | MERCEDES-BENZ E | - | - | 08/01/2027 | 01/01/2027 | Feb-27 | HAVEN | None
20 | WP66WLU | SKODA OCTAVIA | - | - | 05/03/2027 | 01/01/2027 | Mar-27 | None | TRACK 3664
14 | KM19VUG | SKODA OCTAVIA | - | - | 08/02/2027 | 01/02/2027 | Feb-27 | HAVEN | None
7  | FG26GLV | SKODA OCTAVIA | - | - | - | 01/03/2027 | Unknown | HAVEN | None
11 | GF68YOC | SKODA OCTAVIA | - | - | 29/03/2027 | 01/04/2027 | Unknown | HAVEN | TRACK
16 | KT16UDW | SEAT ALHAMBRA | - | - | 15/03/2027 | 01/03/2027 | Mar-27 | HAVEN | TRACK 3854
2  | AK67HWJ | SKODA OCTAVIA | - | - | 25/03/2027 | 01/04/2027 | Jul-26 | None | TRACK 6972
4  | BV16KVU | SKODA OCTAVIA | - | - | 22/04/2027 | 01/04/2027 | Jul-26 | None | None

## Tracked Vehicles (6)
BX15YRR → BX15 YRR TRACK 1320 (Vodafone, Moving/active, 52.536705,-1.888420, Signal 100/Batt 100)
FL17VBB → FL17 VBB TRACK 9240 (EE, Parked/active, 52.436080,-1.934653)
WP66WLU → WP66 WLU TRACK 3664
GF68YOC → GF68 YOC TRACK (Moving/active, 54.975183,-1.647998)
KT16UDW → KT16 UDW TRACK 3854 (Parked/active, 53.558632,-2.292005)
AK67HWJ → AK67 HWJ TRACK 6972

## KPI Stats Dashboard
- 20 Need Attention Now
- 0 Overdue
- 0 Due in 7 days
- 0 Due in 30 days
- 9 Missing Insurance
- 0 Insurance Due
- 1 Taxi Licensed
- 20 Missing Dates
- 6 Tracked Vehicles
- 2 Moving Now

## Actions Available
- Filter: company, search, urgency (overdue/7d/30d/missing/OK), item (MOT/tax/taxi/insurance/PCO/service), taxi status, sort
- Export CSV
- Save filter view
- Add vehicle (expanded form: 30+ fields)
- Refresh selected vehicles' compliance data
- Bulk insurance assignment
- Inline edit: every cell in compliance table
- Per vehicle: Full vehicle link, delete
- Track: filter, search, map, tracker match editing
- Availability: status dropdown per vehicle + update
- Defects: log form + issues table
- Rentals: checkout form + history table
