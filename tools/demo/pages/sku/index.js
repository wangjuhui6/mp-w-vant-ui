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
    ]
  }
})
