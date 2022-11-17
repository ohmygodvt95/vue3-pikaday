import vue from 'rollup-plugin-vue'

export default {
  input: 'src/VPikaday/components/VPikaday.vue',
  output: [
    {
      format: 'esm',
      file: 'dist/VPikaday.esm.js'
    },
    {
      format: 'cjs',
      file: 'dist/VPikaday.cjs.js'
    },
  ],
  plugins: [
    // ...
    vue(/* options */)
  ]
}
