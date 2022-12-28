# form

## 示例
```json
{
    "wv-form": "@wjh666/mp-w-vant-ui/form/index"
}
```
```html
<wv-form
    data="{{ data }}"
    schema="{{ schema }}"
>
</wv-form>
```
```js
Page({
  data: {
    data: {
      name: ''
    },
    schema: [
      {
        type: 'input', label: '姓名', name: 'name', placeholder: '请输入用户名'
      },
      {
        type: 'radio', label: '性别', name: 'gender', data: [{label: '男', name: 1}, {label: '女', name: 0}]
      },
      {
        type: 'checkbox', label: '爱好', name: 'hobby', data: [{label: '敲代码', name: '敲代码'}, {label: '学英语', name: '学英语'}, {label: '玩儿游戏', name: '玩儿游戏'}]
      }
    ]
  },

  async save() {
    const data = await this.selectComponent('#form').save()
    console.log(data, '获取参数')
  }
})
```

## api

### props
|  参数   | 说明  |  类型 | 默认值 |
|  ----  | ----  |  ----  | ----  |
| data  | 数据源 | Object | {} |
| schema  | 配置 | Array | [] |

### 现有类型
input
radio
checkbox

### event
|  参数   | 说明  |
|  ----  | ----  |
| save  | 保存 |
