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
    // 占位符
    placeholder: null
  },
  data: {
  },

  lifetimes: {
    ready() {}
  },

  methods: {
    change(e) {
      const {value} = e.detail
      this.triggerEvent('change', value)
    }
  }
})
