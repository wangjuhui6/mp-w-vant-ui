Component({
  properties: {
    // 只读
    readonly: {
      type: Boolean,
      value: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 值
    value: null,
    // 选项
    data: {
      type: Array,
      value: [],
      observer: 'observerFun'
    }
  },
  data: {
    dataUl: {}
  },

  lifetimes: {
    ready() {}
  },

  methods: {
    change(e) {
      const {detail} = e
      this.triggerEvent('change', detail)
    },
    observerFun() {
      const dataUl = {}
      this.data.data.forEach(({label, name}) => {
        dataUl[name] = label
      })
      this.setData({
        dataUl
      })
    }
  }
})
