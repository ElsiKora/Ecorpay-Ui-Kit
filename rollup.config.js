import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import packageJson from './package.json' with { type: 'json' };
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
      //   del({ targets: 'dist', hook: 'buildStart' }),
      del({ targets: 'dist' }),

      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.woff'],
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

      copy({
        targets: [{ src: 'public/fonts', dest: 'dist' }],
      }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [
      //   dts({
      //     tsconfig: './tsconfig.json',
      //   }),
      dts(),
      del({ targets: 'dist/types', hook: 'buildEnd' }),
    ],
  },
]);
