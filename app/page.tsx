"use client";

import { useEffect, useState } from "react";
import WhatsAppButton from '@/components/WhatsAppButton';

const PHONE = "+43 664 123 4567";
const PHONE_LINK = "tel:+436641234567";

const boats = [
  {
    name: "Tretboot",
    price: "€20",
    unit: "/Stunde",
    desc: "Für Familien, bis 4 Personen",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    tag: "Familie",
  },
  {
    name: "Kajak",
    price: "€15",
    unit: "/Stunde",
    desc: "Einzel oder Doppel",
    image:
      "https://images.unsplash.com/photo-1600362618380-40fd0b618e0e?w=600&q=80",
    tag: "Sport",
  },
  {
    name: "Stand-up Paddle",
    price: "€12",
    unit: "/Stunde",
    desc: "Für Anfänger und Fortgeschrittene",
    image:
      "https://images.unsplash.com/photo-1566221004979-7c5f0fb7f3d6?w=600&q=80",
    tag: "Trend",
  },
  {
    name: "Segelboot",
    price: "€45",
    unit: "/Stunde",
    desc: "Mit oder ohne Segelschein",
    image:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=600&q=80",
    tag: "Klassiker",
  },
  {
    name: "Schlauchboot",
    price: "€18",
    unit: "/Stunde",
    desc: "Für Abenteurer",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    tag: "Abenteuer",
  },
  {
    name: "Bootstaxi",
    price: "Ab €30",
    unit: "",
    desc: "Transport zu jedem Ort am See",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=80",
    tag: "Service",
  },
];

const safetyItems = [
  {
    icon: "🦺",
    title: "Schwimmwesten inklusive",
    desc: "Für jede Größe – sicher unterwegs auf dem Bodensee",
  },
  {
    icon: "📋",
    title: "Einweisung vor Abfahrt",
    desc: "Wir zeigen euch alles – auch für Neulinge",
  },
  {
    icon: "✅",
    title: "Vollversichert",
    desc: "Alle Boote haftpflichtversichert",
  },
];

const eventTypes = [
  "Firmenfeiern",
  "Geburtstage",
  "Junggesellenabschiede",
  "Familienausflüge",
  "Teamevents",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-body min-h-screen">

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span
            className={`font-heading font-black text-xl tracking-tight ${
              scrolled ? "text-ocean" : "text-white"
            }`}
          >
            🚤 Feurstein
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#boote"
              className={`hidden sm:inline-block text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-navy hover:text-ocean"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Unsere Boote
            </a>
            <a
              href={PHONE_LINK}
              className="bg-sunset text-white font-heading font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:bg-sunset-light hover:scale-105"
            >
              Anrufen
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=85')",
          }}
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/70 via-ocean/50 to-ocean/80" />
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-heading font-bold text-sm sm:text-base px-5 py-2 rounded-full mb-8 tracking-wide">
            🌊 Bregenz · Bodensee · Seit Generationen
          </span>
          <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
            Bootsvermietung
            <br />
            <span className="text-sunset">Feurstein</span>
          </h1>
          <p className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-white/90 mb-4">
            Der Bodensee wartet auf euch
          </p>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12">
            Tretboot, Kajak, SUP, Segelboot & Bootstaxi — direkt am Ufer in
            Bregenz. Mai bis September.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#boote" className="btn-primary">
              🚤 Boot mieten
            </a>
            <a
              href={PHONE_LINK}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-heading font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-ocean"
            >
              📞 {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-ocean py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-white text-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span className="font-body font-medium">Seestraße 12, 6900 Bregenz</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📞</span>
            <a href={PHONE_LINK} className="font-body font-medium hover:text-sunset transition-colors">
              {PHONE}
            </a>
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1">
            <span className="text-sm font-heading font-bold tracking-wide">
              SAISON MAI – SEPTEMBER
            </span>
          </div>
        </div>
      </section>

      {/* ── WILLKOMMEN ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
              alt="Familie auf dem Bodensee"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-sunset text-white font-heading font-black text-2xl px-6 py-4 rounded-2xl shadow-xl">
              Mai – Sept.
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-sunset text-sm tracking-widest uppercase mb-4 block">
              Willkommen
            </span>
            <h2 className="section-title">
              Erlebt den Bodensee{" "}
              <span className="text-gradient">vom Wasser aus!</span>
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              Ob Segelboot, Tretboot, Kajak oder Stand-up Paddle — bei Feurstein
              findet jeder sein Boot. Unser Bootstaxi bringt euch auch zu
              abgelegenen Uferstellen, die ihr zu Fuß nie erreicht.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              Direkt am Seeufer in Bregenz, mit persönlicher Einweisung und
              top gewarteten Booten. Kommt vorbei — der See ruft!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#boote" className="btn-primary">
                Boote ansehen
              </a>
              <a href="#kontakt" className="btn-secondary">
                Standort
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOTE / FLEET ── */}
      <section id="boote" className="section-padding bg-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-heading font-bold text-ocean text-sm tracking-widest uppercase block mb-4">
              Unsere Flotte
            </span>
            <h2 className="section-title">
              Für jeden ist das{" "}
              <span className="text-gradient">richtige Boot</span> dabei
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              Von gemütlich bis sportlich — mietet euer persönliches
              Bodensee-Erlebnis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boats.map((boat) => (
              <div
                key={boat.name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-ocean text-white font-heading font-bold text-xs px-3 py-1.5 rounded-full">
                    {boat.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-black text-xl text-navy">
                      {boat.name}
                    </h3>
                    <div className="text-right">
                      <span className="font-heading font-black text-2xl text-sunset">
                        {boat.price}
                      </span>
                      <span className="text-navy/50 text-sm block">
                        {boat.unit}
                      </span>
                    </div>
                  </div>
                  <p className="text-navy/60 text-sm">{boat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAISON & ÖFFNUNGSZEITEN ── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-heading font-bold text-sunset text-sm tracking-widest uppercase block mb-4">
            Saison & Öffnungszeiten
          </span>
          <h2 className="section-title mb-10">
            Wir haben nur{" "}
            <span className="text-gradient">5 Monate im Jahr</span> — also
            nutzt sie!
          </h2>
          <div className="bg-sky rounded-3xl p-10 sm:p-14">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-heading font-black text-5xl text-ocean mb-2">
                  Mai – September
                </p>
                <p className="text-navy/60 font-medium">
                  Die Bodensee-Saison ist kurz. Und genau das macht sie so
                  besonders.
                </p>
              </div>
              <div>
                <p className="font-heading font-black text-3xl text-navy mb-2">
                  9:00 – 18:00 Uhr
                </p>
                <p className="text-navy/60 font-medium mb-4">
                  Täglich bei gutem Wetter
                </p>
                <p className="text-sm text-navy/40 italic">
                  *Bei Schlechtwetter bitte voranmelden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SICHERHEIT ── */}
      <section className="section-padding bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-heading font-bold text-sunset text-sm tracking-widest uppercase block mb-4">
              Sicherheit zuerst
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
              Sicher auf dem Bodensee unterwegs
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Damit ihr euch vollkommen entspannen könnt
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {safetyItems.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center card-hover border border-white/10"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FÜR GRUPPEN & EVENTS ── */}
      <section className="section-padding bg-gradient-to-br from-ocean-dark to-ocean relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/5" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="font-heading font-bold text-sunset text-sm tracking-widest uppercase block mb-4">
              Special
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Für Gruppen & Events
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Firmenfeiern, Geburtstage, Junggesellenabschiede — mietet ein
              ganzes Boot oder eine ganze Flotte. Unvergessliche Erlebnisse auf
              dem Bodensee!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {eventTypes.map((type) => (
                <span
                  key={type}
                  className="bg-white/15 backdrop-blur-sm text-white font-body font-medium px-5 py-2 rounded-full text-sm border border-white/20"
                >
                  {type}
                </span>
              ))}
            </div>
            <a
              href={PHONE_LINK}
              className="inline-block bg-sunset text-white font-heading font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-sunset-light hover:scale-105"
            >
              Event anfragen — Jetzt anrufen!
            </a>
          </div>
        </div>
      </section>

      {/* ── STANDORT / KONTAKT ── */}
      <section id="kontakt" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-heading font-bold text-ocean text-sm tracking-widest uppercase block mb-4">
              Standort
            </span>
            <h2 className="section-title">
              Direkt am Seeufer in{" "}
              <span className="text-gradient">Bregenz</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-80 relative">
              <img
                src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80"
                alt="Bregenz Bodensee Ufer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ocean/30 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="font-heading font-bold text-navy">
                    Seestraße 12, 6900 Bregenz
                  </p>
                  <p className="text-navy/60 text-sm mt-1">
                    Direkt am Bodensee-Ufer
                  </p>
                </div>
              </div>
            </div>
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-black text-2xl text-navy mb-6">
                  So erreicht ihr uns
                </h3>
                <div className="space-y-5">
                  <a
                    href={PHONE_LINK}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky flex items-center justify-center text-2xl shrink-0 group-hover:bg-ocean group-hover:text-white transition-colors">
                      📞
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy text-lg">
                        {PHONE}
                      </p>
                      <p className="text-navy/50 text-sm">
                        Wir sind in der Saison täglich erreichbar
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-sky flex items-center justify-center text-2xl shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy text-lg">
                        Seestraße 12, 6900 Bregenz
                      </p>
                      <p className="text-navy/50 text-sm">
                        Uferparkplatz — ausgeschildert
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-sky flex items-center justify-center text-2xl shrink-0">
                      🕐
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy text-lg">
                        Mai – September
                      </p>
                      <p className="text-navy/50 text-sm">
                        Täglich 9:00 – 18:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={PHONE_LINK}
                className="btn-primary w-full text-center block"
              >
                📞 Jetzt anrufen und reservieren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy text-white pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div>
              <p className="font-heading font-black text-2xl mb-2">🚤 Feurstein</p>
              <p className="font-heading font-bold text-sunset text-sm">
                Bootsvermietung am Bodensee
              </p>
              <p className="text-white/50 text-sm mt-3 leading-relaxed">
                Erleben Sie den Bodensee vom Wasser aus — mit der ganzen Familie, mit
                Freunden oder Kollegen.
              </p>
            </div>
            <div>
              <p className="font-heading font-bold text-white/70 text-sm mb-4 uppercase tracking-widest">
                Schnelllinks
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#boote" className="hover:text-sunset transition-colors">Unsere Boote</a></li>
                <li><a href="#kontakt" className="hover:text-sunset transition-colors">Standort & Kontakt</a></li>
                <li><a href={PHONE_LINK} className="hover:text-sunset transition-colors">Reservierung</a></li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-white/70 text-sm mb-4 uppercase tracking-widest">
                Öffnungszeit
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Saison: Mai – September<br />
                Täglich 9:00 – 18:00 Uhr<br />
                <span className="text-sunset font-medium">
                  Nur noch wenige Wochen pro Jahr!
                </span>
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Bootsvermietung Feurstein, Bregenz
            </p>
            <p className="text-white/30 text-xs">
              Der Bodensee ruft — seid dabei! 🌊
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 664 789 0123" />
    </div>
  );
}
