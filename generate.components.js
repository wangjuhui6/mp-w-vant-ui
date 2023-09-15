module.exports = {
  templateBase: './template/components',
  outUrl: './src',
  filesName: (e) => e.replace(/\B([A-Z])/g, '-$1').toLowerCase(),
  fileName: () => 'index',
  variable: {
    componentsName: (e) => 'wv-' + e.replace(/\B([A-Z])/g, '-$1').toLowerCase(),
    name: (e) => e.replace(/\B([A-Z])/g, '-$1').toLowerCase(),
  }
}
