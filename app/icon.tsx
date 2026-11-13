import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#171715", color: "#d7ff3f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, fontWeight: 900, letterSpacing: "-3px" }}>MK</div>,
    size
  );
}
