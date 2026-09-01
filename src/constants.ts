export const baseOrbSize = 82; // Base size of the main orb in px
export const baseShapeSize = 72; // Base size of the inner shapes in px
export const defaultSize = 1;

export const defaultAnimationSpeedBase = 1;
export const defaultAnimationSpeedHue = 1;

// Animation durations in the stylesheet are derived from this reference speed and
// never change. Speed props are applied at runtime through the Web Animations
// playbackRate instead, because rewriting animation-duration makes every running
// animation jump back to its starting frame.
export const referenceAnimationSpeed = 1;
export const baseAnimationDuration = 1 / (referenceAnimationSpeed * 0.5); // seconds

// Keyframe names shared between styles.css and the playbackRate logic.
export const rotationAnimationName = "rotateDiagonal";
export const hueAnimationName = "hueShift";

export const defaultHueRotation = 120;
export const defaultMainOrbHueAnimation = false;

export const defaultBlobAOpacity = 0.3;
export const defaultBlobBOpacity = 0.8;

export const defaultNoShadowValue = false;
