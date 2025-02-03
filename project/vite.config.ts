import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Plugins do Vite (ex: React, Vue, etc.)
  resolve: {
    alias: {
    },
  },
  build: {
    outDir: 'dist', // Pasta de saída do build
    assetsDir: 'assets', // Pasta de assets (CSS, imagens, etc.)
    rollupOptions: {
      output: {
        manualChunks: {
          // Divisão de chunks para otimização
          vendor: ['react', 'react-dom'],
        },
      },
    },
    emptyOutDir: true, // Limpa a pasta de build antes de gerar novos arquivos
  },
  envPrefix: 'VITE_', // Prefixo para variáveis de ambiente
  define: {
    'process.env': {}, // Compatibilidade com variáveis globais (se necessário)
  },
});