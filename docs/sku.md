# sku

## 示例
```json
{
    "wv-sku": "@wjh666/mp-w-vant-ui/sku/index"
}
```
```html
<wv-sku
        spec="{{ spec }}"
        goods="{{ goods }}"
        pitch="{{ pitch }}"
>
</wv-sku>
```
```js
Page({
  data: {
    spec: [
      {
        title: '发货日期',
        spec: [
          {title: '3-5日发货'}
        ]
      },
      {
        title: '规格',
        spec: [
          {title: '500ml'},
          {title: '1000ml'},
          {title: '1500ml'}
        ]
      },
      {
        title: '口味',
        spec: [
          {title: '原味'},
          {title: '草莓味'}
        ]
      }
    ],
    goods: [
      {spec: '3-5日发货,500ml,原味', count: 0},
      {spec: '3-5日发货,1000ml,原味', count: 10},
      {spec: '3-5日发货,1500ml,原味', count: 20},
      {spec: '3-5日发货,500ml,草莓味', count: 0},
      {spec: '3-5日发货,1000ml,草莓味', count: 0},
      {spec: '3-5日发货,1500ml,草莓味', count: 20},
    ],
    pitch: ['', '', '']
  }
})


```

## api

### props
|  参数   | 说明  |  类型 | 默认值 |
|  ----  | ----  |  ----  | ----  |
| spec  | sku | Array | [] |
| goods  | 商品库存 | Array | - |
| pitch  | 选中的数据 | Array | [] |

### event
|  参数   | 说明  |
|  ----  | ----  |
|  change  | 使用默认ui时，每次点完sku的事件，返回值 pitch |
|  specChange  | sku列表的状态  |
