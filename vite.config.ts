/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'VueBarcode',
            fileName: (format) => `vue-barcode.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'jsbarcode'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    jsbarcode: 'JsBarcode',
                },
            },
        },
    },
    plugins: [
        dts(),
    ],
    test: {
        environment: 'jsdom',
    },
})
