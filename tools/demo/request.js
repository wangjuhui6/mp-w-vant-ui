import Request from './components/request.js'

const axios = new Request()

// 基础配置
axios.create({
  baseUrl: 'http://www.streamer.beauty'
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
  // axios.abort()
  return e.data
}, function (e) {
  console.log('请求失败')
  return e
})

// 可以单独文件处理，也可以追加到后面
// 处理具体的接口

// axios.request 包含4个参数
// axios.request('url', 请求方式(GET/POST...), 参数， 请求头里的其他参数)

// 一个错误的接口
export async function getNo(data) {
  return axios.request('/abc', 'GET', data)
}

// 一个正确的接口
export async function getYes(data) {
  return axios.request('/user/rules/detail', 'GET', data)
}

export default axios
