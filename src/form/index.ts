Component({
  properties: {
    // model: 对象暂时无效，先抛弃实时更新，
    // 改用提供save方法获取用户输入的值
    // 数据源
    data: {
      type: Object,
      value: {}
    },
    schema: {
      type: Array,
      value: []
    },
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
    labelWidth: {
      type: String,
      value: '200rpx'
    }
  },
  data: {
  },

  lifetimes: {
    ready() {}
  },

  methods: {
    onChange(e) {
      const {detail, currentTarget: {dataset: {name}}} = e
      const {data} = this.data
      data[name] = detail
      this.setData({
        data
      })
    },
    // 保存
    save() {
      return this.data.data
    }
  }
})
