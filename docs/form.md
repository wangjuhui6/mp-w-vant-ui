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
| data  | 数据源 | object | {} |
| schema  | 配置 | array | [] |
| readonly  | 只读 | boolean | false |
| disabled  | 禁用 | boolean | false |
| labelWidth  | label宽度 | string | 200rpx |
| rules  | 校验规则 | object | {} |

### schema-item
|  参数   | 说明  |  类型 | 默认值 |
|  ----  | ----  |  ----  | ----  |
| type  | 类型，可选值：input, radio, checkbox, datetime | string | - |
| label | label | string | - |
| name | 对应数据源中的索引 | string | - |
| placeholder | placeholder | string | - |
| data | radio, checkbox的选项 [{label: '', name: ''}] | array | - |
| props | datetime vant组件默认的值 | object | {} |

### rules-item
|  参数   | 说明  |  类型 | 默认值 |
|  ----  | ----  |  ----  | ----  |
|  required | 是否不能为空 |  boolean | - |
|  message | 提示文案 |  string | - |
|  pattern | 正则 | string | - |
|  min | 最小值 数据为number直接比较，string，array比较长度 | number | - |


### event
|  参数   | 说明  |  入参  | 出参  |
|  ----  | ----  |  ----  | ----  |
| onCheck | 单条校验 | 要校验的值 | 校验结果 |
| getData | 获取数据 | - | data值 |
| onSubmit | 提交，校验并返回数据 | - | 校验失败返回false，成功返回data |
