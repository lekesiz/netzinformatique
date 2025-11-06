import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

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
      // Target coverage thresholds
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },

    // Test file patterns
    include: ['**/*.{test,spec}.{js,jsx}'],
    exclude: ['node_modules', 'dist', 'build'],

    // Timeout settings
    testTimeout: 10000,
    hookTimeout: 10000,

    // Watch mode
    watch: false,

    // Reporter
    reporter: ['verbose', 'html'],
    outputFile: {
      html: './test-results/index.html'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
