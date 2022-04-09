import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd()); // 获取.env文件里定义的环境变量
  console.log('config===', mode, env); //此处会在终端命令行打印配置内容
  return defineConfig({
    base: './',
    plugins: [
      vue(),
      viteCompression(), // 打包压缩
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],
    server: {
      port: 3001,
      open: true,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      minify: 'terser', //esbuild
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      brotliSize: false, // 关闭打包计算,打包加速
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 500,
    },
  });
};
