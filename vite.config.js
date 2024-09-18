
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si estás usando React, de lo contrario ajusta
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Pokemon Evolution App',
        short_name: 'PokeApi',
        description: 'App para mostrar la evolución de Pokémon',
        theme_color: '#B6D936',
        icons: [
          {
            src: 'descarga.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '824565.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
