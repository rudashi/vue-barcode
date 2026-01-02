# vue-barcode

Barcode component for Vue 3 based on [JsBarcode](https://github.com/lindell/JsBarcode).

## Installation

#### NPM:

```bash
npm install @rudashi/vue-barcode
```

#### YARN:

```bash
yarn add @rudashi/vue-barcode
```

## Usage

### Basic use

Import the component and use it in your Vue template. The component will automatically generate a barcode based on the
value provided.

```vue

<script setup>
    import VueBarcode from '@rudashi/vue-barcode';
</script>

<template>
    <vue-barcode value="123456789012"/>
</template>
```

### Use with props

You can also pass options directly as props:

```vue
<vue-barcode
    value="123456789012"
    format="EAN13"
    :display-value="true"
    :height="50"
    line-color="#007bff"
/>
```

or use the `options` prop to pass an object with all options:

```vue
<vue-barcode
    value="123456789012"
    :options="{
      format: 'EAN13',
      displayValue: true,
      height: 50,
      lineColor: '#007bff',
    }"
/>
```

## API Documentation

### Props

| Name           | Type               | Default       | Description                                           |
|:---------------|:-------------------|:--------------|:------------------------------------------------------|
| `value`        | `string`           | **required**  | Barcode value                                         |
| `options`      | `object`           | `undefined`   | JsBarcode options object                              |
| `format`       | `string`           | `‘CODE128’`   | Barcode format                                        |
| `width`        | `number \| string` | `2`           | Width of a single bar                                 |
| `height`       | `number \| string` | `100`         | Barcode height                                        |
| `displayValue` | `boolean`          | `true`        | Whether to display text below the code                |
| `text`         | `number \| string` | `undefined`   | Override the text displayed below the code            |
| `fontOptions`  | `string`           | `‘’`          | Font options (`bold`, `italic`, `bold italic`)        |
| `font`         | `string`           | `‘monospace’` | Font family                                           |
| `textAlign`    | `string`           | `‘center’`    | Text alignment                                        |
| `textPosition` | `string`           | `‘bottom’`    | Text position (`top`, `bottom`).                      |
| `textMargin`   | `number \| string` | `2`           | Text margin                                           |
| `fontSize`     | `number \| string` | `20`          | Font size                                             |
| `background`   | `string`           | `‘#ffffff’`   | Background color (HEX)                                |
| `lineColor`    | `string`           | `‘#000000’`   | Line color (HEX)                                      |
| `margin`       | `number \| string` | `10`          | General margin around the code                        |
| `marginTop`    | `number \| string` | `undefined`   | Top margin                                            |
| `marginBottom` | `number \| string` | `undefined`   | Bottom margin                                         |
| `marginLeft`   | `number \| string` | `undefined`   | Left margin                                           |
| `marginRight`  | `number \| string` | `undefined`   | Right margin                                          |
| `flat`         | `boolean`          | `false`       | Should the code be without anti-aliasing optimization |
| `valid`        | `function`         | `undefined`   | Callback called after code validation                 |

## Supported code formats

The component supports all formats supported by [JsBarcode](https://github.com/lindell/JsBarcode#supported-formats):

- CODE128 (A, B, C)
- EAN (13, 8, 5, 2)
- UPC (A, E)
- CODE39
- ITF / ITF14
- MSI / MSI10 / MSI11 / MSI1010 / MSI1111
- Pharmacode
- Codabar
- CODE93

## License

Package is open-sourced software licensed under the [MIT license](LICENSE)
