import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Tech-World/',  
  server: {
    proxy: {
      '/api': {
        target: 'https://projetotestespringboot.onrender.com/users', // Your Spring Boot backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
      },
    },
  },
});