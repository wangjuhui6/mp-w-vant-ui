import {WVComponent} from '../common/component.ts'
import {useParent} from '../common/relation.ts'

WVComponent({
  properties: {
    value: null,
    disabled: {
      type: Boolean
    },
    parentDisabled: {
      type: Boolean,
      value: false
    },
    name: null,
    // 是否可以取消
    isCancel: {
      type: Boolean,
      value: false
    }
  },

  relation: useParent('radio-group'),

  data: {
  },

  lifetimes: {
    ready() {
    }
  },

  methods: {
    onChange() {
      const {
        parentDisabled, disabled, name, value, isCancel
      } = this.data
      if (parentDisabled || disabled) {
        return
      }
      const instance = this.parent || this
      instance.triggerEvent('input', (name === value && isCancel) ? '' : name)
      instance.triggerEvent('change', (name === value && isCancel) ? '' : name)
    },
    updateFromParent() {
      if (!this.parent) {
        return
      }
      const {value, disabled: parentDisabled, isCancel} = this.parent.data
      this.setData({
        value,
        parentDisabled,
        isCancel
      })
    }
  }
})
