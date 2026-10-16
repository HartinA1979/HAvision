# HAvision – neues Website-Design

Neues, modernes Design für [ha-vision.at](https://ha-vision.at).

## Vorgaben

- Farben der bestehenden Seite beibehalten (Blau `#1769d2` / `#0d4ea2`, Türkis `#14b8a6`, Text `#142033` / `#46566d`, Linien `#d9e5f2`, Schrift Inter)
- Kein Card-Design mehr: Struktur über Weißraum, Haarlinien und Hintergrundwechsel (weiß / hellblau / dunkelblau)
- Texte unverändert übernommen
- Klare Struktur, voll responsive (ab 320 px, Burger-Menü unter 900 px, Touch-Flächen ≥ 44 px)

## Inhalt

| Pfad | Zweck |
|---|---|
| `design/index.html` | Startseite als statischer HTML-Prototyp |
| `design/css/style.css` | Gesamtes Styling inkl. Design-Tokens (`:root`) und Breakpoints |
| `design/js/main.js` | Mobile Navigation (Burger-Menü) |
| `design/img/` | Header-Bild, Logo und Referenzbilder (WebP) |

Ansehen: `design/index.html` direkt im Browser öffnen.

## Nächste Schritte

1. Design der Startseite abnehmen
2. Übrige Seiten im gleichen Stil: Über HAvision, Leistungen, Referenzen (Übersicht und Detailseiten), Kontakt
3. Übertragung in das WordPress-Theme `havision` (benötigt den bestehenden Theme-Code, damit Custom Post Type `reference`, Meta-Felder und Kontaktformular-Handler kompatibel bleiben)
