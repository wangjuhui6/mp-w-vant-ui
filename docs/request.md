# request

## 示例
```js
import Request from '@wjh666/mp-w-vant-ui/request.js'

const axios = new Request()

// 基础配置
axios.create({
  baseUrl: '',
  header: {
    'content-type': 'application/json'
  },
  timeout: 60000
})

// 请求拦截
axios.interceptors.request.use(function (e) {
  // 请求前对数据进行更改 如更改请求头 更改请求参数
  return e
}, function (e) {
  // 请求失败 如404 等请求错误
  return e
})

// 相应拦截
axios.interceptors.response.use(function (e) {
  // 处理接口响应
  // 如某些状态码，退出登录之类的操作
  // 也可以讲请求成功的数据进行简化，如去掉请求响应头之类的操作
  console.log('请求成功')
  // 登录过期等操作，中断其他接口请求
  // axios.abort()
  return e.data
}, function (e) {
  console.log('请求失败')
  return e
})

```
