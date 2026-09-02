import { useState } from "react";
import { Orb } from "../../src";
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
import type { ReactAIOrbProps } from "../../src";

const presets: Array<{ name: string; props: ReactAIOrbProps }> = [
  { name: "oceanDepths", props: oceanDepthsPreset },
  { name: "galaxy", props: galaxyPreset },
  { name: "caribean", props: caribeanPreset },
  { name: "cherryBlossom", props: cherryBlossomPreset },
  { name: "emerald", props: emeraldPreset },
  { name: "multiColor", props: multiColorPreset },
  { name: "goldenGlow", props: goldenGlowPreset },
  { name: "volcanic", props: volcanicPreset },
];

export default function App() {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="page">
      <h1>
        react-ai-orb <span className="version">v1.1.0</span>
      </h1>
      <p className="subtitle">
        纯 CSS 动画的 AI 发光球组件 ·{" "}
        <a href="https://github.com/88lin/react-ai-orb">GitHub</a> ·{" "}
        <code>npm i react-ai-orb</code>
      </p>

      <label className="speed-control">
        <span>
          animationSpeedBase：<strong>{speed.toFixed(1)}x</strong>
        </span>
        <input
          type="range"
          min={0.2}
          max={3}
          step={0.1}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </label>

      <div className="grid">
        {presets.map(({ name, props }) => (
          <figure key={name} className="card">
            <Orb {...props} size={1.4} animationSpeedBase={speed} />
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
