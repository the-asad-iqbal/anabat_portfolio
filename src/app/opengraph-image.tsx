import { ImageResponse } from "next/og";

export const alt =
  "Anabat — Video Editor. Good footage. Unforgettable stories.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Code-rendered artwork stays sharp and can be updated alongside the site.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#fafafa",
        color: "#252525",
        padding: "54px 64px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="42" height="38" viewBox="0 0 42 38">
              <path d="M0 15 42 0 42 23 0 38Z" fill="#0866ff" />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: -2,
              }}
            >
              anabat<span style={{ color: "#0866ff" }}>.</span>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 18 }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.06,
            }}
          >
            Good footage.
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.06,
              color: "#0866ff",
            }}
          >
            Unforgettable stories.
          </div>
          <div style={{ marginTop: 26, fontSize: 23, color: "#72757b" }}>
            Thoughtful cuts. Considered color. Sound that stays.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              gap: 7,
              height: 38,
            }}
          >
            {[170, 285, 110, 220, 259].map((width, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  width,
                  height: "100%",
                  borderRadius: 5,
                  background:
                    index === 1
                      ? "#0866ff"
                      : index === 3
                        ? "#a9caff"
                        : "#e3ebf8",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                left: 400,
                top: -9,
                bottom: -9,
                width: 2,
                background: "#252525",
                display: "flex",
              }}
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                style={{ position: "absolute", left: -5, top: -2 }}
              >
                <path d="M0 0H12L6 8Z" fill="#252525" />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              letterSpacing: 2,
              color: "#72757b",
            }}
          >
            <span>YOUTUBE / SHORT-FORM / BRANDS / PODCASTS</span>
            <span>EDITED BY ANABAT</span>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
