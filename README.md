# react-ai-orb   ![downloads](https://img.shields.io/npm/dm/react-ai-orb.svg?color=5f63f1)
A beautiful, customizable animated orb component for React applications! Perfect for AI interfaces, assistants, interactive chatbots, or anywhere you need a glowing orb. 🔮✨


<p align="center" width="100%"><img src="https://github.com/user-attachments/assets/5f7c4adc-8389-44fe-86ab-00d4be71b611" /></p>
<!--
 <p align="center" width="100%"><img src="https://github.com/user-attachments/assets/07c87ec3-1c81-4295-9ee3-c0f0bfaca6dc" /></p>
 <p align="center" width="100%"><img src="https://github.com/user-attachments/assets/4021e7ed-a5e5-49ca-9b85-4f5908cd03ab" /></p>
 -->
 
## 🚀 Installation
Install the package via npm:

```
npm i react-ai-orb
```

Requires React 19 (`react` and `react-dom` `^19.0.0`) as a peer dependency.

## 💻 Usage
```jsx
import { Orb } from "react-ai-orb";

const MyComponent = () => (
  return  <Orb />
);
```

## ⚛️ Next JS 
The component needs to be imported like this:
```jsx
"use client";
import { Orb } from "react-ai-orb";
```

## ⚙️ Props
| Prop                  | Type        | Default         | Description                                                                 |
|-----------------------|-------------|-----------------|-----------------------------------------------------------------------------|
| `palette`            | `OrbPalette` | `cosmicNebula`     | Defines the color palette for the orb. Use predefined palettes or create custom ones. |
| `size`               | `number`     | `1`     | Sets the size of the orb.                                                   |
| `animationSpeedBase` | `number`     | `1`     | Determines the base speed of the rotation animation. Can be updated at runtime — the orb speeds up or slows down from its current position instead of restarting. |
| `animationSpeedHue`  | `number`     | `1`     | Sets the speed of the hue animation. Can also be updated at runtime without restarting the animation. |
| `hueRotation`        | `number`     | `120`     | Adjusts the hue rotation degree for the orb colors.                         |
| `mainOrbHueAnimation`| `boolean`    | `false`     | Enables or disables the hue animation on the main orb.                      |
| `blobAOpacity`       | `number`     | `0.3`     | Controls the opacity of blob A (range: 0 to 1).                             |
| `blobBOpacity`       | `number`     | `0.8`     | Controls the opacity of blob B (range: 0 to 1).                             |
| `noShadow`           | `boolean`     | `false`     | Disables the Orb's shadow when set to `true`.                   |

## 🎨 Palette

| Property         | Type     | Description                                                                 |
|------------------|----------|-----------------------------------------------------------------------------|
| `mainBgStart`    | `string` | The starting color of the orb's main background gradient.                   |
| `mainBgEnd`      | `string` | The ending color of the orb's main background gradient.                     |
| `shadowColor1`   | `string` | The first shadow color applied to the orb.                                  |
| `shadowColor2`   | `string` | The second shadow color applied to the orb.                                 |
| `shadowColor3`   | `string` | The third shadow color applied to the orb.                                  |
| `shadowColor4`   | `string` | The fourth shadow color applied to the orb.                                 |
| `shapeAStart`    | `string` | The starting color of shape A.                                              |
| `shapeAEnd`      | `string` | The ending color of shape A.                                                |
| `shapeBStart`    | `string` | The starting color of shape B.                                              |
| `shapeBMiddle`   | `string` | The middle color of shape B.                                                |
| `shapeBEnd`      | `string` | The ending color of shape B.                                                |
| `shapeCStart`    | `string` | The starting color of shape C.                                              |
| `shapeCMiddle`   | `string` | The middle color of shape C.                                                |
| `shapeCEnd`      | `string` | The ending color of shape C.                                                |
| `shapeDStart`    | `string` | The starting color of shape D.                                              |
| `shapeDMiddle`   | `string` | The middle color of shape D.                                                |
| `shapeDEnd`      | `string` | The ending color of shape D.                                                |

## 📦 Presets

<p align="center" width="100%"><img src="https://github.com/user-attachments/assets/64c8d073-d9d9-45bb-8183-428f19963caf" /></p>
  
### Preset Usage
```jsx
import { Orb, oceanDepthsPreset } from "react-ai-orb";

const MyComponent = () => (
  return  <Orb {...oceanDepthsPreset} />
);
```

### Included Presets
- 🪼 `oceanDepthsPreset`
- 🌌 `galaxyPreset`
- 🌊 `caribeanPreset`
- 🌸 `cherryBlossomPreset`
- ❇️ `emeraldPreset`
- 🦄 `multiColorPreset`
- ☀️ `goldenGlowPreset`


## 👨‍💻 Development
```
npx rollup -c
```

## 🤝 Contributing
Feel free to open issues or submit PRs for new features, bug fixes, or documentation improvements.
