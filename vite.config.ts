import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import UnoCSS from "unocss/vite"
import { presetUno, transformerDirectives } from "unocss"
import presetDaisy from "unocss-preset-daisy"

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnoCSS({
      transformers: [transformerDirectives()],
      presets: [presetUno(), presetDaisy()],
    }),
  ],
  build: {
    target: "esnext",
  },
})
