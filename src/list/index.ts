import {WVComponent} from '../common/component.ts'

WVComponent({
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
    // 加载文案
    loadingText: {
      type: String,
      value: '加载中'
    },
    // 加载结束文案
    finishedText: {
      type: String,
      value: '没有更多了'
    },
    // 距离头部多少触发下拉
    upperThreshold: {
      type: Number,
      value: 0
    },
    // 点击/双击头部回到头部
    // enableBackToTop: {
    //   type: Boolean,
    //   value: false
    // },
    // 加载中
    loading: {
      type: Boolean,
      value: false
    },
    // 没有更多
    finished: {
      type: Boolean,
      value: false
    },
    // 下拉刷新
    refreshing: {
      type: Boolean,
      value: false
    },
    // 下拉文案
    refreshingText: {
      type: String,
      value: '下拉刷新中'
    }
  },
  data: {
    name: 1
  },

  lifetimes: {
    ready() {
      this.onLoad()
    }
  },

  methods: {
    onLoad() {
      const {finished} = this.data
      if (!finished) {
        this.triggerEvent('load')
      }
    },
    onRefresh() {
      const that = this
      that.setData({
        refreshing: true
      })
      this.triggerEvent('refresh', () => {
        that.setData({
          refreshing: false
        })
      })
    }
  }
})
