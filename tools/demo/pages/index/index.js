import {getNo, getYes} from '../../request'

Page({
  data: {
    list: {
      list: '/pages/list/index',
      form: '/pages/form/index',
      sku: '/pages/sku/index',
      canvas: '/pages/canvas/index',
      'scroll-view': '/pages/scroll-view/index'
    }
  },

  async onLoad() {
    const data = await getYes()
    console.log(data, '成功')
    const data1 = await getNo()
    console.log(data1, '失败')
  }
})
