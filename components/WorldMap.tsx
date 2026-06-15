"use client";
import { useState, useRef, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "/countries-110m.json";

type ExperienceTag = "0→1" | "1→10" | "Consulting" | "Base" | "Current Base";

interface LocationPin {
  name: string;
  coords: [number, number];
  type: "base" | "current" | "operator" | "consulting";
  company: string;
  period: string;
  tags: ExperienceTag[];
  description: string;
}

const COUNTRY_COLORS: Record<string, string> = {
  "784": "#059669",   // UAE — emerald (current base)
  "356": "#4338ca",   // India — indigo
  "276": "#4338ca",   // Germany — indigo
  "032": "#0284c7",   // Argentina — sky
  "578": "#0284c7",   // Norway
  "752": "#0284c7",   // Sweden
  "208": "#0284c7",   // Denmark
  "724": "#0284c7",   // Spain
  "380": "#0284c7",   // Italy
  "764": "#0284c7",   // Thailand
  "414": "#0284c7",   // Kuwait
  "818": "#0284c7",   // Egypt
  "458": "#d97706",   // Malaysia — amber
  "410": "#d97706",   // South Korea
  "682": "#d97706",   // Saudi Arabia
};

const pins: LocationPin[] = [
  { name: "Mumbai", coords: [72.88, 19.08], type: "base", company: "Morgan Stanley", period: "2017", tags: ["Base"], description: "Investment Banking analyst — M&A and capital markets across Indian financial services and consumer sectors." },
  { name: "Gurugram", coords: [77.03, 28.46], type: "base", company: "Kearney", period: "2018–2021", tags: ["Base", "Consulting"], description: "Strategy consulting — cost optimisation, supply chain, PE due diligence and growth strategy across Asia, MENA and India." },
  { name: "Berlin", coords: [13.4, 52.52], type: "base", company: "Delivery Hero", period: "2021–2024", tags: ["Base", "0→1", "1→10"], description: "Building and scaling businesses globally — logistics as a service, shops marketplace and dark store models across 4 continents." },
  { name: "Dubai", coords: [55.27, 25.2], type: "current", company: "noon Food", period: "2024–Present", tags: ["Current Base"], description: "Heading growth and P&L for UAE food delivery — driving customer acquisition, retention and margin across the platform." },
  { name: "Malaysia", coords: [101.69, 3.14], type: "consulting", company: "Major Telecom Player", period: "2017", tags: ["Consulting"], description: "Cost optimisation engagement — structural savings across network, procurement and operations." },
  { name: "South Korea", coords: [126.98, 37.57], type: "consulting", company: "Automotive OEM", period: "2017", tags: ["Consulting"], description: "Production cost reduction — lean manufacturing and supplier rationalisation for a major automotive player." },
  { name: "Saudi Arabia", coords: [45.08, 23.89], type: "consulting", company: "Retail Conglomerate", period: "2018", tags: ["Consulting"], description: "Supply chain and warehousing optimisation — network design and inventory strategy across a major Saudi retail group." },
  { name: "Argentina", coords: [-63.62, -38.42], type: "operator", company: "Delivery Hero / PedidosYa", period: "2021–2022", tags: ["0→1", "1→10"], description: "Built logistics as a service from scratch and scaled a shops marketplace (grocery, pharmacy, beauty) to market leadership." },
  { name: "Nordics", coords: [15.5, 63.0], type: "operator", company: "Delivery Hero", period: "2021", tags: ["0→1"], description: "Launched logistics as a service (0→1) and a shops marketplace (grocery, pharmacy, beauty) across Scandinavia." },
  { name: "Spain", coords: [-3.75, 40.42], type: "operator", company: "Delivery Hero", period: "2021–2022", tags: ["1→10"], description: "Scaled shops marketplace (grocery, pharmacy, beauty) from initial launch to significant market scale." },
  { name: "Italy", coords: [12.49, 41.9], type: "operator", company: "Delivery Hero", period: "2021–2022", tags: ["0→1", "1→10"], description: "Built logistics as a service from the ground up and scaled a shops marketplace across major Italian cities." },
  { name: "APAC — SG / HK / TW / TH", coords: [103.82, 1.36], type: "operator", company: "Delivery Hero / foodpanda", period: "2022–2023", tags: ["1→10"], description: "Scaled shops marketplace (grocery, pharmacy, beauty) across Singapore, Hong Kong, Taiwan and Thailand." },
  { name: "MENA — UAE, Kuwait, Bahrain, Egypt", coords: [47.5, 26.5], type: "operator", company: "Talabat", period: "2021–2023", tags: ["0→1", "1→10"], description: "Built Talabat Express (dark store as a service + rider on demand), scaled grocery, health and beauty for Talabat Shops across MENA." },
  { name: "India — Consulting", coords: [80.0, 21.5], type: "consulting", company: "Kearney", period: "2018–2021", tags: ["Consulting"], description: "PE due diligence for two major Indian retail investments · New product strategy for a commercial automotive player · Recovery strategy for a financial services firm · Growth strategy for an oil & gas major." },
];

const tagStyle: Record<ExperienceTag, string> = {
  "Current Base": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Base":         "bg-indigo-100 text-indigo-700 border-indigo-200",
  "0→1":          "bg-violet-100 text-violet-700 border-violet-200",
  "1→10":         "bg-sky-100 text-sky-700 border-sky-200",
  "Consulting":   "bg-amber-100 text-amber-700 border-amber-200",
};

const pinDot: Record<LocationPin["type"], { fill: string; ring: string; r: number }> = {
  current:    { fill: "#059669", ring: "#a7f3d0", r: 7 },
  base:       { fill: "#4338ca", ring: "#c7d2fe", r: 6 },
  operator:   { fill: "#0284c7", ring: "#bae6fd", r: 5 },
  consulting: { fill: "#d97706", ring: "#fde68a", r: 5 },
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.6;

export default function WorldMap() {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([20, 15]);
  const [active, setActive] = useState<LocationPin | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  // pan state
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef<{ x: number; y: number; center: [number, number] } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const zoomIn  = () => setZoom(z => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const zoomOut = () => setZoom(z => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
  const reset   = () => { setZoom(1); setCenter([20, 15]); setActive(null); };

  // Pan handlers — mouse
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("circle")) return; // don't pan on pin click
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, center: [...center] as [number, number] };
  }, [center]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning || !panStart.current) return;
    const dx = (e.clientX - panStart.current.x) / (zoom * 10);
    const dy = (e.clientY - panStart.current.y) / (zoom * 10);
    setCenter([panStart.current.center[0] - dx * 10, panStart.current.center[1] + dy * 6]);
  }, [isPanning, zoom]);

  const onMouseUp = useCallback(() => setIsPanning(false), []);

  const handlePin = (pin: LocationPin, e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setActive(active?.name === pin.name ? null : pin);
  };

  return (
    <div id="map" className="mt-16">
      {/* Header */}
      <div className="mb-8">
        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-2">Global Footprint</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">Where I&apos;ve Built &amp; Consulted</h3>
        <p className="text-black/40 text-sm leading-relaxed max-w-xl">
          Click any pin to see the story. Use the buttons to zoom — drag to pan.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { color: "#059669", label: "Current base" },
          { color: "#4338ca", label: "Home base" },
          { color: "#0284c7", label: "Operator / builder" },
          { color: "#d97706", label: "Consulting" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5 text-xs text-black/50 font-semibold bg-white border border-black/[0.07] rounded-full px-3 py-1 shadow-sm">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>

      {/* Map container */}
      <div
        ref={mapRef}
        className="relative rounded-2xl overflow-hidden border border-black/[0.07] shadow-md bg-[#ddd8d0] select-none"
        style={{ height: 460, cursor: isPanning ? "grabbing" : "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
      >
        <ComposableMap
          projectionConfig={{ scale: 148 * zoom, center }}
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const customColor = COUNTRY_COLORS[String(geo.id)];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={customColor ?? "#cdc7be"}
                    stroke={customColor ? "rgba(255,255,255,0.5)" : "#bdb8af"}
                    strokeWidth={customColor ? 0.7 : 0.4}
                    style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
                  />
                );
              })
            }
          </Geographies>

          {pins.map((pin) => {
            const s = pinDot[pin.type];
            const isActive = active?.name === pin.name;
            return (
              <Marker key={pin.name} coordinates={pin.coords}>
                <circle r={s.r + 6} fill={s.ring} opacity={isActive ? 0.7 : 0.3} style={{ pointerEvents: "none" }} />
                <circle r={s.r + 2} fill="white" opacity={0.5} style={{ pointerEvents: "none" }} />
                <circle
                  r={s.r}
                  fill={s.fill}
                  stroke="white"
                  strokeWidth={1.5}
                  style={{ pointerEvents: "all", cursor: "pointer", transform: isActive ? "scale(1.35)" : "scale(1)", transformOrigin: "center", transition: "transform 0.15s ease" }}
                  onClick={(e) => handlePin(pin, e as unknown as React.MouseEvent)}
                />
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Zoom controls — top right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {[
            { label: "+", action: zoomIn,  disabled: zoom >= MAX_ZOOM },
            { label: "−", action: zoomOut, disabled: zoom <= MIN_ZOOM },
            { label: "↺", action: reset,   disabled: false },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={btn.action}
              disabled={btn.disabled}
              className="w-8 h-8 rounded-lg bg-white border border-black/[0.1] shadow-sm text-black/60 hover:text-black hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold flex items-center justify-center transition-colors"
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Tooltip */}
        {active && (
          <div
            className="absolute z-20"
            style={{
              left: tooltipPos.x + 14,
              top: Math.max(8, tooltipPos.y - 16),
              maxWidth: 280,
              transform: tooltipPos.x > 700 ? "translateX(calc(-100% - 28px))" : undefined,
              pointerEvents: "none",
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-black/[0.08] p-4 pointer-events-auto">
              <button onClick={() => setActive(null)} className="absolute top-3 right-3 text-black/25 hover:text-black/60 text-lg leading-none">×</button>
              <h4 className="font-bold text-[#111] text-sm leading-tight pr-5">{active.name}</h4>
              <p className="text-indigo-600 text-xs font-semibold mt-0.5">{active.company}</p>
              <p className="text-black/35 text-xs mb-3">{active.period}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {active.tags.map((t) => (
                  <span key={t} className={`text-xs px-2 py-0.5 rounded-full border font-bold ${tagStyle[t]}`}>{t}</span>
                ))}
              </div>
              <p className="text-black/55 text-xs leading-relaxed">{active.description}</p>
            </div>
          </div>
        )}

        {/* Zoom hint */}
        {zoom === 1 && !active && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-black/40 text-xs px-3 py-1 rounded-full border border-black/[0.07] font-medium pointer-events-none whitespace-nowrap">
            Click a pin · use +/− to zoom · drag to pan
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
        {/* Home bases — Dubai first, highlighted */}
        <div className="bg-white rounded-xl border border-black/[0.07] p-4 shadow-sm">
          <p className="text-xl font-bold text-[#111]">4</p>
          <p className="text-xs font-bold text-black/55 mt-0.5">Home bases</p>
          <p className="text-xs mt-1 leading-relaxed">
            <span className="text-emerald-600 font-semibold">Dubai</span>
            <span className="text-black/30"> · Berlin · Gurugram · Mumbai</span>
          </p>
        </div>
        <div className="bg-white rounded-xl border border-black/[0.07] p-4 shadow-sm">
          <p className="text-xl font-bold text-[#111]">15+</p>
          <p className="text-xs font-bold text-black/55 mt-0.5">Countries</p>
          <p className="text-xs text-black/30 mt-0.5">Across 4 continents</p>
        </div>
        <div className="bg-white rounded-xl border border-black/[0.07] p-4 shadow-sm">
          <p className="text-xl font-bold text-[#111]">3</p>
          <p className="text-xs font-bold text-black/55 mt-0.5">Engagement modes</p>
          <p className="text-xs text-black/30 mt-0.5">Operator · Consultant · Banker</p>
        </div>
      </div>
    </div>
  );
}
