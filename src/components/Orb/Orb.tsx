import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import "./styles.css";
import { SvgElements } from "../SvgElements/SvgElements";
import { colorPalettes } from "../../palette/colorPalettes";
import {
  baseAnimationDuration,
  baseOrbSize,
  baseShapeSize,
  defaultAnimationSpeedBase,
  defaultAnimationSpeedHue,
  defaultBlobAOpacity,
  defaultBlobBOpacity,
  defaultHueRotation,
  defaultMainOrbHueAnimation,
  defaultNoShadowValue,
  defaultSize,
  hueAnimationName,
  referenceAnimationSpeed,
  rotationAnimationName,
} from "../../constants";
import { ReactAIOrbProps } from "../../types";

// A CSSAnimation exposes the keyframe name it was created from, plain Web
// Animations (created by consumers) do not.
type NamedAnimation = Animation & { animationName?: string };

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const toPlaybackRate = (speed: number) => {
  const rate = speed / referenceAnimationSpeed;
  return Number.isFinite(rate) && rate >= 0 ? rate : 1;
};

export const Orb = ({
  palette = colorPalettes.cosmicNebula,
  size = defaultSize,
  animationSpeedBase = defaultAnimationSpeedBase,
  animationSpeedHue = defaultAnimationSpeedHue,
  hueRotation = defaultHueRotation,
  mainOrbHueAnimation = defaultMainOrbHueAnimation,
  blobAOpacity = defaultBlobAOpacity,
  blobBOpacity = defaultBlobBOpacity,
  noShadow = defaultNoShadowValue,
}: ReactAIOrbProps) => {
  const orbRef = useRef<HTMLDivElement>(null);

  const cssVariables = useMemo(
    () =>
      ({
        "--react-ai-orb-size": `${size * baseOrbSize}px`,
        "--shapes-size": `${size * baseShapeSize}px`,
        "--main-bg-start": palette.mainBgStart,
        "--main-bg-end": palette.mainBgEnd,
        "--shadow-color-1": palette.shadowColor1,
        "--shadow-color-2": palette.shadowColor2,
        "--shadow-color-3": palette.shadowColor3,
        "--shadow-color-4": palette.shadowColor4,
        "--main-shadow": noShadow
          ? "none"
          : `var(--shadow-color-1) 0px 4px 6px 0px,
             var(--shadow-color-2) 0px 5px 10px 0px,
             var(--shadow-color-3) 0px 0px 1px 0px inset,
             var(--shadow-color-4) 0px 1px 7px 0px inset`,
        "--shape-a-start": palette.shapeAStart,
        "--shape-a-end": palette.shapeAEnd,
        "--shape-b-start": palette.shapeBStart,
        "--shape-b-middle": palette.shapeBMiddle,
        "--shape-b-end": palette.shapeBEnd,
        "--shape-c-start": palette.shapeCStart,
        "--shape-c-middle": palette.shapeCMiddle,
        "--shape-c-end": palette.shapeCEnd,
        "--shape-d-start": palette.shapeDStart,
        "--shape-d-middle": palette.shapeDMiddle,
        "--shape-d-end": palette.shapeDEnd,
        "--blob-a-opacity": blobAOpacity,
        "--blob-b-opacity": blobBOpacity,
        "--animation-rotation-speed-base": `${baseAnimationDuration}s`,
        "--animation-hue-speed-base": `${baseAnimationDuration}s`,
        "--hue-rotation": `${hueRotation}deg`,
        "--main-hue-animation": mainOrbHueAnimation
          ? "hueShift var(--animation-hue-speed-base) linear infinite"
          : "none",
      } as React.CSSProperties),
    [
      palette,
      size,
      hueRotation,
      mainOrbHueAnimation,
      blobAOpacity,
      blobBOpacity,
      noShadow,
    ]
  );

  // Speed props drive the playbackRate of the already running animations, so the
  // orb keeps spinning from wherever it is instead of restarting.
  useIsomorphicLayoutEffect(() => {
    const orb = orbRef.current;
    if (!orb || typeof orb.getAnimations !== "function") return;

    const rateByAnimationName = new Map([
      [rotationAnimationName, toPlaybackRate(animationSpeedBase)],
      [hueAnimationName, toPlaybackRate(animationSpeedHue)],
    ]);

    orb.getAnimations({ subtree: true }).forEach((animation) => {
      const name = (animation as NamedAnimation).animationName;
      if (!name) return;

      const rate = rateByAnimationName.get(name);
      if (rate === undefined) return;

      if (typeof animation.updatePlaybackRate === "function") {
        // Applied once the animation is ready, so the new speed takes over
        // without a visible step. Direct assignment is the older fallback.
        animation.updatePlaybackRate(rate);
      } else {
        animation.playbackRate = rate;
      }
    });
    // mainOrbHueAnimation adds or removes an animation, so its rate has to be
    // reapplied when it toggles.
  }, [animationSpeedBase, animationSpeedHue, mainOrbHueAnimation]);

  return (
    <div
      ref={orbRef}
      style={{
        ...cssVariables,
      }}
    >
      <div className="orb-main">
        <div className="glass loc-glass" />
        <div className="shape-a loc-a" />
        <div className="shape-b loc-b" />
        <div className="shape-c loc-c" />
        <div className="shape-d loc-d" />

        <SvgElements color1={palette.mainBgStart} color2={palette.mainBgEnd} />
      </div>
    </div>
  );
};

export default Orb;
