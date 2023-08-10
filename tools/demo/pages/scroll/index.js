import {WVPage} from '../../components/common/wxPage.js'

WVPage({
  data: {
    list: [],
    SCROLLDATAitemHeight: 30,
    SCROLLDATALength: 0
  },

  onLoad() {
    const list = []
    for (let i = 0; i <= 100; i++) {
      list.push({
        text: i + 1
      })
    }
    this.setData({
      list,
      SCROLLDATALength: list.length + 1
    })
  },

  onPageScroll() {
  },
})
