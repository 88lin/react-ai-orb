<div align="center">

简体中文 · **[English](./README.en.md)**

<img src="./.github/assets/banner.svg" alt="react-ai-orb" width="100%" />

[![npm version](https://img.shields.io/npm/v/react-ai-orb.svg?color=5f63f1)](https://www.npmjs.com/package/react-ai-orb)
[![downloads](https://img.shields.io/npm/dm/react-ai-orb.svg?color=5f63f1)](https://www.npmjs.com/package/react-ai-orb)
[![license](https://img.shields.io/npm/l/react-ai-orb.svg?color=5f63f1)](./LICENSE)
[![types](https://img.shields.io/npm/types/react-ai-orb.svg?color=5f63f1)](https://www.typescriptlang.org/)
[![在线预览](https://img.shields.io/badge/在线预览-GitHub_Pages-5f63f1)](https://88lin.github.io/react-ai-orb/)

**A beautiful, customizable animated orb component for React.**
适合 AI 界面、助手、聊天机器人，或者任何需要一颗发光球体的地方 ✨

</div>

---

## ✨ 特性

- 🎨 **8 套内置调色板** + **8 个开箱即用的预设**，也支持完全自定义颜色
- ⚡ **纯 CSS 动画** —— 不依赖 canvas、WebGL 或任何动画库
- 🔄 **速度实时可调** —— 运行时修改速度属性，球会从当前位置平滑加速，不会跳帧重启
- 📐 **任意缩放** —— 从内联状态点到全屏主角都清晰
- 🧩 **TypeScript 优先**，类型随包发布
- ⚛️ **兼容 Next.js / App Router**

## 📑 目录

- [安装](#-安装)
- [用法](#-用法)
- [Next.js](#-nextjs)
- [Props](#-props)
- [预设](#-预设)
- [调色板](#-调色板)
- [开发](#-开发)
- [许可证](#-许可证)
- [致谢](#-致谢)

## 🚀 安装

```bash
npm i react-ai-orb
```

> 需要 React 19，`react` / `react-dom` `^19.0.0` 为 peer 依赖。
> 还在用 React 18？请安装 `react-ai-orb@1.0.13`。

## 💻 用法

```jsx
import { Orb } from "react-ai-orb";

const MyComponent = () => <Orb />;
```

### 尺寸

`size` 是相对于 82px 基准直径的倍数：

```jsx
<Orb size={0.5} />   {/* 41px — 内联状态点 */}
<Orb size={1} />     {/* 82px — 默认          */}
<Orb size={4} />     {/* 328px — 主视觉       */}
```

### 响应状态变化

速度类属性可以随时修改，球会从当前状态平滑过渡，不会跳回起始帧：

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

组件使用了浏览器 API，需要作为客户端组件使用：

```jsx
"use client";
import { Orb } from "react-ai-orb";
```

## ⚙️ Props

所有属性均可选。

| Prop                  | 类型         | 默认值         | 说明 |
| --------------------- | ------------ | -------------- | ---- |
| `palette`             | `OrbPalette` | `cosmicNebula` | 球体配色，可用[内置调色板](#-调色板)或自定义 |
| `size`                | `number`     | `1`            | 尺寸倍数，基于 82px 基准直径 |
| `animationSpeedBase`  | `number`     | `1`            | 旋转速度倍数，可运行时修改、平滑过渡 |
| `animationSpeedHue`   | `number`     | `1`            | 变色速度倍数，同样支持运行时修改 |
| `hueRotation`         | `number`     | `120`          | 色相动画的偏移角度（度） |
| `mainOrbHueAnimation` | `boolean`    | `false`        | 是否对主球体也应用色相动画 |
| `blobAOpacity`        | `number`     | `0.3`          | 光斑 A 的不透明度（`0` ~ `1`） |
| `blobBOpacity`        | `number`     | `0.8`          | 光斑 B 的不透明度（`0` ~ `1`） |
| `noShadow`            | `boolean`    | `false`        | 移除球体投影 |

## 📦 预设

预设就是一组 props 的集合，可以直接展开并覆盖任意属性。

<p align="center" width="100%"><img src="https://github.com/user-attachments/assets/64c8d073-d9d9-45bb-8183-428f19963caf" /></p>

```jsx
import { Orb, oceanDepthsPreset } from "react-ai-orb";

const MyComponent = () => <Orb {...oceanDepthsPreset} />;

// 任意覆盖
const BiggerAndFaster = () => (
  <Orb {...oceanDepthsPreset} size={2} animationSpeedBase={1.5} />
);
```

| 预设                      | 调色板          | 额外调整 |
| ------------------------- | --------------- | -------- |
| 🪼 `oceanDepthsPreset`    | `oceanDepths`   | 光斑 B 更淡 |
| 🌌 `galaxyPreset`         | `galaxy`        | 转速更快、360° 全幅变色、光斑 B 更淡 |
| 🌊 `caribeanPreset`       | `caribean`      | — |
| 🌸 `cherryBlossomPreset`  | `cherryBlossom` | 关闭变色 |
| ❇️ `emeraldPreset`        | `emerald`       | 关闭变色、光斑 B 更淡 |
| 🦄 `multiColorPreset`     | `cosmicNebula`  | 全球缓慢变色 |
| ☀️ `goldenGlowPreset`     | `goldenGlow`    | 关闭变色、光斑 B 更淡 |
| 🌋 `volcanicPreset`       | `volcanic`      | 关闭变色、光斑 B 更淡 |

## 🎨 调色板

包内内置 8 套调色板：

```jsx
import { Orb, colorPalettes } from "react-ai-orb";

const MyComponent = () => <Orb palette={colorPalettes.galaxy} />;
```

`cosmicNebula` · `caribean` · `cherryBlossom` · `galaxy` · `oceanDepths` · `emerald` · `goldenGlow` · `volcanic`

### 自定义调色板

展开内置调色板，只改你关心的颜色：

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
<summary><b>全部 <code>OrbPalette</code> 属性</b></summary>

球体由一个主球加四个旋转内形构成。B、C、D 三个内形是三段渐变，A 是两段渐变。

| 属性                                          | 类型     | 说明 |
| --------------------------------------------- | -------- | ---- |
| `mainBgStart` / `mainBgEnd`                    | `string` | 主球背景渐变 |
| `shadowColor1` … `shadowColor4`                | `string` | 四层投影颜色 |
| `shapeAStart` / `shapeAEnd`                    | `string` | 内形 A 渐变 |
| `shapeBStart` / `shapeBMiddle` / `shapeBEnd`   | `string` | 内形 B 渐变 |
| `shapeCStart` / `shapeCMiddle` / `shapeCEnd`   | `string` | 内形 C 渐变 |
| `shapeDStart` / `shapeDMiddle` / `shapeDEnd`   | `string` | 内形 D 渐变 |

</details>

## 👨‍💻 开发

```bash
npm install
npm run build    # 使用 rollup 打包到 dist/
```

本地预览 demo：

```bash
cd demo
npm install
npm run dev
```

## 📄 许可证

[MIT](./LICENSE) © 88lin

## 🙏 致谢

本项目基于 [Steve0929/react-ai-orb](https://github.com/Steve0929/react-ai-orb) 进行二次开发，
感谢原作者 [@Steve0929](https://github.com/Steve0929) 的出色工作。

<div align="center">

Made with 🔮

</div>
