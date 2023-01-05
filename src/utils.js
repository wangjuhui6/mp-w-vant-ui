module.exports = {
  getFlag() {
    return true
  },
  zeroize(e) {
    return e > 9 ? e : '0' + e
  }
}
