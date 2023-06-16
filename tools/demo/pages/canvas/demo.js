const wxmls = (info) => `
  <view class="container">
    <text class="text">32332</text>
  </view>
`

const style = {
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  text: {
    width: 80,
    height: 60,
    textAlign: 'center',
    verticalAlign: 'middle',
  }
}

module.exports = {
  wxmls,
  style
}
