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
  size: 2.2,
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
    <label className="control toggle">
      <span className="control-label">{props.label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={props.value}
        className={props.value ? "switch on" : "switch"}
        onClick={() => props.onChange(!props.value)}
      >
        <span className="knob" />
      </button>
    </label>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
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
        <div>
          <h1>
            react-ai-orb <span className="version">v1.1.0</span>
          </h1>
          <p className="subtitle">
            纯 CSS 动画的 AI 发光球组件 ·{" "}
            <a href="https://github.com/88lin/react-ai-orb">GitHub</a> ·{" "}
            <code>npm i react-ai-orb</code>
          </p>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "浅色模式" : "深色模式"}
        </button>
      </header>

      <section className="playground">
        <div className="stage">
          <Orb {...orbProps} />
        </div>

        <div className="panel">
          <div className="control">
            <span className="control-label">调色板 / palette</span>
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

          <Slider
            label="size（82px 基准倍数）"
            value={state.size}
            min={0.5}
            max={4}
            step={0.1}
            onChange={(v) => set("size", v)}
          />
          <Slider
            label="animationSpeedBase"
            value={state.animationSpeedBase}
            min={0}
            max={3}
            step={0.1}
            suffix="x"
            onChange={(v) => set("animationSpeedBase", v)}
          />
          <Slider
            label="animationSpeedHue"
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
          </div>

          <pre className="code">{code}</pre>

          <button
            type="button"
            className="reset"
            onClick={() => setState(defaultState)}
          >
            ↺ 重置所有参数
          </button>
        </div>
      </section>

      <h2>
        全部预设与调色板<span className="version">{presets.length} 种</span>
      </h2>
      <p className="subtitle">点击任意一个加载到上方 Playground</p>
      <div className="grid">
        {presets.map(({ name, props }) => (
          <button
            key={name}
            type="button"
            className="card"
            onClick={() => setState(stateFromProps(props, name === "multiColor" ? "cosmicNebula" : name))}
          >
            <Orb {...props} size={0.9} />
            <span className="card-name">{name}</span>
          </button>
        ))}
      </div>

      <footer className="footer">
        MIT License · Built with react-ai-orb
      </footer>
    </div>
  );
}
