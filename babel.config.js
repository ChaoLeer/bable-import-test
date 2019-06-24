module.exports = {
  presets: [
    '@vue/app',
    // ['env', {
    //   'modules': false
    // }],
    // ["es2015", { "modules": false }]
  ],
  plugins: [
    ["component", {
      libraryName: 'mint-ui',
      style: true
    }],
    ['import', {
      libraryName: 'iview',
      libraryDirectory: 'src/components'
    }]
  ]
}