# @mr-hope/vuepress-plugin-theme-color

[![Version](https://img.shields.io/npm/v/@mr-hope/vuepress-plugin-theme-color.svg?style=flat-square&logo=npm) ![Downloads](https://img.shields.io/npm/dm/@mr-hope/vuepress-plugin-theme-color.svg?style=flat-square&logo=npm) ![Size](https://img.shields.io/bundlephobia/min/@mr-hope/vuepress-plugin-theme-color?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mr-hope/vuepress-plugin-theme-color)

Theme-color plugin for vuepress-theme-hope.

## Usage

```bash
npm i @mr-hope/vuepress-plugin-theme-color
```

## Options

- **picker**

  - Type: `Object`
  - Default:

    ```js
    {
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f'
    }
    ```

- **allowNightmode**

  - Type: `Boolean`
  - Default: `true`

  Wether to enable nightmode

## Note

In order to let the stylus compiler to work, you also need to assign the color variable to `$colorPicker` and write it to `.vuepress/styles/palette.styl`:

```stylus
// .vuepress/styles/palette.styl
$colorPicker = {
   colorName1: red,
   colorName2: yellow,
   colorName3: blue
}
```

---

vuepress-theme-hope 的 主题色与夜间模式 插件。

## 使用

```bash
npm i @mr-hope/vuepress-plugin-theme-color
```

## 选项

- **picker**

  - 类型: `Object`
  - 默认值:

    ```js
    {
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f'
    }
    ```

- **allowNightmode**

  - 类型: `Boolean`
  - 默认值: `true`

  是否启用夜间模式

## 注意

为了使 stylus 编译器正常工作，你还需要将颜色变量赋值给 `$colorPicker` 写入 `.vuepress/styles/palette.styl` 中：

```stylus
// .vuepress/styles/palette.styl
$colorPicker = {
  colorName1: red,
  colorName2: yellow,
  colorName3: blue
}
```