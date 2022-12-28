Component({
  properties: {
    // model: 对象暂时无效，先抛弃实时更新，
    // 改用提供save方法获取用户输入的值
    data: {
      type: Object,
      value: {}
    },
    schema: {
      type: Array,
      value: []
    },
    readonly: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },

  lifetimes: {
    ready() {}
  },

  methods: {
    change(e) {
      const {detail, currentTarget} = e
      const {value} = detail
      const {dataset: {name}} = currentTarget
      const {data} = this.data
      data[name] = value || detail || ''
      console.log(e, '??')
      this.setData({data})
    },
    onChange(e) {
      console.error(e, '??')
    },
    // 单选
    radioTap(e) {
      const {data, name} = e.currentTarget.dataset
      console.log(data, name)
    },
    // 保存
    save() {
      return this.data.data
    }
  }
})
