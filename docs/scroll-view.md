# scroll-view

## 示例
```json
{
  "wv-scroll-view": "@wjh666/mp-w-vant-ui/scroll-view/index"
}
```

```html
<wv-scroll-view
    data="{{ list }}"
    scrollX="{{ true }}"
    isLocation="{{ true }}"
    oneLocationBottom="{{ true }}"
    scrollIntoView="{{ scrollIntoView }}"
>
  <view
    wx:for="{{ list }}"
    wx:key="index"
    slot="slot-{{index}}"
  >
    {{ item.name }}
  </view>
</wv-scroll-view>
```
