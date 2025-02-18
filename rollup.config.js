import { defineConfig } from 'rollup';
import path from 'path';

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import packageJson from './package.json' with { type: 'json' };
import alias from '@rollup/plugin-alias';
import svgr from '@svgr/rollup';
import { dts } from 'rollup-plugin-dts';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        plugins: [terser()],
      },
      {
        file: packageJson.module,
        format: 'esm',
        plugins: [terser()],
      },
    ],

    plugins: [
      del({ targets: 'dist', hook: 'buildStart' }),

      svgr({ icon: true }),

      alias({
        entries: [{ find: '@', replacement: path.resolve('src') }],
      }),

      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.woff'],
        preserveSymlinks: true,
      }),

      typescript({
        exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
        tsconfig: './tsconfig.json',
      }),

      postcss({
        include: 'src/assets/fonts.css',
        extract: 'fonts.css',
        minimize: true,
        plugins: [tailwind, autoprefixer],
      }),

      postcss({
        include: 'src/assets/style.css',
        extract: 'style.css',
        minimize: true,
        plugins: [tailwind, autoprefixer],
      }),

      postcss({
        include: 'src/assets/tailwind.css',
        extract: 'tailwind.css',
        minimize: true,
        plugins: [tailwind, autoprefixer],
      }),

      copy({
        targets: [{ src: 'public/fonts', dest: 'dist' }],
      }),
    ],

    onwarn: (warning, warn) => {
      if (warning.message.includes('"use client"')) return;
      else warn(warning);
    },

    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(css|scss)$/, 'class-variance-authority/types'],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: path.resolve('dist/types'),
          paths: {
            '@/*': ['src/*'],
          },
        },
      }),
      del({ targets: 'dist/types', hook: 'buildEnd' }),
    ],
  },
]);
