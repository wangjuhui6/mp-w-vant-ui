Page({
  data: {
    data: {
      name: '2323',
      gender: 1,
      hobby: ['学英语', '玩儿游戏'],
      dateOfBirth: '1996-12-14'
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
        type: 'datetime',
        label: '出生日期',
        name: 'dateOfBirth',
        placeholder: '请选择出生日期',
        props: {
          type: 'date'
        }
      }
    ],
    rules: {
      name: [
        {required: true, message: '请输入姓名'},
        {pattern: '^[\\u4e00-\\u9fa5]$', message: '只能输入中文'}
      ],
      gender: [
        {required: true, message: '请选择性别'},
      ],
      hobby: [
        {min: 2, message: '爱好至少选两项'},
      ],
      dateOfBirth: [
        {required: true, message: '出生日期不能为空'},
      ]
    }
  },

  // 获取数据
  async getData() {
    const data = await this.selectComponent('#form').getData()
    console.log(data, '获取数据')
  },

  // 保存
  async onSubmit() {
    const data = await this.selectComponent('#form').onSubmit()
    console.log(data, '保存')
  }
})
