/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['dist/__test__/**/mapping.spec.js'],
    exclude: [],
    watchIgnore: [],
  },
})
