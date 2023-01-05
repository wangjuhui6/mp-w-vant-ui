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
    },
    // 校验
    rules: {
      type: Object,
      value: {}
    }
  },
  data: {
    rulesData: {}
  },

  lifetimes: {
    ready() {}
  },

  methods: {
    // 废弃
    updateRules() {
      const {rules, rulesData} = this.data
      Object.keys(rules).forEach(val => {
        if (rules[val].length > 0) {
          rulesData[val] = ''
        }
      })
      this.setData({
        rulesData
      })
    },
    // 单条校验
    onCheck(name) {
      const {data, rules, rulesData} = this.data
      const item = data[name]
      const rule = rules[name]
      if (rule && rule.length) {
        // eslint-disable-next-line guard-for-in
        for (const i in rule) {
          let status = true
          const {
            required, message, pattern, min
          } = rule[i]
          // required 空
          if (required && !String(item)) {
            status = false
          }
          // 正则
          if (pattern && !new RegExp(pattern).test(item)) {
            status = false
          }
          // min number直接比较大小
          if (String(min) && typeof item === 'number' && item < Number(min)) {
            status = false
          }
          // min string array 比较长度
          if (String(min) && typeof item !== 'number' && item.length < Number(min)) {
            status = false
          }
          rulesData[name] = message
          // status = false 证明不通过，后续不再判断直接return，并直接给提示赋值
          if (!status) {
            this.setData({
              rulesData
            })
            return false
          }
        }
      }
      // 全部通过，清除校验
      rulesData[name] = ''
      this.setData({
        rulesData
      })
      return true
    },
    // 更改值
    onChange(e) {
      const {detail, currentTarget: {dataset: {name}}} = e
      const {data} = this.data
      data[name] = detail
      this.setData({
        data
      }, () => {
        // 触发校验
        this.onCheck(name)
      })
    },
    // 获取数据
    getData() {
      return this.data.data
    },
    // 校验，不同过返回false，通过返回数据
    onSubmit() {
      const {data} = this.data
      let status = true
      Object.keys(data).forEach(val => {
        const itemStatus = this.onCheck(val)
        if (!itemStatus) status = false
      })
      return status ? data : false
    },
    // 保存
    save() {
      return this.data.data
    }
  }
})
