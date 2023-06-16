import {WVComponent} from '../common/component.ts'

let status = false

WVComponent({
  options: {multipleSlots: true},
  properties: {
    // 是否纵向滚动
    scrollY: {
      type: Boolean,
      value: true
    },
    // 是否横向滚动
    scrollX: {
      type: Boolean,
      value: false
    },
    // 距离底部/右侧多远触发加载更多
    lowerThreshold: {
      type: Number || String,
      value: 50
    },
    // 距离头部/左侧多少触发下拉
    upperThreshold: {
      type: Number || String,
      value: 50
    },
    data: {
      type: Array,
      value: [],
      observer: 'calculation'
    },
    isLocation: {
      type: Boolean,
      value: false
    },
    oneLocationBottom: {
      type: Boolean,
      value: false
    }
  },
  data: {
    scrollIntoView: '',
    status: ''
  },

  lifetimes: {
    ready() {
    }
  },

  methods: {
    calculation() {
      const {
        data, isLocation, status, oneLocationBottom
      } = this.data
      const newStatus = status || (oneLocationBottom ? 'top' : 'bottom')
      if (data.length && isLocation) {
        this.setData({
          scrollIntoView: `scroll${newStatus === 'top' ? data.length - 1 : 0}`
        })
      }
    },
    onTop() {
      if (!status) {
        status = true
        this.setData({
          status: 'top'
        })
        this.triggerEvent('change', 'top')
        setTimeout(() => {
          status = false
        }, 1000)
      }
    },
    onBottom() {
      if (!status) {
        status = true
        this.setData({
          status: 'bottom'
        })
        this.triggerEvent('change', 'bottom')
        setTimeout(() => {
          status = false
        }, 1000)
      }
    }
  }
})
