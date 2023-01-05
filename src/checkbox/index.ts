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
    value: {
      type: Array,
      value: [],
      observer: 'observerFun'
    },
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
      const {value, data} = this.data
      const dataUl = data.filter(({name}) => value.includes(name)).map(val => val.name)
      this.setData({
        dataUl
      })
    }
  }
})
