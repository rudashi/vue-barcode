import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import VueBarcode from '../src/index'
import JsBarcode from 'jsbarcode'

vi.mock('jsbarcode', () => ({
    default: vi.fn(),
}))

const JsBarcodeMock = JsBarcode as ReturnType<typeof vi.fn>

beforeEach(() => {
    vi.clearAllMocks()
})

describe('rendering', () => {
    it('renders an svg element', () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('renders only a single root svg element', () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(wrapper.findAll('svg')).toHaveLength(1)
    })
})

describe('on mount', () => {
    it('calls JsBarcode exactly once on initial mount', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)
    })

    it('passes the svg element as the first argument to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.any(Object)
        )
    })

    it('passes the value string as the second argument to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            '12345678',
            expect.any(Object)
        )
    })

    it('does not call JsBarcode when value is null', () => {
        mount(VueBarcode, {
            props: { value: null },
        })

        expect(JsBarcodeMock).not.toHaveBeenCalled()
    })

    it('does not call JsBarcode when value is an empty string', () => {
        mount(VueBarcode, {
            props: { value: '' },
        })

        expect(JsBarcodeMock).not.toHaveBeenCalled()
    })
})

describe('default option values', () => {
    it('passes default format CODE128 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ format: 'CODE128' })
        )
    })

    it('passes default width 2 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ width: 2 })
        )
    })

    it('passes default height 100 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ height: 100 })
        )
    })

    it('passes default displayValue true to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ displayValue: true })
        )
    })

    it('passes default font monospace to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ font: 'monospace' })
        )
    })

    it('passes default textAlign center to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ textAlign: 'center' })
        )
    })

    it('passes default textPosition bottom to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ textPosition: 'bottom' })
        )
    })

    it('passes default textMargin 2 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ textMargin: 2 })
        )
    })

    it('passes default fontSize 20 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ fontSize: 20 })
        )
    })

    it('passes default background #ffffff to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ background: '#ffffff' })
        )
    })

    it('passes default lineColor #000000 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ lineColor: '#000000' })
        )
    })

    it('passes default margin 10 to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ margin: 10 })
        )
    })

    it('passes default flat false to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ flat: false })
        )
    })

    it('passes all default options in a single call', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            '12345678',
            expect.objectContaining({
                format: 'CODE128',
                width: 2,
                height: 100,
                displayValue: true,
                font: 'monospace',
                textAlign: 'center',
                textPosition: 'bottom',
                textMargin: 2,
                fontSize: 20,
                background: '#ffffff',
                lineColor: '#000000',
                margin: 10,
                flat: false,
            })
        )
    })

    it('passes undefined for optional margin props when not provided', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        const calledOptions = JsBarcodeMock.mock.calls[0][2]

        expect(calledOptions.marginTop).toBeUndefined()
        expect(calledOptions.marginBottom).toBeUndefined()
        expect(calledOptions.marginLeft).toBeUndefined()
        expect(calledOptions.marginRight).toBeUndefined()
    })

    it('passes undefined for text when text prop is not provided', () => {
        mount(VueBarcode, {
            props: { value: '12345678' },
        })

        const calledOptions = JsBarcodeMock.mock.calls[0][2]

        expect(calledOptions.text).toBeUndefined()
    })
})

describe('individual prop forwarding', () => {
    it('forwards the format prop to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678', format: 'EAN8' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ format: 'EAN8' })
        )
    })

    it('coerces string width prop to a number before passing to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678', width: '4' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ width: 4 })
        )
    })

    it('coerces string height prop to a number before passing to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678', height: '150' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ height: 150 })
        )
    })

    it('coerces string margin prop to a number before passing to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678', margin: '5' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ margin: 5 })
        )
    })

    it('coerces numeric marginTop prop to a number before passing to JsBarcode', () => {
        mount(VueBarcode, {
            props: { value: '12345678', marginTop: '8' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ marginTop: 8 })
        )
    })

    it('coerces string text prop to a string when passed as number', () => {
        mount(VueBarcode, {
            props: { value: '12345678', text: 42 },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ text: '42' })
        )
    })

    it('passes text prop unchanged when already a string', () => {
        mount(VueBarcode, {
            props: { value: '12345678', text: 'Custom label' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ text: 'Custom label' })
        )
    })

    it('passes displayValue false to JsBarcode when set', () => {
        mount(VueBarcode, {
            props: { value: '12345678', displayValue: false },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ displayValue: false })
        )
    })

    it('passes flat true to JsBarcode when set', () => {
        mount(VueBarcode, {
            props: { value: '12345678', flat: true },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ flat: true })
        )
    })

    it('passes value with slashes and CODE128 format to JsBarcode', () => {
        mount(VueBarcode, {
            props: {
                value: 'ZL/098832/1123',
                format: 'CODE128',
            },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            'ZL/098832/1123',
            expect.objectContaining({ format: 'CODE128' })
        )
    })

    it('forwards the valid callback prop to JsBarcode options', () => {
        const validCallback = vi.fn()

        mount(VueBarcode, {
            props: { value: '12345678', valid: validCallback },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ valid: validCallback })
        )
    })
})

describe('options prop overrides', () => {
    it('overrides the format individual prop when format is set in options', () => {
        mount(VueBarcode, {
            props: {
                value: '12345678',
                format: 'CODE128',
                options: { format: 'CODE39' },
            },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ format: 'CODE39' })
        )
    })

    it('overrides the width individual prop when width is set in options', () => {
        mount(VueBarcode, {
            props: {
                value: '12345678',
                width: 2,
                options: { width: 5 },
            },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ width: 5 })
        )
    })

    it('overrides the displayValue individual prop when displayValue is set in options', () => {
        mount(VueBarcode, {
            props: {
                value: '12345678',
                displayValue: true,
                options: { displayValue: false },
            },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ displayValue: false })
        )
    })

    it('merges options prop with individual props, options taking precedence', () => {
        const validCallback = vi.fn()

        mount(VueBarcode, {
            props: {
                value: '12345678',
                format: 'CODE128',
                width: 2,
                options: {
                    format: 'EAN8',
                    lineColor: '#ff0000',
                },
                valid: validCallback,
            },
        })

        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({
                format: 'EAN8',
                width: 2,
                lineColor: '#ff0000',
                valid: validCallback,
            })
        )
    })
})

describe('reactivity on value change', () => {
    it('calls JsBarcode again when value prop changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: 'initial' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)

        await wrapper.setProps({ value: 'updated' })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(2)
    })

    it('passes the new value to JsBarcode after value prop change', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: 'initial' },
        })

        await wrapper.setProps({ value: 'updated' })

        expect(JsBarcodeMock).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            'updated',
            expect.any(Object)
        )
    })

    it('does not call JsBarcode again when value changes from a string to null', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: 'initial' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)

        await wrapper.setProps({ value: null })

        // The watch fires but generateBarcode guards against null value
        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)
    })

    it('calls JsBarcode again when value changes from null to a valid string', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: null },
        })

        expect(JsBarcodeMock).not.toHaveBeenCalled()

        await wrapper.setProps({ value: 'restored' })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)
        expect(JsBarcodeMock).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            'restored',
            expect.any(Object)
        )
    })
})

describe('reactivity on option prop changes', () => {
    it('calls JsBarcode again when format prop changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678', format: 'CODE128' },
        })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)

        await wrapper.setProps({ format: 'CODE39' })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(2)
        expect(JsBarcodeMock).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            '12345678',
            expect.objectContaining({ format: 'CODE39' })
        )
    })

    it('calls JsBarcode again when width prop changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678', width: 2 },
        })

        await wrapper.setProps({ width: 4 })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(2)
        expect(JsBarcodeMock).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ width: 4 })
        )
    })

    it('calls JsBarcode again when height prop changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678', height: 100 },
        })

        await wrapper.setProps({ height: 200 })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(2)
        expect(JsBarcodeMock).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ height: 200 })
        )
    })

    it('calls JsBarcode again when displayValue prop changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678', displayValue: true },
        })

        await wrapper.setProps({ displayValue: false })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(2)
        expect(JsBarcodeMock).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ displayValue: false })
        )
    })

    it('calls JsBarcode again when options prop changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: { value: '12345678', options: { format: 'CODE128' } },
        })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(1)

        await wrapper.setProps({ options: { format: 'CODE39' } })

        expect(JsBarcodeMock).toHaveBeenCalledTimes(2)
        expect(JsBarcodeMock).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            expect.any(String),
            expect.objectContaining({ format: 'CODE39' })
        )
    })
})
