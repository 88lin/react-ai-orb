<div align="center">

简体中文 · **[English](./README.en.md)**

<img src="./.github/assets/banner.svg" alt="react-ai-orb" width="100%" />

[![在线预览](https://img.shields.io/badge/在线预览-GitHub_Pages-C026D3?style=for-the-badge&logo=github&logoColor=white&labelColor=1E1B4B)](https://88lin.github.io/react-ai-orb/)
[![React](https://img.shields.io/badge/React-19-7C3AED?style=for-the-badge&logo=react&logoColor=white&labelColor=1E1B4B)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-4F46E5?style=for-the-badge&logo=typescript&logoColor=white&labelColor=1E1B4B)](https://www.typescriptlang.org/)
[![安装方式](https://img.shields.io/badge/安装-Git-2563EB?style=for-the-badge&logo=git&logoColor=white&labelColor=1E1B4B)](#-安装)
[![License](https://img.shields.io/badge/License-MIT-0E7490?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=1E1B4B)](./LICENSE)

**一个美观、可定制的 React 动画球体组件。**

适合 AI 界面、智能助手、聊天机器人，或者任何需要一颗发光球体的地方 ✨

**[🎧 在线预览](https://88lin.github.io/react-ai-orb/)** · [✨ 亮点](#-亮点) · [🚀 快速开始](#-快速开始) · [🔧 Props](#-props) · [🌈 预设](#-预设) · [🎨 调色板](#-调色板) · [❓ 常见问题](#-常见问题)

</div>

---

## ✨ 亮点

> 纯 CSS 驱动的发光球体，零运行时依赖，产物约 4.8 KB（gzip），开箱即用。

- 🎨 **8 套调色板 · 8 个预设** — 内置 `cosmicNebula`、`galaxy`、`oceanDepths` 等，也支持完全自定义颜色
- ⚡ **纯 CSS 动画** — 不依赖 canvas、WebGL 或任何动画库，性能轻盈
- 🔄 **速度实时可调** — 通过 Web Animations 的 `playbackRate` 调速，球体从当前位置平滑加速，不会跳帧重启
- 📐 **任意缩放** — 从内联状态点到全屏主视觉都清晰锐利
- 💅 **样式零配置** — CSS 已内联进构建产物，不需要额外 `import` 任何样式文件
- ♿ **尊重系统偏好** — 系统开启「减弱动态效果」时自动停止动画，只留静态球体
- 🧩 **TypeScript 优先** — 类型定义随 `dist/` 一起提交，装完即有完整补全
- ⚛️ **Next.js 友好** — 兼容 App Router，按客户端组件使用即可

## 📑 目录

- **上手** · [快速开始](#-快速开始) · [安装](#-安装)
- **使用** · [用法](#-用法) · [Next.js](#-nextjs) · [常见问题](#-常见问题)
- **定制** · [Props](#-props) · [预设](#-预设) · [调色板](#-调色板)
- **项目** · [技术栈](#-技术栈) · [项目结构](#-项目结构) · [本地开发](#-本地开发) · [贡献](#-贡献) · [许可证](#-许可证)

## 🚀 快速开始

```bash
npm i github:88lin/react-ai-orb
```

```jsx
import { Orb } from "react-ai-orb";

export const Assistant = () => <Orb />;
```

就这么简单——一颗会发光、会旋转、会变色的球体已经跑起来了。

> [!TIP]
> 想先看效果？访问 [在线预览](https://88lin.github.io/react-ai-orb/)。

## 📦 安装

> [!IMPORTANT]
> 本项目**没有发布到 npm 或任何包平台，只能通过 Git 安装**。
> npm 上同名的 `react-ai-orb` 属于[上游原版](https://github.com/Steve0929/react-ai-orb)，不包含本仓库的改动。

构建产物 `dist/` 已随仓库提交，安装后开箱即用，**不需要本地构建**：

```bash
# npm
npm i github:88lin/react-ai-orb

# pnpm
pnpm add github:88lin/react-ai-orb

# bun
bun add github:88lin/react-ai-orb

# yarn
yarn add react-ai-orb@github:88lin/react-ai-orb
```

> [!NOTE]
> 需要 React 19——`react` / `react-dom` `^19.0.0` 为 peer 依赖。

<details>
<summary><b>锁定版本 · 完整 Git URL · 更新 · 不引入依赖</b></summary>

**锁定到某个提交**（生产环境推荐，避免默认分支变动带来意外）：

```bash
npm i github:88lin/react-ai-orb#<commit-sha>
```

**使用完整 Git URL**（受限网络或需要走 SSH 时）：

```bash
npm i git+https://github.com/88lin/react-ai-orb.git
npm i git+ssh://git@github.com/88lin/react-ai-orb.git
```

**更新到最新提交**：Git 依赖会被 lockfile 固定在解析时的那个提交上，重新执行一次安装命令即可拉到最新代码：

```bash
npm i github:88lin/react-ai-orb
```

**完全不想引入依赖**：克隆仓库后，把 `src/` 下的 `components/`、`palette/`、`presets.ts`、`constants.ts`、`types.ts` 直接拷进你的项目即可——组件本身没有任何外部依赖。

</details>

## 💻 用法

### 基础用法

```jsx
import { Orb } from "react-ai-orb";

const MyComponent = () => <Orb />;
```

样式已经内联在构建产物里，不需要额外引入 CSS 文件。

### 尺寸

`size` 是相对于 **82px 基准直径**的倍数：

```jsx
<Orb size={0.5} />   {/* 41px  — 内联状态点 */}
<Orb size={1} />     {/* 82px  — 默认 */}
<Orb size={4} />     {/* 328px — 主视觉 */}
```

### 响应状态变化

速度类属性可以随时修改，球体会从当前状态平滑过渡，**不会跳回起始帧**：

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

## ▲ Next.js

> [!NOTE]
> 组件内部用到了 Hook 与浏览器 API，在 Next.js App Router 中需作为**客户端组件**使用：

```jsx
"use client";
import { Orb } from "react-ai-orb";
```

## 🔧 Props

所有属性均为可选。

| Prop | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `palette` | `OrbPalette` | `cosmicNebula` | 球体配色，可用[内置调色板](#-调色板)或自定义 |
| `size` | `number` | `1` | 尺寸倍数，基于 82px 基准直径 |
| `animationSpeedBase` | `number` | `1` | 旋转速度倍数，可运行时修改、平滑过渡 |
| `animationSpeedHue` | `number` | `1` | 变色速度倍数，同样支持运行时修改 |
| `hueRotation` | `number` | `120` | 色相动画的偏移角度（度），`0` 表示不变色 |
| `mainOrbHueAnimation` | `boolean` | `false` | 是否对主球体也应用色相动画 |
| `blobAOpacity` | `number` | `0.3` | 光斑 A 的不透明度（`0` ~ `1`） |
| `blobBOpacity` | `number` | `0.8` | 光斑 B 的不透明度（`0` ~ `1`） |
| `noShadow` | `boolean` | `false` | 移除球体投影 |

## 🌈 预设

> [!TIP]
> 预设就是一组 props 的集合，展开即用，也可以覆盖其中任意属性。

<p align="center">
  <img src="https://github.com/user-attachments/assets/64c8d073-d9d9-45bb-8183-428f19963caf" alt="8 个内置预设的效果预览" width="100%" />
</p>

```jsx
import { Orb, oceanDepthsPreset } from "react-ai-orb";

const MyComponent = () => <Orb {...oceanDepthsPreset} />;

// 覆盖任意属性
const BiggerAndFaster = () => (
  <Orb {...oceanDepthsPreset} size={2} animationSpeedBase={1.5} />
);
```

| 预设 | 调色板 | 额外调整 |
| :--- | :--- | :--- |
| 🪼 `oceanDepthsPreset` | `oceanDepths` | 光斑 B 更淡 |
| 🌌 `galaxyPreset` | `galaxy` | 转速更快、360° 全幅变色、光斑 B 更淡 |
| 🌊 `caribbeanPreset` | `caribbean` | — |
| 🌸 `cherryBlossomPreset` | `cherryBlossom` | 关闭变色 |
| ❇️ `emeraldPreset` | `emerald` | 关闭变色、光斑 B 更淡 |
| 🦄 `multiColorPreset` | `cosmicNebula` | 全球缓慢变色 |
| ☀️ `goldenGlowPreset` | `goldenGlow` | 关闭变色、光斑 B 更淡 |
| 🌋 `volcanicPreset` | `volcanic` | 关闭变色、光斑 B 更淡 |

## 🎨 调色板

仓库内置 8 套调色板：

`cosmicNebula` · `caribbean` · `cherryBlossom` · `galaxy` · `oceanDepths` · `emerald` · `goldenGlow` · `volcanic`

需要按顺序遍历全部调色板时，可以用导出的 `paletteNames`，它不含下面提到的旧拼写别名。

> [!NOTE]
> 这套配色早期叫 `caribean`（少一个 `b`）。现在正确拼写是 `caribbean`，旧名字作为别名保留，`colorPalettes.caribean` 与 `caribeanPreset` 仍然可用，只是在编辑器里会标为废弃。

```jsx
import { Orb, colorPalettes } from "react-ai-orb";

const MyComponent = () => <Orb palette={colorPalettes.galaxy} />;
```

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

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `mainBgStart` / `mainBgEnd` | `string` | 主球背景渐变 |
| `shadowColor1` … `shadowColor4` | `string` | 四层投影颜色 |
| `shapeAStart` / `shapeAEnd` | `string` | 内形 A 渐变 |
| `shapeBStart` / `shapeBMiddle` / `shapeBEnd` | `string` | 内形 B 渐变 |
| `shapeCStart` / `shapeCMiddle` / `shapeCEnd` | `string` | 内形 C 渐变 |
| `shapeDStart` / `shapeDMiddle` / `shapeDEnd` | `string` | 内形 D 渐变 |

</details>

## ❓ 常见问题

<details>
<summary><b><code>npm i react-ai-orb</code> 为什么装不到这个版本？</b></summary>

本仓库没有发布到 npm。npm 上同名的包是[上游原版](https://github.com/Steve0929/react-ai-orb)，不含本仓库的改动，请按[安装](#-安装)一节用 Git 方式安装。

</details>

<details>
<summary><b>需要单独引入 CSS 吗？</b></summary>

不需要。打包时 CSS 已内联进 `dist/`，组件加载时会自行注入样式。

</details>

<details>
<summary><b>支持 React 18 吗？</b></summary>

本仓库以 React 19 为目标，peer 依赖声明为 `^19.0.0`。项目仍在 React 18 的话，可以改用上游发布的 `react-ai-orb@1.0.13`。

</details>

<details>
<summary><b>支持 SSR 吗？</b></summary>

支持。组件对 `window` 做了判断，服务端渲染时退化为 `useEffect`，不会在渲染阶段访问浏览器 API；调速逻辑只在客户端挂载后执行。在 Next.js 里加上 `"use client"` 即可。

</details>

<details>
<summary><b>浏览器不支持 Web Animations 会怎样？</b></summary>

组件会先检测 `element.getAnimations`，不可用时直接跳过调速：CSS 动画照常播放，只是速度固定在基准值，不会抛错。

</details>

<details>
<summary><b>系统开启了「减弱动态效果」会怎样？</b></summary>

组件跟随 `prefers-reduced-motion: reduce`：旋转、变色和呼吸光斑全部停止，配色与层次保留，球体以静态形态呈现。

</details>

<details>
<summary><b>能覆盖组件自带的样式吗？</b></summary>

可以。所有 class 都带 `orb-` 前缀（`orb-main`、`orb-shape-a`、`orb-blob-a` 等），在你自己的样式表里按这些选择器覆盖即可；反过来，项目里同名的 `.glass`、`.shape-a` 也不会串到球体上。

</details>

<details>
<summary><b>同一个页面放多个球体会互相干扰吗？</b></summary>

不会。内部 SVG 渐变的 id 通过 `useId` 按实例生成，各自独立，多个不同配色的球体可以放在一起。

</details>

## 🧰 技术栈

| 技术 | 用途 |
| :--- | :--- |
| [React 19](https://react.dev/) | UI 库，以 peer 依赖引入 |
| [TypeScript 5](https://www.typescriptlang.org/) | 类型安全，`.d.ts` 随产物一起提交 |
| [Rollup](https://rollupjs.org/) | 打包出 CJS + ESM 双产物到 `dist/` |
| [Vite](https://vite.dev/) | `demo/` 在线预览的开发与构建 |
| 纯 CSS 动画 | 无 canvas / WebGL / 动画库，零运行时依赖 |

## 📁 项目结构

```text
react-ai-orb/
├── src/                        # 组件源码
│   ├── components/
│   │   ├── Orb/
│   │   │   ├── Orb.tsx         # 组件主体，含 playbackRate 调速逻辑
│   │   │   └── styles.css      # 球体与动画样式
│   │   └── SvgElements/
│   │       └── SvgElements.tsx # SVG 内形元素
│   ├── palette/
│   │   └── colorPalettes.ts    # 8 套内置调色板
│   ├── constants.ts            # 基准尺寸、默认值、动画常量
│   ├── presets.ts              # 8 个预设
│   ├── types.ts                # OrbPalette 等类型定义
│   └── index.ts                # 入口导出
├── dist/                       # 构建产物（随仓库提交，Git 安装即用）
├── demo/                       # Vite 在线预览，直接引用 src/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── demo.css
│   ├── index.html
│   └── vite.config.ts
├── .github/
│   ├── assets/                 # README 封面横幅（中 / 英）
│   └── workflows/
│       ├── deploy.yml          # demo 自动部署到 GitHub Pages
│       └── star-history.yml    # 每周生成 Star History 图
├── rollup.config.mjs
├── tsconfig.json
└── package.json
```

## 🔨 本地开发

```bash
git clone https://github.com/88lin/react-ai-orb.git
cd react-ai-orb
npm install
npm run build          # rollup 打包到 dist/
```

预览 demo（直接引用 `src/`，改完即时热更新，不必先构建）：

```bash
cd demo
npm install
npm run dev
```

> [!TIP]
> 改完 `src/` 记得跑一次 `npm run build` 并把 `dist/` 一起提交——通过 Git 安装的用户拿到的正是仓库里的产物。

## 🤝 贡献

欢迎提交 Issue 或 PR——新调色板、新预设、bug 修复或文档改进都可以。

## 📄 许可证

[MIT](./LICENSE) © [88lin](https://github.com/88lin)

## 🙏 致谢

本项目基于 [Steve0929/react-ai-orb](https://github.com/Steve0929/react-ai-orb) 二次开发，感谢原作者 [@Steve0929](https://github.com/Steve0929) 的出色工作。

---

## ⭐ Star History

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/88lin/react-ai-orb/star-history/assets/my-star-history/star-history-dark.svg">
  <img alt="Star History" src="https://raw.githubusercontent.com/88lin/react-ai-orb/star-history/assets/my-star-history/star-history-light.svg">
</picture>

<br><br>

**如果这个项目对你有帮助，给个 ⭐ Star 支持一下吧！**

Made with 🔮 by [88lin](https://github.com/88lin)

</div>
