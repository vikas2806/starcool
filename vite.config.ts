import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    includedRoutes() {
      return [
        '/',
        '/ac-repair-mumbai',
        '/refrigerator-repair-mumbai',
        '/washing-machine-repair-mumbai',
        '/microwave-repair-mumbai',
        '/about',
        // '/reviews', // removed Reviews page
        '/contact',
        '/404',
      ];
    },
    onFinished() {
      const nested404 = path.resolve(__dirname, 'dist/404/index.html');
      const root404 = path.resolve(__dirname, 'dist/404.html');
      if (fs.existsSync(nested404)) {
        fs.copyFileSync(nested404, root404);
      }
    },
  },
  build: {
    sourcemap: false,
  },
});
