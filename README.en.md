<div align="center">

[**简体中文**](./README.md) · English

<img src="./.github/assets/banner.svg" alt="react-ai-orb" width="100%" />

[![npm version](https://img.shields.io/npm/v/react-ai-orb.svg?color=5f63f1)](https://www.npmjs.com/package/react-ai-orb)
[![downloads](https://img.shields.io/npm/dm/react-ai-orb.svg?color=5f63f1)](https://www.npmjs.com/package/react-ai-orb)
[![license](https://img.shields.io/npm/l/react-ai-orb.svg?color=5f63f1)](./LICENSE)
[![types](https://img.shields.io/npm/types/react-ai-orb.svg?color=5f63f1)](https://www.typescriptlang.org/)
[![online demo](https://img.shields.io/badge/live_demo-GitHub_Pages-5f63f1)](https://88lin.github.io/react-ai-orb/)

**A beautiful, customizable animated orb component for React.**
Perfect for AI interfaces, assistants, chatbots, or anywhere you need a glowing orb. ✨

</div>

---

## ✨ Features

- 🎨 **8 built-in palettes** + **8 ready-made presets** — or bring your own colors
- ⚡ **CSS-driven animations** — no canvas, no WebGL, no animation library
- 🔄 **Live-tunable speed** — change the speed props and the orb accelerates from where it is, without restarting
- 📐 **Fully scalable** — from a tiny inline status dot to a full-screen centerpiece
- 🧩 **TypeScript-first**, with types shipped in the package
- ⚛️ **Next.js / App Router friendly**

## 📑 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Next.js](#-nextjs)
- [Props](#-props)
- [Presets](#-presets)
- [Palettes](#-palettes)
- [Development](#-development)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🚀 Installation

```bash
npm i react-ai-orb
```

> Requires React 19 — `react` / `react-dom` `^19.0.0` are peer dependencies.
> Still on React 18? Use `react-ai-orb@1.0.13`.

## 💻 Usage

```jsx
import { Orb } from "react-ai-orb";

const MyComponent = () => <Orb />;
```

### Sizing

`size` is a multiplier of the orb's base 82px diameter:

```jsx
<Orb size={0.5} />   {/* 41px — inline status dot */}
<Orb size={1} />     {/* 82px — default          */}
<Orb size={4} />     {/* 328px — hero element    */}
```

### Reacting to state

The speed props can be changed at any time. The orb ramps up or down from its
current position, so there is no visible jump when the value changes:

```jsx
import { useState } from "react";
import { Orb } from "react-ai-orb";

const Assistant = () => {
  const [isThinking, setIsThinking] = useState(false);

  return (
    <button onClick={() => setIsThinking((thinking) => !thinking)}>
      <Orb animationSpeedBase={isThinking ? 3 : 1} />
    </button>
  );
};
```

## ⚛️ Next.js

The component uses browser APIs, so it needs to be a client component:

```jsx
"use client";
import { Orb } from "react-ai-orb";
```

## ⚙️ Props

Every prop is optional.

| Prop                  | Type         | Default        | Description |
| --------------------- | ------------ | -------------- | ----------- |
| `palette`             | `OrbPalette` | `cosmicNebula` | Colors for the orb. Use a [built-in palette](#-palettes) or a custom one. |
| `size`                | `number`     | `1`            | Size multiplier, relative to the base 82px diameter. |
| `animationSpeedBase`  | `number`     | `1`            | Rotation speed multiplier. Safe to change at runtime — the animation adjusts smoothly instead of restarting. |
| `animationSpeedHue`   | `number`     | `1`            | Hue-shift speed multiplier. Also safe to change at runtime. |
| `hueRotation`         | `number`     | `120`          | How far the colors travel during the hue animation, in degrees. |
| `mainOrbHueAnimation` | `boolean`    | `false`        | Applies the hue animation to the main orb body as well as the inner shapes. |
| `blobAOpacity`        | `number`     | `0.3`          | Opacity of blob A (`0` to `1`). |
| `blobBOpacity`        | `number`     | `0.8`          | Opacity of blob B (`0` to `1`). |
| `noShadow`            | `boolean`    | `false`        | Removes the orb's drop shadow. |

## 📦 Presets

A preset is just a bundle of props, so you can spread it and override anything.

<p align="center" width="100%"><img src="https://github.com/user-attachments/assets/64c8d073-d9d9-45bb-8183-428f19963caf" /></p>

```jsx
import { Orb, oceanDepthsPreset } from "react-ai-orb";

const MyComponent = () => <Orb {...oceanDepthsPreset} />;

// Override anything you like
const BiggerAndFaster = () => (
  <Orb {...oceanDepthsPreset} size={2} animationSpeedBase={1.5} />
);
```

| Preset                    | Palette         | Also tweaks |
| ------------------------- | --------------- | ----------- |
| 🪼 `oceanDepthsPreset`    | `oceanDepths`   | Dimmer blob B |
| 🌌 `galaxyPreset`         | `galaxy`        | Faster rotation, full 360° hue sweep, dimmer blob B |
| 🌊 `caribeanPreset`       | `caribean`      | — |
| 🌸 `cherryBlossomPreset`  | `cherryBlossom` | Hue shift disabled |
| ❇️ `emeraldPreset`        | `emerald`       | Hue shift disabled, dimmer blob B |
| 🦄 `multiColorPreset`     | `cosmicNebula`  | Slow hue shift across the whole orb |
| ☀️ `goldenGlowPreset`     | `goldenGlow`    | Hue shift disabled, dimmer blob B |
| 🌋 `volcanicPreset`       | `volcanic`      | Hue shift disabled, dimmer blob B |

## 🎨 Palettes

Eight palettes ship with the package:

```jsx
import { Orb, colorPalettes } from "react-ai-orb";

const MyComponent = () => <Orb palette={colorPalettes.galaxy} />;
```

`cosmicNebula` · `caribean` · `cherryBlossom` · `galaxy` · `oceanDepths` · `emerald` · `goldenGlow` · `volcanic`

### Custom palettes

Spread a built-in palette and change only the colors you care about:

```tsx
import { Orb, colorPalettes, type OrbPalette } from "react-ai-orb";

const midnight: OrbPalette = {
  ...colorPalettes.galaxy,
  mainBgStart: "#1a0b2e",
  mainBgEnd: "#3d1e6d",
};

const MyComponent = () => <Orb palette={midnight} />;
```

<details>
<summary><b>All <code>OrbPalette</code> properties</b></summary>

The orb is built from a main body plus four rotating inner shapes. Shapes B, C
and D take a three-stop gradient; shape A takes two.

| Property                                     | Type     | Description |
| -------------------------------------------- | -------- | ----------- |
| `mainBgStart` / `mainBgEnd`                   | `string` | Gradient of the orb's main background. |
| `shadowColor1` … `shadowColor4`               | `string` | The four layered shadow colors. |
| `shapeAStart` / `shapeAEnd`                    | `string` | Gradient of shape A. |
| `shapeBStart` / `shapeBMiddle` / `shapeBEnd`   | `string` | Gradient of shape B. |
| `shapeCStart` / `shapeCMiddle` / `shapeCEnd`   | `string` | Gradient of shape C. |
| `shapeDStart` / `shapeDMiddle` / `shapeDEnd`   | `string` | Gradient of shape D. |

</details>

## 👨‍💻 Development

```bash
npm install
npm run build    # bundles to dist/ with rollup
```

Preview the demo locally:

```bash
cd demo
npm install
npm run dev
```

## 📄 License

[MIT](./LICENSE) © 88lin

## 🙏 Acknowledgments

This project is a fork of / built on top of
[Steve0929/react-ai-orb](https://github.com/Steve0929/react-ai-orb) —
many thanks to the original author [@Steve0929](https://github.com/Steve0929)
for the excellent work.

<div align="center">

Made with 🔮

</div>
