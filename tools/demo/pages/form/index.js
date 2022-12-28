Page({
  data: {
    data: {
      name: '',
      dateOfBirth: '1996'
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
      },
      {
        type: 'date', label: '出生日期', name: 'dateOfBirth'
      }
    ]
  },

  async save() {
    const data = await this.selectComponent('#form').save()
    console.log(data, '获取参数')
  }
})
