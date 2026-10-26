import { ImageResponse } from "next/og";

export const alt = "Shubh Shrivastava — Full-stack engineer & product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 80px", background: "#f8f7f3", color: "#191919" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
          <div style={{ width: 16, height: 16, background: "#ed6b35" }} />
          Full-stack engineer · Next.js · Go · PostgreSQL
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, fontWeight: 800, lineHeight: 0.95, letterSpacing: -6 }}>
          <span>Shubh</span>
          <span style={{ display: "flex" }}>Shrivastava<span style={{ color: "#ed6b35" }}>.</span></span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "3px solid #191919", paddingTop: 24, fontSize: 28 }}>
          <span>Engineering with intent.</span>
          <span>Selected work ↗</span>
        </div>
      </div>
    ),
    size,
  );
}
