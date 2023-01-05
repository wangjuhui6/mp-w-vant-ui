import {zeroize} from '../utils'

const currentYear = new Date().getFullYear()
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
    placeholder: {
      type: String,
      value: '请选择'
    },
    props: {
      type: Object,
      value: {
        title: '选择时间',
        type: 'datetime',
        minDate: new Date(currentYear - 10, 0, 1).getTime(),
        maxDate: new Date(currentYear + 10, 11, 31).getTime(),
        minHour: 0,
        maxHour: 23,
        minMinute: 0,
        maxMinute: 59
      },
      observer(newData, oldData) {
        this.propsFun(newData, oldData)
      }
    }
  },
  data: {
    show: false,
    propsData: {},
    pickerValue: ''
  },

  lifetimes: {
    ready() {}
  },

  methods: {
    change(e) {
      const {detail} = e
      const {type} = this.data.props
      const date = new Date(detail)
      const Y = date.getFullYear()
      const M = zeroize(date.getMonth() + 1)
      const D = zeroize(date.getDate())
      const h = zeroize(date.getHours())
      const m = zeroize(date.getMinutes())
      const fun = {
        datetime() {
          return `${Y}-${M}-${D} ${h}:${m}`
        },
        date() {
          return `${Y}-${M}-${D}`
        },
        time() {
          return `${h}:${m}`
        },
        'year-month': function () {
          return `${Y}-${M}`
        }
      }
      this.triggerEvent('change', fun[type]())
      this.onClose()
    },
    propsFun(newData, oldData) {
      let propsData = {}
      if (oldData) {
        propsData = {...propsData, ...oldData}
      }
      if (newData) {
        propsData = {...propsData, ...newData}
      }
      this.setData({
        propsData
      })
    },
    onClick() {
      const {
        value,
        readonly,
        disabled
      } = this.data
      if (readonly || disabled) { return }
      this.setData({
        show: true,
        pickerValue: new Date(value).getTime()
      })
    },
    onClose() {
      this.setData({
        show: false
      })
    }
  }
})
