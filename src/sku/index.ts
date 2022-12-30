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
    },
    pitch: {
      type: Array,
      value: [],
      observer: 'handleOption'
    }
  },
  data: {
    optionData: [],
    optionProbablyData: []
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
      // 有库存的组合
      const specDatas = []
      for (const i in specData) {
        if (specData[i]) {
          specDatas.push(i)
        }
      }
      // 添加一个''选项
      const specs = []
      spec.forEach(val => {
        specs.push(val.spec.map(val => val.title).concat(['']))
      })
      // 列出所有组合
      const optionProbablyData = specs.reduce((a, b) => a.flatMap(x => b.map(val => [...x, val])), [[]]).map(val => val.join(',')).filter(val => {
        const c = val.split(',').filter(val => val)
        return specDatas.reduce((a, b) => {
          const bData = b.split(',')
          return a || bData.concat(c.filter(val => !bData.includes(val))).length === bData.length
        }, false)
      })
      this.setData({
        optionData,
        optionProbablyData
      }, () => this.handleOption())
    },
    // 处理选项
    handleOption() {
      const {
        spec, optionData, optionProbablyData, pitch
      } = this.data
      spec.forEach((val, index) => {
        val.spec.forEach(value => {
          const {title} = value
          value.disabled = false
          if (optionData[title].length === 0) {
            value.disabled = true
          } else {
            const newPitch = JSON.parse(JSON.stringify(pitch))
            newPitch[index] = title
            if (!optionProbablyData.includes(newPitch.join(','))) {
              value.disabled = true
            }
          }
        })
      })
      this.setData({
        spec
      })
      this.triggerEvent('specChange', spec)
    },
    onChange(e) {
      const {detail, currentTarget: {dataset: {index}}} = e
      const {pitch} = this.data
      pitch[index] = detail
      this.setData({
        pitch
      }, () => this.handleOption())
      this.triggerEvent('change', pitch)
    }
  }
})
