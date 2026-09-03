export type OrbPalette = {
  mainBgStart: string;
  mainBgEnd: string;
  shadowColor1: string;
  shadowColor2: string;
  shadowColor3: string;
  shadowColor4: string;
  shapeAStart: string;
  shapeAEnd: string;
  shapeBStart: string;
  shapeBMiddle: string;
  shapeBEnd: string;
  shapeCStart: string;
  shapeCMiddle: string;
  shapeCEnd: string;
  shapeDStart: string;
  shapeDMiddle: string;
  shapeDEnd: string;
};

export type PaletteNames =
  | "cosmicNebula"
  | "caribbean"
  | "galaxy"
  | "oceanDepths"
  | "emerald"
  | "cherryBlossom"
  | "goldenGlow"
  | "volcanic";

export type OrbPalettes = {
  [K in PaletteNames]: OrbPalette;
} & {
  /**
   * @deprecated Misspelled — use `caribbean`. Kept as an alias to the same
   * palette so code written against v1.1.0 and earlier keeps working.
   */
  caribean: OrbPalette;
};

export type ReactAIOrbProps = {
  palette?: OrbPalette;
  size?: number;
  animationSpeedBase?: number;
  animationSpeedHue?: number;
  hueRotation?: number;
  mainOrbHueAnimation?: boolean;
  blobAOpacity?: number;
  blobBOpacity?: number;
  noShadow?: boolean;
};
