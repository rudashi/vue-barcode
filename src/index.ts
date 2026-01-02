import { computed, defineComponent, h, onMounted, PropType, useTemplateRef, watch } from 'vue'
import JsBarcode from 'jsbarcode'

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

export const VueBarcode = defineComponent({
    displayName: 'VueBarcode',
    props: {
        value: {
            type: [String, null] as PropType<string | null>,
            required: true,
        },
        options: Object as PropType<JsBarcodeOptions>,
        format: {
            type: String as PropType<JsBarcodeFormat>,
            default: 'CODE128',
        },
        width: {
            type: [String, Number] as PropType<string | number>,
            default: 2,
        },
        height: {
            type: [String, Number] as PropType<string | number>,
            default: 100,
        },
        displayValue: {
            type: Boolean as PropType<boolean>,
            default: true,
        },
        text: [String, Number] as PropType<string | number>,
        fontOptions: {
            type: String as PropType<JsBarcodeFontOptions>,
            default: '',
        },
        font: {
            type: String as PropType<string>,
            default: 'monospace',
        },
        textAlign: {
            type: String as PropType<JsBarcodeFontAlign>,
            default: 'center',
        },
        textPosition: {
            type: String as PropType<JsBarcodeFontPosition>,
            default: 'bottom',
        },
        textMargin: {
            type: [String, Number] as PropType<string | number>,
            default: 2,
        },
        fontSize: {
            type: [String, Number] as PropType<string | number>,
            default: 20,
        },
        background: {
            type: String as PropType<JsBarcodeHex>,
            default: '#ffffff',
        },
        lineColor: {
            type: String as PropType<JsBarcodeHex>,
            default: '#000000',
        },
        margin: {
            type: [String, Number] as PropType<string | number>,
            default: 10,
        },
        marginTop: [String, Number] as PropType<string | number>,
        marginBottom: [String, Number] as PropType<string | number>,
        marginLeft: [String, Number] as PropType<string | number>,
        marginRight: [String, Number] as PropType<string | number>,
        flat: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        valid: Function as PropType<(valid: boolean) => void>
    },
    setup(props) {
        const barcodeElement = useTemplateRef<SVGSVGElement>('barcode')

        const options = computed<JsBarcodeOptions>(() => ({
            format: props.format,
            width: Number(props.width),
            height: Number(props.height),
            displayValue: props.displayValue,
            text: props.text ? String(props.text) : undefined,
            fontOptions: props.fontOptions,
            font: props.font,
            textAlign: props.textAlign,
            textPosition: props.textPosition,
            textMargin: Number(props.textMargin),
            fontSize: Number(props.fontSize),
            background: props.background,
            lineColor: props.lineColor,
            margin: Number(props.margin),
            marginTop: props.marginTop ? Number(props.marginTop) : undefined,
            marginBottom: props.marginBottom ? Number(props.marginBottom) : undefined,
            marginLeft: props.marginLeft ? Number(props.marginLeft) : undefined,
            marginRight: props.marginRight ? Number(props.marginRight) : undefined,
            flat: props.flat,
            valid: props.valid,
            ...props.options,
        }))

        const generateBarcode = (): void => {
            if (props.value && barcodeElement.value) {
                JsBarcode(barcodeElement.value, props.value, options.value)
            }
        }

        onMounted((): void => {
            generateBarcode()
        })

        watch([() => props.value, options], (): void => {
            generateBarcode()
        })

        return () => h('svg', { ref: 'barcode' })
    },
})

export default VueBarcode
