import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // TODO https://github.com/nuxt/framework/issues/3252
    // include: ['dist/__test__/**/mapping.spec.js'],
    include: ['src/__test__/**/mapping.spec.ts'],
    exclude: [],
    watchIgnore: [],
  },
})
