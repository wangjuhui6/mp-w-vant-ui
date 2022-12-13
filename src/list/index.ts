Component({
  properties: {
    // 是否滚动
    scrollY: {
      type: Boolean,
      value: true
    },
    // 距离底部多远触发加载更多
    lowerThreshold: {
      type: Number,
      value: 50
    },
    // 距离头部多少触发拉下
    upperThreshold: {
      type: Number,
      value: 50
    },
    // 点击/双击头部回到头部
    enableBackToTop: {
      type: Boolean,
      value: false
    },
    // 加载中
    loading: {
      type: Boolean,
      value: false
    },
    // 没有更多
    finished: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },

  methods: {
    onLoad() {
      console.log('加载更多')
    },
    onRefresh() {
      console.log('下拉刷新')
    }
  }
})
