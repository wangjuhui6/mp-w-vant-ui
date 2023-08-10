# WVPage

## 示例
```js
import {
  WVPage
} from '@wjh666/mp-w-vant-ui/common/wxPage.js'

WVPage({
  data: {
    // 每一行div高度（预计，最终会动态获取）
    SCROLLDATAitemHeight: 30,
    // 总长度（总共有几个div）
    SCROLLDATALength: 0
  },
  onLoad() {}
})
```

```html
// 根据页面实际位置寻找
<wxs src="../../components/wxs/wv.wxs" module="wv" />

<view class="scroll">
  <view
    wx:for="{{list}}"
    wx:key="index"
    wx-if="{{ wv.scrollIf(SCROLLDATA, index) }}"
    style="{{ wv.scrollTop(SCROLLDATAStyle, index) }}"
    class="scroll_item_text scroll_item {{ 'scroll_item' + index }}"
  >
    {{ item.text }}
  </view>
  <!-- 占位元素 -->
  <view
    class="scroll_perch"
    style="height: {{ SCROLLDATA.totalHeight }}px;"
  >
  </view>
</view>
```

```css
.scroll{
    position: relative;
}
.scroll_perch{
    position: absolute;
    top: 0;
    left: -2px;
    width: 1px;
}
.scroll_item{
    position: absolute;
    left: 0;
    width: 100%;
}
```

### 实现思路
通过对小程序页面进行劫持，劫持每次setData更新后与滚动的方法

动态计算要展示哪些dom元素，其他进行隐藏
