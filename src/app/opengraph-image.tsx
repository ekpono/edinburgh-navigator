import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Edinburgh Navigator — Your guide to Scotland's capital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "rgba(56,189,248,0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Top — badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "100px",
            padding: "10px 24px",
            width: "fit-content",
          }}
        >
          <span style={{ fontSize: "22px" }}>🏰</span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Edinburgh, Scotland
          </span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Edinburgh
            <br />
            <span style={{ color: "#38bdf8" }}>Navigator.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(148,163,184,1)",
              fontWeight: 400,
              maxWidth: "680px",
              lineHeight: 1.4,
            }}
          >
            Housing rights · NHS Lothian · Scottish benefits · Transport · Council services
          </div>
        </div>

        {/* Bottom — pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["🏘️ Housing", "🏥 Health", "🚌 Transport", "💼 Employment", "🗺️ Neighbourhoods", "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Visitor Guide"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
