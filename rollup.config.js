import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import { string } from 'rollup-plugin-string';
import dts from 'rollup-plugin-dts';

export default [
  // Build ESM minificado (para CDN y proyectos modernos)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nextjs-toast-notify.es.min.js',
      format: 'esm',
      sourcemap: false
    },
    plugins: [
      resolve({ browser: true, preferBuiltins: false }),
      string({
        include: ['**/*.css'],
        exclude: ['node_modules/**']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        noEmitOnError: false
      }),
      url({
        include: ['**/*.mp3', '**/*.wav', '**/*.ogg'],
        limit: Infinity, // Convertir todos los archivos de audio a base64
        fileName: 'sonidos/[name][extname]'
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'],
          passes: 3,
          unsafe: true,
          unsafe_comps: true,
          unsafe_math: true
        },
        mangle: {
          reserved: ['NextjsToastNotify']
        },
        format: {
          comments: false
        }
      })
    ],
    external: []
  },
  // Build UMD minificado (para CDN legacy)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nextjs-toast-notify.min.js',
      format: 'umd',
      name: 'NextjsToastNotify',
      sourcemap: false
    },
    plugins: [
      resolve({ browser: true, preferBuiltins: false }),
      string({
        include: ['**/*.css'],
        exclude: ['node_modules/**']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        noEmitOnError: false
      }),
      url({
        include: ['**/*.mp3', '**/*.wav', '**/*.ogg'],
        limit: Infinity, // Convertir todos los archivos de audio a base64
        fileName: 'sonidos/[name][extname]'
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'],
          passes: 3,
          unsafe: true,
          unsafe_comps: true,
          unsafe_math: true
        },
        mangle: {
          reserved: ['NextjsToastNotify']
        },
        format: {
          comments: false
        }
      })
    ],
    external: []
  },
  // Build de tipos TypeScript
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [
      dts({
        tsconfig: './tsconfig.json'
      })
    ]
  }
];