
class InterceptorManager {
  constructor() {
    this.handlers = null
  }

  use(fulfilled, rejected) {
    this.handlers = {
      fulfilled,
      rejected
    }
  }

  clear() {
    this.handlers = {}
  }
}

class Request {
  constructor() {
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    }

    this.createConfig = {
      baseUrl: '',
      header: {
        'content-type': 'application/json'
      },
      timeout: 60000
    }
  }

  request(url = '', method = 'GET', data = {}, config = {}) {
    // 请求参数
    let requestData = {
      url: this.createConfig.baseUrl + url,
      ...this.createConfig,
      data,
      method,
      ...config
    }
    // 请求前拦截
    if (this.interceptors.request.handlers) {
      requestData = this.interceptors.request.handlers.fulfilled(requestData)
    }
    return new Promise((resolve, reject) => {
      wx.request({
        ...requestData,
        success: async (res) => {
          if (res.statusCode >= 400 && res.statusCode < 500) {
            if (this.interceptors.request.handlers) {
              this.interceptors.request.handlers.rejecteds(res)
            }
            return
          }
          let newRes = res
          if (this.interceptors.response.handlers) {
            newRes = await this.interceptors.response.handlers.fulfilled(newRes)
          }
          resolve(newRes)
        },
        fail: async (res) => {
          let newRes = res
          if (this.interceptors.response.handlers) {
            newRes = await this.interceptors.response.handlers.rejected(newRes)
          }
          reject(newRes)
        }
      })
    })
  }

  // 请求基础配置
  create(config) {
    this.createConfig = {
      ...this.createConfig,
      ...config
    }
  }
}

export default Request
