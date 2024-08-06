import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          backgroundColor: "rgb(2, 6, 23)",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        AN
      </div>
    ),
    {
      ...size,
    },
  );
}
