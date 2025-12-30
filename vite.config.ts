
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // 這行非常重要：它將 Vercel 的環境變數注入到前端程式碼中
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 3000
  }
});
