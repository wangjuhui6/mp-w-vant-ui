import {WVComponent} from '../common/component.ts'
import {useChildren} from '../common/relation.ts'

WVComponent({

  relation: useChildren('radio'),

  properties: {
    value: {
      type: null,
      observer: 'updateChildren'
    },
    disabled: {
      type: Boolean,
      value: false,
      observer: 'updateChildren'
    },
    // 是否可以取消
    isCancel: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },

  lifetimes: {
    ready() {
    }
  },

  methods: {
    updateChildren() {
      this.children.forEach((child) => child.updateFromParent())
    }
  }
})
