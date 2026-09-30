// scripts/build.mjs
import * as esbuild from 'esbuild';
import { rmSync, mkdirSync } from 'fs';

const outDir = 'dist';

// 1. 清理并创建输出目录
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

// 2. 使用 esbuild 打包 TypeScript 代码
await esbuild.build({
  entryPoints: ['src/index.ts'], // 你的 TypeScript 入口文件路径
  bundle: true,
  format: 'esm',
  platform: 'browser',
  outfile: `${outDir}/_worker.js`, // 输出到 Pages 构建目录
  sourcemap: true,
  minify: process.env.NODE_ENV === 'production',
});

console.log('✅ _worker.js 构建完成');
