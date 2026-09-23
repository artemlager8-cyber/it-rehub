import { ImageResponse } from "next/og";
import { Mark, brandGradient } from "@/lib/og";

const size = { width: 180, height: 180 };

export const dynamic = "force-static";

// Home-screen icon for iPhone / iPad (browsers also request this path by default).
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandGradient,
        }}
      >
        <Mark width={72} />
      </div>
    ),
    size,
  );
}
