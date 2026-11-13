import { ImageResponse } from "next/og";

export const alt = "Michal Kardaš — Product, Delivery & Digital Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#0b0d0c", color: "#f3f0e8", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, fontFamily: "Arial" }}>
      <div style={{ fontSize: 28, fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>Michal Kardaš <span style={{ color: "#d7ff3f" }}>·</span></div>
      <div style={{ fontSize: 68, fontWeight: 800, lineHeight: .95, letterSpacing: "-4px", maxWidth: 1000 }}>
        Propojuju business, produkt a delivery, aby se dobré nápady opravdu dostaly do provozu.
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#aaa79f" }}>
        <span>Product · Delivery · Digital Business · AI</span><span>kardas.cz</span>
      </div>
    </div>,
    size
  );
}
