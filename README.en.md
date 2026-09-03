<div align="center">

[**简体中文**](./README.md) · English

<img src="./.github/assets/banner.en.svg" alt="react-ai-orb" width="100%" />

[![live demo](https://img.shields.io/badge/live_demo-GitHub_Pages-3FB950?style=for-the-badge&logo=github&logoColor=white&labelColor=2EA043)](https://88lin.github.io/react-ai-orb/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=23272F)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=235A97)](https://www.typescriptlang.org/)
[![license](https://img.shields.io/npm/l/react-ai-orb?style=for-the-badge&color=14B8A6&labelColor=0F766E&logo=opensourceinitiative&logoColor=white)](./LICENSE)

**A beautiful, customizable animated orb component for React.**
Perfect for AI interfaces, assistants, chatbots, or anywhere you need a glowing orb. ✨

**[🎧 Live Demo](https://88lin.github.io/react-ai-orb/)** · [✨ Features](#highlights) · [🚀 Quick Start](#-quick-start) · [⚙️ Props](#️-props) · [📦 Presets](#-presets-1) · [🎨 Palettes](#-palettes) · [📦 npm](https://www.npmjs.com/package/react-ai-orb)

</div>

---

## Highlights

> A CSS-driven glowing orb with zero runtime dependencies — drop it in and go.

| | |
| :--- | :--- |
| 🎨 **8 palettes · 8 presets** | Built-in `cosmicNebula`, `galaxy`, `oceanDepths` and more — or bring your own colors |
| ⚡ **CSS-driven animation** | No canvas, no WebGL, no animation library — lightweight by design |
| 🔄 **Live-tunable speed** | Change speed props at runtime and the orb accelerates from where it is, no restart |
| 📐 **Fully scalable** | Stays crisp from a tiny inline status dot to a full-screen centerpiece |
| 🧩 **TypeScript-first** | Types shipped in the package, end-to-end typed DX |
| ⚛️ **Next.js friendly** | Works with App Router — just use it as a client component |

## 📑 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [⚛️ Next.js](#️-nextjs)
- [⚙️ Props](#️-props)
- [📦 Presets](#-presets-1)
- [🎨 Palettes](#-palettes)
- [🧰 Tech Stack](#-tech-stack)
- [👨‍💻 Development](#-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [⭐ Star History](#-star-history)

## 🚀 Quick Start

```bash
npm i react-ai-orb
```

```jsx
import { Orb } from "react-ai-orb";

export const Assistant = () => <Orb />;
```

That's it — a glowing, rotating, color-shifting orb is running.

## 📦 Installation

```bash
npm i react-ai-orb
# or
pnpm add react-ai-orb
# or
yarn add react-ai-orb
```

> [!IMPORTANT]
> Requires React 19 — `react` / `react-dom` `^19.0.0` are peer dependencies. Still on React 18? Install [`react-ai-orb@1.0.13`](https://www.npmjs.com/package/react-ai-orb/v/1.0.13).

## 💻 Usage

### Basic

```jsx
import { Orb } from "react-ai-orb";

const MyComponent = () => <Orb />;
```

### Sizing

`size` is a multiplier of the orb's **base 82px diameter**:

```jsx
<Orb size={0.5} />   {/* 41px — inline status dot */}
<Orb size={1} />     {/* 82px — default          */}
<Orb size={4} />     {/* 328px — hero element    */}
```

### Reacting to state

Speed props can be changed at any time. The orb ramps up or down from its
current position, so there is **no visible jump** when the value changes:

```jsx
import { useState } from "react";
import { Orb } from "react-ai-orb";

const Assistant = () => {
  const [isThinking, setIsThinking] = useState(false);

  return (
    <button onClick={() => setIsThinking((t) => !t)}>
      <Orb animationSpeedBase={isThinking ? 3 : 1} />
    </button>
  );
};
```

## ⚛️ Next.js

The component uses browser APIs, so it needs to be a **client component**:

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
| `animationSpeedBase`  | `number`     | `1`            | Rotation speed multiplier. Safe to change at runtime — adjusts smoothly instead of restarting. |
| `animationSpeedHue`   | `number`     | `1`            | Hue-shift speed multiplier. Also safe to change at runtime. |
| `hueRotation`         | `number`     | `120`          | How far the colors travel during the hue animation, in degrees. |
| `mainOrbHueAnimation` | `boolean`    | `false`        | Applies the hue animation to the main orb body as well as the inner shapes. |
| `blobAOpacity`        | `number`     | `0.3`          | Opacity of blob A (`0` to `1`). |
| `blobBOpacity`        | `number`     | `0.8`          | Opacity of blob B (`0` to `1`). |
| `noShadow`            | `boolean`    | `false`        | Removes the orb's drop shadow. |

## 📦 Presets

A preset is just a bundle of props, so you can spread it and override anything.

<p align="center"><img src="https://github.com/user-attachments/assets/64c8d073-d9d9-45bb-8183-428f19963caf" alt="presets preview" width="100%" /></p>

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
| `shapeAStart` / `shapeAEnd`                   | `string` | Gradient of shape A. |
| `shapeBStart` / `shapeBMiddle` / `shapeBEnd`  | `string` | Gradient of shape B. |
| `shapeCStart` / `shapeCMiddle` / `shapeCEnd`  | `string` | Gradient of shape C. |
| `shapeDStart` / `shapeDMiddle` / `shapeDEnd`  | `string` | Gradient of shape D. |

</details>

## 🧰 Tech Stack

| Tech | Description |
|------|-------------|
| [React 19](https://react.dev/) | UI library, peer dependency |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe, types shipped in package |
| [Rollup](https://rollupjs.org/) | Bundles to `dist/` |
| CSS-only animation | No canvas / WebGL / animation lib, zero runtime deps |

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

## 🤝 Contributing

Issues and PRs are welcome — new palettes, new presets, bug fixes, or docs improvements.

## 📄 License

[MIT](./LICENSE) © [88lin](https://github.com/88lin)

## 🙏 Acknowledgments

This project is built on top of
[Steve0929/react-ai-orb](https://github.com/Steve0929/react-ai-orb) —
many thanks to the original author [@Steve0929](https://github.com/Steve0929)
for the excellent work.

---

## ⭐ Star History

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=88lin/react-ai-orb&type=Date&theme=dark">
  <img alt="Star History" src="https://api.star-history.com/svg?repos=88lin/react-ai-orb&type=Date">
</picture>

---

<div align="center">

**If this project helps you, give it a ⭐ Star!**

Made with 🔮 by [88lin](https://github.com/88lin)

</div>
