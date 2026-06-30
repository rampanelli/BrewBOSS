# BrewBOSS — Pinout & GPIO reference `v2.2.22i`

GPIO mapping extracted from `src/config.h`. All pins are build‑time overridable via `-D` flags.

---

## GPIO mapping per platform

| Signal / Function | **Wemos (ESP8266)** | **ESP32 (esp32dev)** | **ESP32‑C3 (Super Mini)** |
|---|---|---|---|
| **OneWire** (DS18B20 sensors) | GPIO 12 | GPIO 4 | GPIO 3 |
| **Heater** (main heating element) | GPIO 15 | GPIO 15 | GPIO 4 |
| **Sparge Heater** | GPIO 13 | GPIO 13 | GPIO 5 |
| **Boil Heater** (separate kettle) | GPIO 2 | GPIO 2 | GPIO 6 |
| **Pump** (relay/SSR) | GPIO 14 | GPIO 14 | GPIO 7 |
| **Buzzer** | GPIO 16 | GPIO 16 | GPIO 10 |
| **Button UP** | GPIO 1 | GPIO 1 | — * |
| **Button DOWN** | GPIO 0 | GPIO 0 | — * |
| **Button START** | GPIO 3 | GPIO 3 | — * |
| **Button ENTER** | GPIO 2 | GPIO 2 | — * |
| **I²C SDA** | GPIO 4 † | GPIO 21 † | GPIO 0 |
| **I²C SCL** | GPIO 5 † | GPIO 22 † | GPIO 1 |

> \* **ESP32‑C3** has no button pins defined in `config.h`. To use a keypad on the C3, add the `-D BUTTONUP_BUS=…` etc. flags at build time.  
> † **Wemos and ESP32** use the Arduino Wire library default pins — they are not explicitly set in `config.h` for these platforms (only the C3 block has `I2C_SDA`/`I2C_SCL`).  
> ⚠️ On the **Wemos**, **BUTTON ENTER** (GPIO 2) conflicts with **BOIL\_HEATER\_BUS** (GPIO 2). The actual hardware likely uses the PCF8574 I²C expander for the keypad, not direct GPIO reads.

---

## I²C addresses

| Device | Address | Notes |
|---|---|---|
| **PCF8574** (I/O expander — keypad) | `0x38` | Configurable via `-D PCF8574_ADDRESS=…` |
| **LCD 20×4** | `0x27` | Configurable via `-D LCD_ADDRESS=…` |

---

## Wemos D1 Mini — GPIO ↔ physical pin

| Physical pin | Label | GPIO | Function (BrewBOSS) |
|---|---|---|---|
| 3 | `D0` | 16 | Buzzer |
| 5 | `D1` | 5 | I²C SCL (default) |
| 7 | `D2` | 4 | I²C SDA (default) |
| 8 | `D3` | 0 | Button DOWN |
| 9 | `D4` | 2 | Boil Heater / Button ENTER ⚠️ |
| 11 | `D5` | 14 | Pump |
| 12 | `D6` | 12 | OneWire (DS18B20) |
| 13 | `D7` | 13 | Sparge Heater |
| 14 | `D8` | 15 | Main Heater |
| 19 | `RX` | 3 | Button START |
| 20 | `TX` | 1 | Button UP |

---

## ESP32 DevKit V1 (30‑pin) — GPIO ↔ physical pin

| Physical pin (L/R) | GPIO | Function (BrewBOSS) |
|---|---|---|
| L9 | 0 | Button DOWN |
| L8 | 2 | Boil Heater / Button ENTER |
| L4 | 4 | OneWire (DS18B20) |
| L10* | 1 | Button UP |
| L11* | 3 | Button START |
| R9 | 13 | Sparge Heater |
| R7 | 14 | Pump |
| R8 | 15 | Main Heater |
| R6 | 16 | Buzzer |
| L5 | 21 | I²C SDA (default) |
| L6 | 22 | I²C SCL (default) |

> \* GPIO 1 and 3 on the ESP32 DevKit are shared with the **UART0 RX/TX** (serial console). If using the keypad, avoid using serial monitor simultaneously or remap the buttons.

---

## ESP32‑C3 Super Mini — GPIO ↔ physical pin

| GPIO | Typical board label / pin | Function (BrewBOSS) |
|---|---|---|
| 0 | `IO0` / `D0` | I²C SDA |
| 1 | `IO1` / `D1` | I²C SCL |
| 3 | `IO3` / `D3` | OneWire (DS18B20) |
| 4 | `IO4` / `D4` | Main Heater |
| 5 | `IO5` / `D5` | Sparge Heater |
| 6 | `IO6` / `D6` | Boil Heater |
| 7 | `IO7` / `D7` | Pump |
| 10 | `IO10` / `D10` | Buzzer |

> The C3 Super Mini is a compact board (~20 pins). Pin labels vary by manufacturer; GPIO numbers are definitive.

---

## Overriding pins at build time

Any pin can be changed without editing the source. Add `-D` flags to `platformio.ini` → `build_flags`:

```ini
build_flags =
    -D HEATER_BUS=15
    -D PUMP_BUS=14
    -D TEMPERATURE_BUS=4
    -D BUTTONUP_BUS=1
    -D I2C_SDA=21
    -D I2C_SCL=22
```

---

## Safety & hardware notes

- **All GPIOs output 3.3 V.** Use level shifters or 3.3 V‑compatible SSRs/relay modules.
- The **heater outputs are PWM** (1 kHz) via `analogWrite` (ESP8266) or LEDC (ESP32/C3). Ensure the SSR supports PWM — zero‑cross SSRs will **not** work properly.
- The **pump pin** can be configured as active‑low via `-D INVERT_PUMP=true`.
- **OneWire** requires a 4.7 kΩ pull‑up resistor between data and 3.3 V (ESP8266) or a 2.2–4.7 kΩ resistor for ESP32/C3.
- The **buzzer** pin is non‑blocking, pattern‑based (see `doc/04_DOCUMENTACAO_TECNICA.md` §8).
- **Button pins** are read via the PCF8574 I²C expander when present; direct GPIO reading is a fallback.
