Component({
  properties: {
    spec: {
      type: Array,
      value: [],
      observer: 'calculation'
    },
    goods: {
      type: Array,
      observer: 'calculation'
    }
  },
  data: {
    pitch: [],
    optionData: []
  },

  lifetimes: {
    ready() {
    }
  },

  methods: {
    calculation() {
      const {spec, goods} = this.data
      // 处理库存集合
      const goodsData = {}
      // eslint-disable-next-line guard-for-in
      for (const i in goods) {
        const {spec, count} = goods[i]
        goodsData[spec] = count
      }
      // 列出所有可能的数据集合，并处理是否有库存
      const specData = {}
      // eslint-disable-next-line max-len
      spec.reduce((a, b) => a.flatMap(x => b.spec.map(val => [...x, val.title])), [[]]).forEach(val => {
        const name = val.join(',')
        specData[name] = !!goodsData[name]
      })
      // 列出所有选项
      const optionData = {}
      spec.forEach((a) => a.spec.forEach(val => {
        const title = val.title
        if (!optionData[title]) {
          optionData[title] = []
        }
        // eslint-disable-next-line guard-for-in
        for (const i in specData) {
          if (i.split(',').includes(title) && specData[i]) {
            optionData[title].push(i)
          }
        }
      }))
      // eslint-disable-next-line no-unused-vars
      const pitch = spec.map(val => '')
      this.setData({
        pitch,
        optionData,
      }, () => this.handleOption())
    },
    // 处理选项
    handleOption() {
      const {spec, optionData, pitch} = this.data
      spec.forEach(val => {
        val.spec.forEach(value => {
          const {title} = value
          if (optionData[title].length === 0) {
            value.disabled = true
          } else {
            optionData[title].filter(val =>
              // eslint-disable-next-line implicit-arrow-linebreak
              pitch.reduce((a, b) => {
                console.log(a, b, val)
                return false
              }, true))
          }
        })
      })
      this.setData({
        spec
      })
    },
    onChange(e) {
      const {detail, currentTarget: {dataset: {index}}} = e
      const {pitch} = this.data
      pitch[index] = detail
      this.setData({
        pitch
      }, () => this.handleOption())
    }
  }
})
