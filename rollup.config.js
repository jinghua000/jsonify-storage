import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  typescript({
    useTsconfigDeclarationDir: true
  }),
  terser({
    include: [/^.+\.min\.js$/], 
  })
]

export default {
  input: 'src/index.ts',
  plugins,
  output: [
    {
      file: 'dist/jsonify-storage.esm.js',
      format: 'esm'
    }, 
    {
      file: 'dist/jsonify-storage.esm.min.js',
      format: 'esm'
    }, 
    {
      file: 'dist/jsonify-storage.cjs.js',
      format: 'cjs'
    }, 
    {
      file: 'dist/jsonify-storage.cjs.min.js',
      format: 'cjs'
    }, 
    {
      name: 'jsonifyStorage',
      file: 'dist/jsonify-storage.umd.js',
      format: 'umd'
    }, 
    {
      name: 'jsonifyStorage',
      file: 'dist/jsonify-storage.umd.min.js',
      format: 'umd'
    }
  ]
}
