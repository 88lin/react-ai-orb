import { useEffect, useMemo, useState } from "react";
import { Orb } from "../../src";
import { colorPalettes } from "../../src/palette/colorPalettes";
import type { OrbPalette, ReactAIOrbProps } from "../../src";
import {
  oceanDepthsPreset,
  galaxyPreset,
  caribeanPreset,
  cherryBlossomPreset,
  emeraldPreset,
  multiColorPreset,
  goldenGlowPreset,
  volcanicPreset,
} from "../../src/presets";

const paletteEntries = Object.entries(colorPalettes) as Array<
  [string, OrbPalette]
>;

const presets: Array<{ name: string; props: ReactAIOrbProps }> = [
  { name: "oceanDepths", props: oceanDepthsPreset },
  { name: "galaxy", props: galaxyPreset },
  { name: "caribean", props: caribeanPreset },
  { name: "cherryBlossom", props: cherryBlossomPreset },
  { name: "emerald", props: emeraldPreset },
  { name: "multiColor", props: multiColorPreset },
  { name: "goldenGlow", props: goldenGlowPreset },
  { name: "volcanic", props: volcanicPreset },
  {
    name: "cosmicNebula",
    props: { palette: colorPalettes.cosmicNebula },
  },
];

type OrbState = {
  paletteKey: string;
  size: number;
  animationSpeedBase: number;
  animationSpeedHue: number;
  hueRotation: number;
  mainOrbHueAnimation: boolean;
  blobAOpacity: number;
  blobBOpacity: number;
  noShadow: boolean;
};

const defaultState: OrbState = {
  paletteKey: "oceanDepths",
  size: 3,
  animationSpeedBase: 1,
  animationSpeedHue: 1,
  hueRotation: 120,
  mainOrbHueAnimation: false,
  blobAOpacity: 0.3,
  blobBOpacity: 0.8,
  noShadow: false,
};

function stateFromProps(props: ReactAIOrbProps, paletteKey: string): OrbState {
  return {
    paletteKey,
    size: props.size ?? defaultState.size,
    animationSpeedBase: props.animationSpeedBase ?? 1,
    animationSpeedHue: props.animationSpeedHue ?? 1,
    hueRotation: props.hueRotation ?? 120,
    mainOrbHueAnimation: props.mainOrbHueAnimation ?? false,
    blobAOpacity: props.blobAOpacity ?? 0.3,
    blobBOpacity: props.blobBOpacity ?? 0.8,
    noShadow: props.noShadow ?? false,
  };
}

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="control">
      <span className="control-label">
        {props.label}
        <strong>
          {props.value}
          {props.suffix ?? ""}
        </strong>
      </span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </label>
  );
}

function Toggle(props: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={props.value}
      className={props.value ? "toggle on" : "toggle"}
      onClick={() => props.onChange(!props.value)}
    >
      <span className="switch">
        <span className="knob" />
      </span>
      <span className="toggle-label">{props.label}</span>
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [state, setState] = useState<OrbState>(defaultState);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const set = <K extends keyof OrbState>(key: K, value: OrbState[K]) =>
    setState((s) => ({ ...s, [key]: value }));

  const orbProps: ReactAIOrbProps = useMemo(
    () => ({
      palette: colorPalettes[state.paletteKey as keyof typeof colorPalettes],
      size: state.size,
      animationSpeedBase: state.animationSpeedBase,
      animationSpeedHue: state.animationSpeedHue,
      hueRotation: state.hueRotation,
      mainOrbHueAnimation: state.mainOrbHueAnimation,
      blobAOpacity: state.blobAOpacity,
      blobBOpacity: state.blobBOpacity,
      noShadow: state.noShadow,
    }),
    [state],
  );

  const code = useMemo(() => {
    const lines = [
      `<Orb`,
      `  palette="${state.paletteKey}"`,
      `  size={${state.size}}`,
      `  animationSpeedBase={${state.animationSpeedBase}}`,
      `  animationSpeedHue={${state.animationSpeedHue}}`,
      `  hueRotation={${state.hueRotation}}`,
      `  mainOrbHueAnimation={${state.mainOrbHueAnimation}}`,
      `  blobAOpacity={${state.blobAOpacity}}`,
      `  blobBOpacity={${state.blobBOpacity}}`,
      `  noShadow={${state.noShadow}}`,
      `/>`,
    ];
    return lines.join("\n");
  }, [state]);

  return (
    <div className="page">
      <header className="header">
        <div className="header-left">
          <h1>
            react-ai-<span className="hl">orb</span>
            <span className="version">v1.1.0</span>
          </h1>
          <p className="subtitle">
            <a href="https://github.com/88lin/react-ai-orb">GitHub</a>
            <code>npm i react-ai-orb</code>
          </p>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "深色" : "浅色"}
        </button>
      </header>

      <div className="main">
        <section className="panel">
          <div className="control">
            <span className="control-label">palette</span>
            <div className="palette-chips">
              {paletteEntries.map(([name, p]) => (
                <button
                  key={name}
                  type="button"
                  title={name}
                  className={
                    state.paletteKey === name ? "chip active" : "chip"
                  }
                  onClick={() => set("paletteKey", name)}
                >
                  <span
                    className="dot"
                    style={{
                      background: `linear-gradient(135deg, ${p.mainBgStart}, ${p.mainBgEnd})`,
                    }}
                  />
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="slider-grid">
            <Slider
              label="size"
              value={state.size}
              min={0.5}
              max={4}
              step={0.1}
              onChange={(v) => set("size", v)}
            />
            <Slider
              label="speedBase"
              value={state.animationSpeedBase}
              min={0}
              max={3}
              step={0.1}
              suffix="x"
              onChange={(v) => set("animationSpeedBase", v)}
            />
            <Slider
              label="speedHue"
              value={state.animationSpeedHue}
              min={0}
              max={3}
              step={0.1}
              suffix="x"
              onChange={(v) => set("animationSpeedHue", v)}
            />
            <Slider
              label="hueRotation"
              value={state.hueRotation}
              min={0}
              max={360}
              step={1}
              suffix="°"
              onChange={(v) => set("hueRotation", v)}
            />
            <Slider
              label="blobAOpacity"
              value={state.blobAOpacity}
              min={0}
              max={1}
              step={0.05}
              onChange={(v) => set("blobAOpacity", v)}
            />
            <Slider
              label="blobBOpacity"
              value={state.blobBOpacity}
              min={0}
              max={1}
              step={0.05}
              onChange={(v) => set("blobBOpacity", v)}
            />
          </div>

          <div className="toggle-row">
            <Toggle
              label="mainOrbHueAnimation"
              value={state.mainOrbHueAnimation}
              onChange={(v) => set("mainOrbHueAnimation", v)}
            />
            <Toggle
              label="noShadow"
              value={state.noShadow}
              onChange={(v) => set("noShadow", v)}
            />
            <button
              type="button"
              className="reset"
              onClick={() => setState(defaultState)}
            >
              ↺ 重置
            </button>
          </div>

          <pre className="code">{code}</pre>
        </section>

        <section className="right">
          <div className="stage-wrap">
            <div className="stage">
              <span className="stage-note" aria-hidden="true">
                实时预览 ✳
              </span>
              <Orb {...orbProps} />
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-head">
              <span className="gallery-title">全部效果</span>
              <span className="gallery-count">{presets.length} 种</span>
              <span className="gallery-hint">点一下加载到试玩区</span>
            </div>
            <div className="grid">
              {presets.map(({ name, props }, i) => (
                <button
                  key={name}
                  type="button"
                  className="card"
                  data-tone={i % 3}
                  onClick={() =>
                    setState(
                      stateFromProps(
                        props,
                        name === "multiColor" ? "cosmicNebula" : name,
                      ),
                    )
                  }
                >
                  <Orb {...props} size={0.5} />
                  <span className="card-name">{name}</span>
                  <span className="card-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
