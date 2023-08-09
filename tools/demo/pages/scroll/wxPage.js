
let that
let realIndex

function WVPage(options) {
  return (function (page) {
    // 获取屏幕高度
    const windowHeight = wx.getSystemInfoSync().windowHeight

    function getItem(type = 'start', scrollTop) {
      // totalHeight
      const {SCROLLDATAStyle} = that.data
      for (let i = 0; i < SCROLLDATAStyle.length; i++) {
        const {top, height} = SCROLLDATAStyle[i]
        if (type === 'start' ? (top + height) >= scrollTop : top - scrollTop >= windowHeight) {
          return i
          // return type === 'start' ? i - 10 : i + 10
        }
      }
    }

    // 计算真实高度
    function handleReal() {
      // 更改一次样式
      const newSCROLLDATAStyle = [...that.data.SCROLLDATAStyle]
      // 获取高度
      let newTotalHeight = that.data.SCROLLDATA.totalHeight
      const {start, end} = that.data.SCROLLDATA
      const query = wx.createSelectorQuery()
      let x = 0
      const newStart = realIndex && realIndex >= start ? realIndex : start
      for (let i = newStart; i <= end; i++) {
        query.select(`.scroll_item${i}`).boundingClientRect((res) => {
          if (!res) {
            ++x
            return
          }
          // 实际高度
          const actualHeight = res.height || newSCROLLDATAStyle[i].height
          // 记录高度
          const {height} = newSCROLLDATAStyle[i]
          // 计算差值
          const differenceHeight = actualHeight - height
          if (differenceHeight !== 0) {
            // 更改记录高度
            newSCROLLDATAStyle[i].height = actualHeight
            newTotalHeight += differenceHeight
            // 更改之后的值
            for (let j = i + 1; j < newSCROLLDATAStyle.length; j++) {
              newSCROLLDATAStyle[j].top = newSCROLLDATAStyle[j].top + differenceHeight
            }
          }
          if (realIndex < i) {
            realIndex = i
          }
          ++x
          if (x === end - start) {
            that.setData({
              SCROLLDATAStyle: newSCROLLDATAStyle,
              SCROLLDATA: {
                ...that.data.SCROLLDATA,
                totalHeight: newTotalHeight
              }
            }, () => {}, true)
          }
        }).exec()
      }
    }

    // 自定义方法
    function handleScroll() {
      const {SCROLLDATALength, SCROLLDATAitemHeight, SCROLLDATA} = that.data
      if (!SCROLLDATA.totalHeight) {
        // 第一次计算长度
        SCROLLDATA.totalHeight = SCROLLDATAitemHeight * SCROLLDATALength
        SCROLLDATA.start = 0
        SCROLLDATA.end = Math.ceil(windowHeight / SCROLLDATAitemHeight)
        // 第一次添加数据
        const styleData = []
        for (let i = 0; i < SCROLLDATALength; i++) {
          styleData.push({
            top: SCROLLDATAitemHeight * i,
            height: SCROLLDATAitemHeight
          })
        }
        that.setData({
          SCROLLDATA,
          SCROLLDATAStyle: styleData
        }, () => {}, true)
      }
      // 页面刷新或者滚动了
      const query = wx.createSelectorQuery()
      query.select('.scroll').boundingClientRect((res) => {
        // 计算一次位置
        const top = Math.abs(res.top)
        const start = getItem('start', top)
        const end = getItem('end', top)
        that.setData({
          SCROLLDATA: {
            ...that.data.SCROLLDATA,
            start: start >= 0 ? start : 0,
            end: end <= that.data.SCROLLDATALength ? end : that.data.SCROLLDATALength,
          }
        }, () => {
          handleReal()
        }, true)
      }).exec()
    }

    options.data = {
      ...options.data,
      SCROLLDATA: {
        start: 0,
        end: 0,
        totalHeight: 0
      },
      SCROLLDATAStyle: []
    }

    // 劫持滚动方法
    const _onPageScroll = options.onPageScroll
    options.onPageScroll = function (e) {
      handleScroll()
      _onPageScroll.apply(this, [e])
    }

    // 劫持onLoad方法
    const _onLoad = options.onLoad
    options.onLoad = function (opt) {
      that = this
      // 劫持setData方法
      const _setData = this.setData
      this.setData = function (a, b, status = false) {
        _setData.apply(this, [{
          ...a
        }, () => {
          if (!status) {
            handleScroll()
          }
          // eslint-disable-next-line no-unused-expressions
          b && b()
        }])
      }
      _onLoad.apply(this, [opt])
    }
    return page({
      ...options
    })
  }(Page))
}

export {WVPage}
