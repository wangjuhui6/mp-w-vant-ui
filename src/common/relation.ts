export function useParent(name: string, onEffect?: () => void) {
  const path = `../${name}/index`
  return {
    relations: {
      [path]: {
        type: 'parent',
        linked() {
          // 每次有 被插入时执行，target是该节点实例对象，触发在该节点 attached 生命周期之后
          // eslint-disable-next-line no-unused-expressions
          onEffect && onEffect()
        },
        linkChanged() {
          // 每次有 被移动后执行，target是该节点实例对象，触发在该节点 moved 生命周期之后
          // eslint-disable-next-line no-unused-expressions
          onEffect && onEffect()
        },
        unlinked() {
          // 每次有 被移除时执行，target是该节点实例对象，触发在该节点 detached 生命周期之后
          // eslint-disable-next-line no-unused-expressions
          onEffect && onEffect()
        }
      }
    },
    behaviors: Behavior({
      created() {
        Object.defineProperty(this, 'parent', {
          get: () => this.getRelationNodes(path)[0]
        })
      }
    })
  }
}

export function useChildren(name: string, onEffect?: () => void) {
  const path = `../${name}/index`
  return {
    relations: {
      [path]: {
        type: 'child',
        linked() {
          // 每次有 被插入时执行，target是该节点实例对象，触发在该节点 attached 生命周期之后
          // eslint-disable-next-line no-unused-expressions
          onEffect && onEffect()
        },
        linkChanged() {
          // 每次有 被移动后执行，target是该节点实例对象，触发在该节点 moved 生命周期之后
          // eslint-disable-next-line no-unused-expressions
          onEffect && onEffect()
        },
        unlinked() {
          // 每次有 被移除时执行，target是该节点实例对象，触发在该节点 detached 生命周期之后
          // eslint-disable-next-line no-unused-expressions
          onEffect && onEffect()
        }
      }
    },
    behaviors: Behavior({
      created() {
        Object.defineProperty(this, 'children', {
          get: () => this.getRelationNodes(path) || []
        })
      }
    })
  }
}
