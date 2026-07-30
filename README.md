# Lerndokumentationen — Elektroinstallateur EFZ

Lerndokumentationen von **Yanik Rösti**, Elektroinstallateur EFZ bei **Etavis**.

Vier Lehrjahre mit je zwölf Themen. Das erste Lehrjahr ist vollständig ausgearbeitet,
die Lehrjahre zwei bis vier sind als Platzhalter angelegt.

Die Seiten sind statisches HTML ohne Build-Schritt und ohne externe Abhängigkeiten
(ausser den Webfonts). Alle Zeichnungen sind als Inline-SVG von Hand erstellt.

## Aufbau

```
index.html          Übersicht — die vier Lehrjahre als Wegstrecke
assets/             gemeinsames Stylesheet und die Sprachumschaltung
lehrjahr-1/         die zwölf Dokumentationen des ersten Lehrjahres
```

## Themen 1. Lehrjahr

| Nr. | Thema | Inhalt |
|-----|-------|--------|
| 01 | Sicherheit am Arbeitsplatz | PSA · 5 Sicherheitsregeln · Wirkung des Stromes · Notfall |
| 02 | Rohre | Arten · Aufbau · Dimensionen · Einsatzort · Verlegeregeln |
| 03 | Kanäle | Arten · Aufbau · Dimensionen · Trennung Strom/Daten |
| 04 | Kabel und Drähte | Farben · Kennzeichnung · Querschnitte · Spannungsfall |
| 05 | Symbole | Schema-Arten · Symbolübersicht · Betriebsmittelkennzeichen · Farben |
| 06 | Sicherungen | Schmelzsicherung · LS-Schalter B/C/D · FI · Selektivität |
| 07 | Steckdosen | SN 441011 · T11 bis T25 · CEE · Montage |
| 08 | Lampenschaltung Schema 3 | Wechselschaltung · Korrespondierende · Aderzahlen |
| 09 | Lampenschaltung Schema 6 | Kreuzschaltung · drei und mehr Schaltstellen |
| 10 | Schrittschaltung | Stromstossschalter · Steuer- und Hauptstromkreis |
| 11 | Treppenhausautomat | Nachlaufzeit · 3- und 4-Leiter-Schaltung |
| 12 | Motorschutzschalter | Aufbau · Auslösecharakteristik · Auslöseklassen |

## Bedienung

* **DE / EN** — Umschalter oben rechts, die Wahl gilt für alle Seiten. Tastenkürzel `Alt` + `L`.
* **Drucken** — jede Seite ist für A4 eingerichtet, Kontrollfragen werden mit Antworten gedruckt.

## Lokal ansehen

```bash
python -m http.server 4340
```

Danach <http://localhost:4340> öffnen.

## Hinweis zu den Normbezügen

Normbezüge (NIN 2020, SN 441011, SN EN 60947, EN/IEC 61386) sind nach Kapitel angegeben.
Werte, die je nach Ausgabe, Hersteller oder Projekt abweichen — Strombelastbarkeit,
Füllgrade, Montagehöhen, Klemmenbezeichnungen — sind im Text als solche gekennzeichnet
und vor der Abgabe in der eigenen NIN-Ausgabe und im Herstellerkatalog zu prüfen.
