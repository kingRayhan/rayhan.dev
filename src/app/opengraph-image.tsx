import { ImageResponse } from "next/og";
export const runtime = "edge";

export const alt = "My images alt text";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div style={{ fontSize: 55 }}>Rayhan</div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
