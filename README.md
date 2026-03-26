# 🚤 Bootsvermietung Feurstein — Website

> **Website für Bootsvermietung Feurstein in Bregenz am Bodensee.**
> Tretboot, Kajak, SUP, Segelboot, Schlauchboot & Bootstaxi — Saison Mai bis September.

---

## Lead Score: **74/100** — TIER 1

| Kriterium | Bewertung |
|---|---|
| Lead Score | 74/100 |
| Website vorhanden | NEIN oder minimal |
| Google Maps | ✅ Vorhanden |
| Pain Point | Jeder Tourist googlet "boat rental Bregenz" — ohne Website geht er zur Konkurrenz |
| Saison | Nur Mai–September — jede Woche zählt |
| Konkurrenz | Bodensee Boat Rentals sind umkämpft — eine gute Website ist ein Differenziator |

---

## Outreach-Winkel

> **"Wie viele Touristen gehen an euch vorbei, weil sie nicht wissen, dass ihr Boote verleiht?"**

- Touristen suchen online nach "Boot mieten Bregenz"
- Ohne Website: Sichtbarkeit = 0 bei Google
- Mit Website: Ihr erscheint bei jeder relevanten Suche
- **Saison ist kurz (Mai–September) — maximale Sichtbarkeit in diesen Monaten ist entscheidend**

---

## Business-Facts

- **Adresse:** Seestraße 12, 6900 Bregenz (direkt am Bodensee-Ufer)
- **Telefon:** +43 664 123 4567 (Saison täglich 9:00–18:00)
- **Preisniveau:** €€
- **Saison:** Mai – September (nur ~5 Monate)
- **Services:** Tretboot, Kajak, SUP, Segelboot, Schlauchboot, Bootstaxi

---

## Technologie

- **Next.js 15** + TypeScript
- **Tailwind CSS v3** mit Custom Colors
- **Google Fonts:** Montserrat + DM Sans
- **Responsive** — Mobile-first Design
- **Kein Backend** — Statische Website, einfach zu hosten

---

## Installation & Setup

```bash
cd feurstein-boote
npm install
npx tailwindcss -i ./app/globals.css -o ./public/output.css
npm run build
```

## Development

```bash
npm run dev
```

---

## Deployment mit Coolify

```bash
# 1. Auf Server/clonendem Host:
cd /root/coolify-docker-repositories
git clone https://github.com/YOUR_GITHUB_USER/feurstein-boote.git
cd feurstein-boote

# 2. Dockerfile erstellen (bereits im Repo):
# - Next.js standalone build
# - node:22-alpine base
# - Port 3000

# 3. Coolify UI:
# New Resource → Docker Repository → wähle feurstein-boote
# Domain: feurstein-boote.deine-domain.com
# Port: 3000
```

---

## Deployment mit Docker (Standalone)

```dockerfile
# Dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx tailwindcss -i ./app/globals.css -o ./public/output.css
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
docker build -t feurstein-boote .
docker run -d -p 3000:3000 feurstein-boote
```

---

## Deployment mit Docker + Caddy (HTTPS)

```yaml
# docker-compose.yml
services:
  app:
    build: .
    restart: unless-stopped
    expose:
      - "3000"

  caddy:
    image: caddy:2-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./data:/data
    depends_on:
      - app

  volumes:
    data:
```

```caddy
# Caddyfile
feurstein-boote.deine-domain.com {
    reverse_proxy app:3000
}
```

---

## Deployment auf Netcup VPS (Coolify)

```bash
# SSH zum Server
ssh root@152.53.148.226

# Coolify App erstellen:
# 1. Coolify Dashboard öffnen
# 2. New Project → "Feurstein Boote"
# 3. Add Resource → Docker Repository
# 4. GitHub Repo: https://github.com/YOUR_USER/feurstein-boote
# 5. Build Pack: Nixpacks (Node.js)
# 6. Port: 3000
# 7. Domain: feurstein-boote.euredomain.com
# 8. SSL: Automatic
```

---

## Farbschema

| Farbe | Hex | Verwendung |
|---|---|---|
| Ocean Blue | `#0077BE` | Primärfarbe, Navigation, CTA-BG |
| Ocean Dark | `#005a8f` | Hover-States |
| Sky | `#E8F4FD` | Sections, Hintergründe |
| Sunset Orange | `#FF6B35` | Akzente, CTA-Buttons, Preise |
| Navy | `#1A2E44` | Text, Footer, dunkle Sections |

---

## Seitenstruktur

1. **Navbar** — Fixed, transparent → solid on scroll
2. **Hero** — Fullscreen, Bodensee-Bild, "Der Bodensee wartet auf euch"
3. **Info Strip** — Adresse, Telefon, Saison
4. **Willkommen** — Split-Layout, Bild + Text
5. **Boote / Fleet** — 6er-Grid mit Preisen und Bildern
6. **Saison & Öffnungszeiten** — Emphasis auf kurze Saison
7. **Sicherheit** — 3er-Grid: Schwimmwesten, Einweisung, Versichert
8. **Gruppen & Events** — Dunkle Section, Event-Typen
9. **Standort & Kontakt** — Map + Kontaktdetails
10. **Footer** — Links, Öffnungszeit, Copyright

---

## Nächste Schritte (für Feurstein)

1. ✅ Website clonen/ausrollen
2. Telefonnummer und Adresse verifizieren und eintragen
3. Google Maps Listing optimieren (Fotos hochladen, Öffnungszeiten setzen)
4. Google Business Profile mit Link zur Website
5. Saisonbeginn: Social Media Posts (Instagram, Facebook)
6. Saisonstart: Flyer am Seeufer mit QR-Code zur Website
