import { computed, defineComponent, h, onMounted, PropType, useTemplateRef, watch } from 'vue'
import JsBarcode from 'jsbarcode'
import type {
    JsBarcodeOptions,
    JsBarcodeFormat,
    JsBarcodeFontOptions,
    JsBarcodeFontAlign,
    JsBarcodeFontPosition,
    JsBarcodeHex,
} from './types'

export type {
    JsBarcodeFormat,
    JsBarcodeFontOptions,
    JsBarcodeFontAlign,
    JsBarcodeFontPosition,
    JsBarcodeHex,
    JsBarcodeOptions
} from './types'

export const VueBarcode = defineComponent({
    displayName: 'VueBarcode',
    props: {
        value: {
            type: String as PropType<string>,
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
            ...props.options,
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
        }))

        const generateBarcode = (): void => {
            if (barcodeElement.value) {
                JsBarcode(barcodeElement.value, props.value, options.value)
            }
        }

        onMounted((): void => {
            generateBarcode()
        })

        watch([(): string => props.value, options], (): void => {
            generateBarcode()
        })

        return () => h('svg', { ref: 'barcode' })
    },
})

export default VueBarcode
