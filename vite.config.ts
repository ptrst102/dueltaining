import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'エンタメデュエル',
        short_name: 'ｴﾝﾀﾒﾃﾞｭｴﾙ',
        description: 'エンタメデュエル用の電卓です。',
        icons: [
          {
            src: 'app_icon/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'app_icon/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'app_icon/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        start_url: 'index.html',
        lang: 'ja',
      },
    }),
  ],
});
