import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },      mozjpeg: {
        quality: 65,
        progressive: true,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },      webp: {
        quality: 75,
        lossless: false,
        method: 6,
      },
    }),
  ],
  build: {
    cssCodeSplit: true,    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['react-helmet-async', 'react-lazy-load-image-component'],
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.png')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
})
