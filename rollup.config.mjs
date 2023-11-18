import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import image from '@rollup/plugin-image';
import alias from 'rollup-plugin-alias';
import includePaths from 'rollup-plugin-includepaths';

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    includePaths({ paths: ["src"] }),
    alias({
      entries:[
        {
          find:'src',
          replacement: './src'
        },
      ]
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    image(),
    postcss()
  ],
  external: ["react", "react-dom", "styled-components"]
}, {
  input: 'lib/index.d.ts',
  output: [{ file: 'lib/index.d.ts', format: 'es' }],
  plugins: [dts({ tsconfig: './tsconfig.json' })],
  external: [/\.css$/]
}];