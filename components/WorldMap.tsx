"use client";
import { useState, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type ExperienceTag = "0→1" | "1→10" | "Consulting" | "Base" | "Current Base";

interface CountryEntry {
  id: string; // ISO numeric
  name: string;
  highlight: boolean;
}

interface LocationPin {
  name: string;
  coords: [number, number];
  type: "base" | "project";
  company: string;
  period: string;
  tags: ExperienceTag[];
  description: string;
}

const pins: LocationPin[] = [
  // ── BASES ──
  {
    name: "Mumbai",
    coords: [72.88, 19.08],
    type: "base",
    company: "Morgan Stanley",
    period: "2014 – 2016",
    tags: ["Base"],
    description: "Investment Banking analyst — M&A and capital markets across Indian financial services and consumer sectors.",
  },
  {
    name: "Gurugram",
    coords: [77.03, 28.46],
    type: "base",
    company: "Kearney",
    period: "2016 – 2019",
    tags: ["Base", "Consulting"],
    description: "Strategy consulting — cost optimisation, supply chain, PE due diligence and growth strategy across Asia, MENA and India.",
  },
  {
    name: "Berlin",
    coords: [13.4, 52.52],
    type: "base",
    company: "Delivery Hero",
    period: "2019 – 2023",
    tags: ["Base", "0→1", "1→10"],
    description: "Building and scaling businesses globally — logistics as a service, shops marketplace and dark store models across 4 continents.",
  },
  {
    name: "Dubai",
    coords: [55.27, 25.2],
    type: "base",
    company: "noon Food",
    period: "2023 – Present",
    tags: ["Current Base"],
    description: "Heading growth and P&L for UAE food delivery — driving customer acquisition, retention and margin across the platform.",
  },

  // ── PROJECT MARKETS ──
  {
    name: "Malaysia",
    coords: [101.69, 3.14],
    type: "project",
    company: "Major Telecom Player",
    period: "2017",
    tags: ["Consulting"],
    description: "Cost optimisation engagement — identified $XX0M in structural savings across network, procurement and operations.",
  },
  {
    name: "South Korea",
    coords: [126.98, 37.57],
    type: "project",
    company: "Automotive OEM",
    period: "2017",
    tags: ["Consulting"],
    description: "Production cost reduction strategy for a major automotive player — lean manufacturing and supplier rationalisation.",
  },
  {
    name: "Saudi Arabia",
    coords: [45.08, 23.89],
    type: "project",
    company: "Retail Conglomerate",
    period: "2018",
    tags: ["Consulting"],
    description: "Supply chain and warehousing optimisation across a major Saudi retail group — network design and inventory strategy.",
  },
  {
    name: "Argentina",
    coords: [-63.62, -38.42],
    type: "project",
    company: "Delivery Hero / PedidosYa",
    period: "2020 – 2021",
    tags: ["0→1", "1→10"],
    description: "Built logistics as a service from scratch (0→1) and scaled a shops marketplace (grocery, pharmacy, beauty) to market leadership.",
  },
  {
    name: "Nordics",
    coords: [15.5, 63.0],
    type: "project",
    company: "Delivery Hero",
    period: "2021",
    tags: ["0→1"],
    description: "Launched logistics as a service (0→1) and a shops marketplace (grocery, pharmacy, beauty) across Scandinavia.",
  },
  {
    name: "Spain",
    coords: [-3.75, 40.42],
    type: "project",
    company: "Delivery Hero / Glovo",
    period: "2021 – 2022",
    tags: ["1→10"],
    description: "Scaled shops marketplace (grocery, pharmacy, beauty) from initial launch to significant market scale.",
  },
  {
    name: "Italy",
    coords: [12.49, 41.9],
    type: "project",
    company: "Delivery Hero",
    period: "2021 – 2022",
    tags: ["0→1", "1→10"],
    description: "Built logistics as a service from the ground up and scaled a shops marketplace across major Italian cities.",
  },
  {
    name: "Singapore / APAC",
    coords: [103.82, 1.36],
    type: "project",
    company: "Delivery Hero / foodpanda",
    period: "2022 – 2023",
    tags: ["1→10"],
    description: "Scaled shops marketplace (grocery, pharmacy, beauty) across Singapore, Hong Kong, Taiwan and Thailand.",
  },
  {
    name: "MENA — UAE, Kuwait, Bahrain, Egypt",
    coords: [47.5, 25.5],
    type: "project",
    company: "Talabat",
    period: "2021 – 2023",
    tags: ["0→1", "1→10"],
    description: "Built Talabat Express (dark store as a service), scaled grocery, health and beauty for Talabat Shops across MENA.",
  },
  {
    name: "India — Consulting",
    coords: [80.0, 21.0],
    type: "project",
    company: "Kearney",
    period: "2016 – 2019",
    tags: ["Consulting"],
    description: "PE due diligence for two major Indian retail investments · New product strategy for a commercial automotive player · Recovery strategy for a financial services firm · Growth strategy for an oil & gas major.",
  },
];

const tagStyle: Record<ExperienceTag, string> = {
  "Current Base": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Base": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "0→1": "bg-violet-100 text-violet-700 border-violet-200",
  "1→10": "bg-sky-100 text-sky-700 border-sky-200",
  "Consulting": "bg-amber-100 text-amber-700 border-amber-200",
};

const pinColor: Record<LocationPin["type"], { fill: string; ring: string; size: number }> = {
  base: { fill: "#4f46e5", ring: "#c7d2fe", size: 7 },
  project: { fill: "#0ea5e9", ring: "#bae6fd", size: 5 },
};

export default function WorldMap() {
  const [active, setActive] = useState<LocationPin | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  const handlePin = (pin: LocationPin, e: React.MouseEvent) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltipPos({ x, y });
    setActive(pin);
  };

  return (
    <section id="map" className="py-28 px-6 bg-[#f2f0eb]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
            Global Footprint
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
            Where I&apos;ve Built & Consulted
          </h2>
          <p className="text-black/45 max-w-xl leading-relaxed">
            From investment banking in Mumbai to scaling food delivery across MENA — hover over
            any pin to see the story behind it.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { color: "#4f46e5", label: "Home base" },
            { color: "#0ea5e9", label: "Project / market" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-black/50 font-medium">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: l.color }}
              />
              {l.label}
            </div>
          ))}
          <div className="ml-4 flex flex-wrap gap-2">
            {(Object.keys(tagStyle) as ExperienceTag[]).map((t) => (
              <span key={t} className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${tagStyle[t]}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="relative rounded-2xl overflow-hidden border border-black/[0.07] shadow-md bg-[#e8e4dd] cursor-grab active:cursor-grabbing"
          style={{ height: 480 }}
          onClick={() => setActive(null)}
        >
          <ComposableMap
            projectionConfig={{ scale: 140, center: [20, 20] }}
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup zoom={1} minZoom={0.8} maxZoom={6}>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#d4cfc6"
                      stroke="#c5bfb5"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#c8c2b8", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {pins.map((pin) => {
                const s = pinColor[pin.type];
                return (
                  <Marker
                    key={pin.name}
                    coordinates={pin.coords}
                    onClick={(e) => { e.stopPropagation(); handlePin(pin, e as unknown as React.MouseEvent); }}
                  >
                    {/* Pulse ring */}
                    <circle
                      r={s.size + 4}
                      fill={s.ring}
                      opacity={active?.name === pin.name ? 0.6 : 0.3}
                      className="transition-opacity duration-200"
                    />
                    {/* Core dot */}
                    <circle
                      r={s.size}
                      fill={s.fill}
                      stroke="white"
                      strokeWidth={1.5}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip */}
          {active && (
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                left: tooltipPos.x + 14,
                top: tooltipPos.y - 10,
                maxWidth: 300,
                transform:
                  tooltipPos.x > 500 ? "translateX(calc(-100% - 28px))" : undefined,
              }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-black/[0.08] p-4 pointer-events-auto">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="font-bold text-[#111] text-sm leading-tight">{active.name}</h4>
                    <p className="text-indigo-600 text-xs font-semibold mt-0.5">{active.company}</p>
                  </div>
                  <span className="text-black/30 text-xs whitespace-nowrap mt-0.5">{active.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {active.tags.map((t) => (
                    <span key={t} className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${tagStyle[t]}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-black/55 text-xs leading-relaxed">{active.description}</p>
              </div>
            </div>
          )}

          {/* Hint */}
          {!active && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-black/40 text-xs px-3 py-1.5 rounded-full border border-black/[0.07] font-medium pointer-events-none">
              Click a pin · scroll to zoom
            </div>
          )}
        </div>

        {/* Count strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { value: "4", label: "Home bases", sub: "Mumbai · Gurugram · Berlin · Dubai" },
            { value: "15+", label: "Countries", sub: "Across 4 continents" },
            { value: "3", label: "Engagement types", sub: "Operator · Consultant · Banker" },
            { value: "4", label: "Verticals", sub: "Food · Retail · Automotive · Finance" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-black/[0.07] p-4 shadow-sm"
            >
              <p className="text-2xl font-bold text-[#111]">{s.value}</p>
              <p className="text-sm font-semibold text-black/60 mt-0.5">{s.label}</p>
              <p className="text-xs text-black/30 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
