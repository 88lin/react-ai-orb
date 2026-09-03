import React from "react";

interface SvgElementsProps {
  color1: string;
  color2: string;
}

const blobAPath =
  "M23.3,-31.9C28.4,-28.4,29.5,-19.2,31.1,-10.9C32.6,-2.6,34.7,4.7,33.5,11.7C32.3,18.6,27.8,25.3,21.6,28.8C15.5,32.3,7.8,32.6,-0.6,33.5C-9,34.4,-18.1,35.8,-24.8,32.5C-31.5,29.2,-35.9,21.2,-36.5,13.3C-37.2,5.4,-34.1,-2.4,-31.6,-10.4C-29.1,-18.3,-27.2,-26.6,-22.1,-30.1C-16.9,-33.6,-8.4,-32.3,0.3,-32.8C9.1,-33.3,18.2,-35.4,23.3,-31.9Z";

const blobBPath =
  "M19.2,-27.1C25.6,-29.4,32.3,-26,33.8,-20.5C35.3,-15,31.7,-7.5,27.8,-2.2C23.9,3,19.8,6,16.8,8.9C13.8,11.8,11.9,14.6,9.3,18.8C6.7,23,3.3,28.6,-0.7,29.8C-4.7,31,-9.4,27.8,-16.7,26.2C-23.9,24.7,-33.6,24.8,-39.3,20.7C-45.1,16.7,-47,8.3,-45.4,0.9C-43.8,-6.5,-38.8,-13,-32.6,-16.3C-26.4,-19.6,-18.9,-19.7,-13.3,-17.9C-7.6,-16,-3.8,-12.2,1.3,-14.4C6.3,-16.6,12.7,-24.8,19.2,-27.1Z";

const shinePath =
  "M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z";

export const SvgElements = ({ color1, color2 }: SvgElementsProps) => {
  // Gradient ids must be unique per orb. With a shared id, every orb on the page
  // resolves url(#...) to whichever gradient the browser saw first, so orbs with
  // different palettes would all paint their blobs in the first orb's colors.
  // useId is stable across server and client render, so hydration still matches.
  const instanceId = `orb-${React.useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const blobAGradient = `${instanceId}-blob-a`;
  const blobBGradient = `${instanceId}-blob-b`;
  const shineGradient = `${instanceId}-blob-shine`;
  const shineBGradient = `${instanceId}-blob-shine-b`;

  return (
    <>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="orb-blob-a"
      >
        <defs>
          <linearGradient id={blobAGradient} x1="0" x2="1" y1="1" y2="0">
            <stop stopColor={color1} offset="0%" />
            <stop stopColor={color2} offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${blobAGradient})`}
          d={blobAPath}
          transform="translate(50 50)"
          strokeWidth="0"
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="orb-blob-b"
      >
        <defs>
          <linearGradient id={blobBGradient} x1="0" x2="1" y1="1" y2="0">
            <stop stopColor={color1} offset="0%" />
            <stop stopColor={color2} offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${blobBGradient})`}
          d={blobBPath}
          transform="translate(50 50)"
          strokeWidth="0"
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="orb-blob-shine"
      >
        <defs>
          <linearGradient id={shineGradient} x1="0" x2="1" y1="1" y2="0">
            <stop stopColor="white" offset="0%" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${shineGradient})`}
          d={shinePath}
          transform="translate(50 50)"
          strokeWidth="0"
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="orb-blob-shine orb-shine-b"
      >
        <defs>
          <linearGradient id={shineBGradient} x1="0" x2="1" y1="1" y2="0">
            <stop stopColor="white" offset="0%" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${shineBGradient})`}
          d={shinePath}
          transform="translate(50 50)"
          strokeWidth="0"
        />
      </svg>
    </>
  );
};
