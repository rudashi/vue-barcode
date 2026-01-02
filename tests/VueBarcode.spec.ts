import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import VueBarcode from '../src/index'
import JsBarcode from 'jsbarcode'

vi.mock('jsbarcode', () => ({
    default: vi.fn(),
}))

describe('VueBarcode', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders an svg element', () => {
        const wrapper = mount(VueBarcode, {
            props: {
                value: '12345678',
            },
        })
        expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('calls JsBarcode on mount with correct props', () => {
        mount(VueBarcode, {
            props: {
                value: '12345678',
                format: 'EAN8',
                width: 3,
            },
        })

        expect(JsBarcode).toHaveBeenCalledWith(
            expect.any(SVGSVGElement),
            '12345678',
            expect.objectContaining({
                format: 'EAN8',
                width: 3,
            })
        )
    })

    it('re-renders (calls JsBarcode again) when props.value changes', async () => {
        const wrapper = mount(VueBarcode, {
            props: {
                value: 'initial',
            },
        })

        expect(JsBarcode).toHaveBeenCalledTimes(1)
        expect(JsBarcode).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            'initial',
            expect.anything()
        )

        await wrapper.setProps({ value: 'updated' })

        expect(JsBarcode).toHaveBeenCalledTimes(2)
        expect(JsBarcode).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            'updated',
            expect.anything()
        )
    })

    it('re-renders (calls JsBarcode again) when other props change (via computed options)', async () => {
        const wrapper = mount(VueBarcode, {
            props: {
                value: '123',
                format: 'CODE128',
            },
        })

        expect(JsBarcode).toHaveBeenCalledTimes(1)

        await wrapper.setProps({ format: 'CODE39' })
        
        expect(JsBarcode).toHaveBeenCalledTimes(2)
        expect(JsBarcode).toHaveBeenLastCalledWith(
            expect.any(SVGSVGElement),
            '123',
            expect.objectContaining({
                format: 'CODE39',
            })
        )
    })
})
