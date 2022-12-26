# list

## 示例
```json
{
    "wv-list": "@wjh666/mp-w-vant-ui/list/index"
}
```
```html
<view style="height: 50vh;">
    <wv-list
            model:loading="{{ loading }}"
            bind:load="onLoadData"
            bind:refresh="onRefresh"
            finished="{{ finished }}"
    >
        <view
                wx:for="{{ list }}"
                wx:for-item="item"
                wx:for-index="index"
                wx:key="index"
                style="height: 50px;"
        >
            {{ item }}
        </view>
    </wv-list>
</view>
```
```js
Page({
  data: {
    loading: false,
    finished: false,
    list: []
  },

  onRefresh(e) {
    setTimeout(() => {
      this.setData({
        list: [],
        finished: false
      })
      e.detail()
      this.onLoadData()
    }, 1000)
  },

  onLoadData() {
    const that = this
    // 加载
    that.setData({
      loading: true
    })
    // 模拟加载
    setTimeout(() => {
      const {list} = that.data
      const data = list
      for (let i = 0; i < 10; i++) {
        data.push(data.length + 1)
      }
      that.setData({
        list: data,
        loading: false,
        finished: data.length >= 30
      })
      console.log(that.data)
    }, 1000)
  }
})

```

## api

### props
|  参数   | 说明  |  类型 | 默认值 |
|  ----  | ----  |  ----  | ----  |
| scrollY  | 是否纵向滚动 | Boolean | true |
| lowerThreshold  | 距离底部多远触发加载更多 | Number | 50 |
| loadingText  | 加载文案 | String | 加载中 |
| finishedText  | 加载结束文案 | String | 没有更多了 |
| upperThreshold  | 距离头部多少触发下拉 | Number | 0 |
| loading  | 加载中 | Boolean | false |
| finished  | 没有更多 | Boolean | false |
| refreshing  | 下拉刷新 | Boolean | false |
| refreshingText  | 下拉文案 | String | 下拉刷新中 |

### event
|  参数   | 说明  |
|  ----  | ----  |
|  load   | 上拉加载更多  |
|  refresh   | 下拉刷新  |
