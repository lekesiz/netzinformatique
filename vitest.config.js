import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  test: {
    // Test environment
    environment: 'happy-dom', // or 'jsdom'

    // Global test setup
    globals: true,
    setupFiles: ['./src/test/setup.js'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test/',
        '*.config.js',
        'dist/',
        'build/',
        '**/*.test.{js,jsx}',
        '**/*.spec.{js,jsx}',
        '**/main.jsx',
      ],
      // Enforce the measured baseline and raise these floors as coverage grows.
      lines: 17,
      functions: 18,
      branches: 25,
      statements: 19,
    },

    // Test file patterns
    include: ['**/*.{test,spec}.{js,jsx}'],
    exclude: ['node_modules', 'dist', 'build'],

    // Timeout settings
    testTimeout: 10000,
    hookTimeout: 10000,

    // Watch mode
    watch: false,

    // Keep regular CI output deterministic. Coverage has its own HTML report.
    reporter: ['verbose'],
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
