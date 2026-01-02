export type JsBarcodeFormat =
    | 'CODE128' | 'code128'
    | 'CODE128A' | 'code128a'
    | 'CODE128B' | 'code128b'
    | 'CODE128C' | 'code128c'
    | 'EAN13' | 'ean13'
    | 'EAN8' | 'ean8'
    | 'EAN5' | 'ean5'
    | 'EAN2' | 'ean2'
    | 'UPC' | 'upc'
    | 'CODE39' | 'code39'
    | 'ITF14' | 'itf14'
    | 'MSI' | 'msi'
    | 'MSI10' | 'msi10'
    | 'MSI11' | 'msi11'
    | 'MSI1010' | 'msi1010'
    | 'MSI1111' | 'msi1111'
    | 'PHARMACODE' | 'pharmacode'
    | 'CODABAR' | 'codabar'
    | 'CODE93' | 'code93'

export type JsBarcodeFontOptions = 'bold' | 'italic' | 'bold italic'
export type JsBarcodeFontAlign = 'left' | 'center' | 'right'
export type JsBarcodeFontPosition = 'top' | 'bottom'
export type JsBarcodeHex= `#${string}`

export type JsBarcodeOptions = {
    format?: JsBarcodeFormat
    width?: number
    height?: number
    displayValue?: boolean
    text?: string
    fontOptions?: JsBarcodeFontOptions
    font?: string
    textAlign?: JsBarcodeFontAlign
    textPosition?: JsBarcodeFontPosition
    textMargin?: number
    fontSize?: number
    background?: JsBarcodeHex
    lineColor?: JsBarcodeHex
    margin?: number
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    flat?: boolean
    valid?(valid: boolean): void
}
