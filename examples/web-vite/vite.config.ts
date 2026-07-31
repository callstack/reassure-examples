import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    workspace: [
      {
        test: {
          name: 'test',
          include: ['**/__tests__/*.{ts,js}', '**/*.test.{ts,tsx,js,jsx}'],
          environment: 'jsdom',
        },
      },
      {
        test: {
          name: 'perf',
          include: ['**/__perf__/*.{ts,js}', '**/*.perf.{ts,tsx,js,jsx}'],
          environment: 'jsdom',
        },
      },
    ],
    environment: 'jsdom', // Use jsdom for DOM-related tests
    setupFiles: ['./test-setup.ts'],
  },
});
