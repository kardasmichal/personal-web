import { ImageResponse } from "next/og";

export const alt = "Michal Kardaš — E-commerce, B2B, AI & Digital Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#0b0d0c", color: "#f3f0e8", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, fontFamily: "Arial" }}>
      <div style={{ fontSize: 28, fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>Michal Kardaš <span style={{ color: "#d7ff3f" }}>·</span></div>
      <div style={{ fontSize: 66, fontWeight: 800, lineHeight: .95, letterSpacing: "-4px", maxWidth: 1000 }}>
        Pomáhám firmám růst v digitálu — přes e-commerce, B2B, AI a lepší rozhodování.
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#aaa79f" }}>
        <span>E-commerce · B2B · AI · Roadmapa · Business case</span><span>kardas.cz</span>
      </div>
    </div>,
    size
  );
}
