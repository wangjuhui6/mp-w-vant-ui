// pages/gif/index.js
import lottie from 'lottie-miniprogram'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: false,
    gifStatus: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleLike() {
    const that = this
    const {status} = this.data
    this.setData({
      status: !status,
      gifStatus: !status
    }, () => {
      if (!status) {
        const query = wx.createSelectorQuery()
        query.select('#canvas').node(function (res) {
          const canvas = res.node
          lottie.setup(canvas)
          const context = canvas.getContext('2d')
          lottie.loadAnimation({
            loop: false,
            autoplay: true,
            // 直接json
            animationData: {
              v: '4.9.0',
              fr: 60,
              ip: 0,
              op: 81,
              w: 800,
              h: 600,
              nm: 'DONE',
              ddd: 0,
              assets: [{
                id: 'comp_0',
                layers: [{
                  ddd: 0,
                  ind: 1,
                  ty: 3,
                  nm: 'Null 1',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 0},
                    r: {a: 0, k: 0},
                    p: {a: 0, k: [400, 300, 0]},
                    a: {a: 0, k: [0, 0, 0]},
                    s: {
                      a: 1,
                      k: [{
                        i: {x: [0.667, 0.667, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'], t: 0, s: [100, 100, 100], e: [105, 105, 100]
                      }, {
                        i: {x: [0.667, 0.667, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'], t: 19.285, s: [105, 105, 100], e: [95, 95, 100]
                      }, {
                        i: {x: [0.667, 0.667, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'], t: 32.143, s: [95, 95, 100], e: [102, 102, 100]
                      }, {
                        i: {x: [0.667, 0.667, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'], t: 38.572, s: [102, 102, 100], e: [100, 100, 100]
                      }, {t: 45}]
                    }
                  },
                  ao: 0,
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 2,
                  ty: 4,
                  nm: 'Shape Layer 2',
                  parent: 1,
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 20}, p: {a: 0, k: [0, 120, 0]}, a: {a: 0, k: [0, 120, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  shapes: [{
                    ind: 0,
                    ty: 'sh',
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [[-27.614, 0], [0, -27.614], [0, 0], [0, 27.614]], o: [[27.614, 0], [0, 27.614], [0, 0], [0, -27.614]], v: [[0, -50], [50, 0], [0, 120], [-50, 0]], c: true
                      }
                    },
                    nm: 'Path 1',
                    mn: 'ADBE Vector Shape - Group'
                  }, {
                    ty: 'fl', c: {a: 0, k: [1, 1, 1, 1]}, o: {a: 0, k: 100}, r: 1, nm: 'Fill 1', mn: 'ADBE Vector Graphic - Fill'
                  }],
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 3,
                  ty: 4,
                  nm: 'Shape Layer 1',
                  parent: 1,
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: -20}, p: {a: 0, k: [0, 120, 0]}, a: {a: 0, k: [0, 120, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  shapes: [{
                    ind: 0,
                    ty: 'sh',
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [[-27.614, 0], [0, -27.614], [0, 0], [0, 27.614]], o: [[27.614, 0], [0, 27.614], [0, 0], [0, -27.614]], v: [[0, -50], [50, 0], [0, 120], [-50, 0]], c: true
                      }
                    },
                    nm: 'Path 1',
                    mn: 'ADBE Vector Shape - Group'
                  }, {
                    ty: 'fl', c: {a: 0, k: [1, 1, 1, 1]}, o: {a: 0, k: 100}, r: 1, nm: 'Fill 1', mn: 'ADBE Vector Graphic - Fill'
                  }],
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }]
              }, {
                id: 'comp_1',
                layers: [{
                  ddd: 0,
                  ind: 2,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 315}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: 138}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 14,
                  op: 314,
                  st: 14,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 3,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 270}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 12,
                  op: 312,
                  st: 12,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 4,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 225}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: 138}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 10,
                  op: 310,
                  st: 10,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 5,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 180}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 8,
                  op: 308,
                  st: 8,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 6,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 135}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 6,
                  op: 306,
                  st: 6,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 7,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 90}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: -116}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 4,
                  op: 304,
                  st: 4,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 8,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 45}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: 120}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 2,
                  op: 302,
                  st: 2,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 9,
                  ty: 0,
                  nm: 'Burst',
                  refId: 'comp_2',
                  sr: 1,
                  ks: {
                    o: {a: 0, k: 100}, r: {a: 0, k: 0}, p: {a: 0, k: [400, 300, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                  },
                  ao: 0,
                  ef: [{
                    ty: 5,
                    nm: 'Hue/Saturation',
                    mn: 'ADBE HUE SATURATION',
                    ix: 1,
                    en: 1,
                    ef: [{
                      ty: 7, nm: 'Channel Control', mn: 'ADBE HUE SATURATION-0002', ix: 1, v: {a: 0, k: 1}
                    }, {}, {
                      ty: 0, nm: 'Master Hue', mn: 'ADBE HUE SATURATION-0004', ix: 3, v: {a: 0, k: -116}
                    }, {
                      ty: 0, nm: 'Master Saturation', mn: 'ADBE HUE SATURATION-0005', ix: 4, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Master Lightness', mn: 'ADBE HUE SATURATION-0006', ix: 5, v: {a: 0, k: 0}
                    }, {
                      ty: 7, nm: 'Colorize', mn: 'ADBE HUE SATURATION-0007', ix: 6, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Hue', mn: 'ADBE HUE SATURATION-0008', ix: 7, v: {a: 0, k: 0}
                    }, {
                      ty: 0, nm: 'Colorize Saturation', mn: 'ADBE HUE SATURATION-0009', ix: 8, v: {a: 0, k: 25}
                    }, {
                      ty: 0, nm: 'Colorize Lightness', mn: 'ADBE HUE SATURATION-0010', ix: 9, v: {a: 0, k: 0}
                    }]
                  }],
                  w: 800,
                  h: 600,
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }]
              }, {
                id: 'comp_2',
                layers: [{
                  ddd: 0,
                  ind: 1,
                  ty: 4,
                  nm: 'Shape Layer 3',
                  sr: 1,
                  ks: {
                    o: {
                      a: 1,
                      k: [{
                        i: {x: [0.38], y: [1]}, o: {x: [0.333], y: [0]}, n: ['0p38_1_0p333_0'], t: 41, s: [100], e: [0]
                      }, {t: 64}]
                    },
                    r: {a: 0, k: 0},
                    p: {
                      a: 1,
                      k: [{
                        i: {x: 0, y: 1}, o: {x: 0.333, y: 0}, n: '0_1_0p333_0', t: 4, s: [399.5, 327.5, 0], e: [271.5, 226.5, 0], to: [-21.3333339691162, -16.8333339691162, 0], ti: [21.3333339691162, 16.8333339691162, 0]
                      }, {t: 64}]
                    },
                    a: {a: 0, k: [0, 0, 0]},
                    s: {
                      a: 1,
                      k: [{
                        i: {x: [0, 0, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0_1_0p333_0', '0_1_0p333_0', '0p667_1_0p333_0'], t: 4, s: [0, 0, 100], e: [7.5, 7.5, 100]
                      }, {t: 64}]
                    }
                  },
                  ao: 0,
                  shapes: [{
                    d: 1, ty: 'el', s: {a: 0, k: [100, 100]}, p: {a: 0, k: [0, 0]}, nm: 'Ellipse Path 1', mn: 'ADBE Vector Shape - Ellipse'
                  }, {
                    ty: 'fl', c: {a: 0, k: [1, 0.7764706, 0, 1]}, o: {a: 0, k: 100}, r: 1, nm: 'Fill 1', mn: 'ADBE Vector Graphic - Fill'
                  }],
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 2,
                  ty: 4,
                  nm: 'Shape Layer 2',
                  sr: 1,
                  ks: {
                    o: {
                      a: 1,
                      k: [{
                        i: {x: [0.38], y: [1]}, o: {x: [0.333], y: [0]}, n: ['0p38_1_0p333_0'], t: 39, s: [100], e: [0]
                      }, {t: 62}]
                    },
                    r: {a: 0, k: 0},
                    p: {
                      a: 1,
                      k: [{
                        i: {x: 0, y: 1}, o: {x: 0.333, y: 0}, n: '0_1_0p333_0', t: 2, s: [399.5, 327.5, 0], e: [269.5, 245.5, 0], to: [-21.6666660308838, -13.6666669845581, 0], ti: [21.6666660308838, 13.6666669845581, 0]
                      }, {t: 62}]
                    },
                    a: {a: 0, k: [0, 0, 0]},
                    s: {
                      a: 1,
                      k: [{
                        i: {x: [0, 0, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0_1_0p333_0', '0_1_0p333_0', '0p667_1_0p333_0'], t: 2, s: [0, 0, 100], e: [5, 5, 100]
                      }, {t: 62}]
                    }
                  },
                  ao: 0,
                  shapes: [{
                    d: 1, ty: 'el', s: {a: 0, k: [100, 100]}, p: {a: 0, k: [0, 0]}, nm: 'Ellipse Path 1', mn: 'ADBE Vector Shape - Ellipse'
                  }, {
                    ty: 'fl', c: {a: 0, k: [1, 0.7764706, 0, 1]}, o: {a: 0, k: 100}, r: 1, nm: 'Fill 1', mn: 'ADBE Vector Graphic - Fill'
                  }],
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }, {
                  ddd: 0,
                  ind: 3,
                  ty: 4,
                  nm: 'Shape Layer 1',
                  sr: 1,
                  ks: {
                    o: {
                      a: 1,
                      k: [{
                        i: {x: [0.38], y: [1]}, o: {x: [0.333], y: [0]}, n: ['0p38_1_0p333_0'], t: 37, s: [100], e: [0]
                      }, {t: 60}]
                    },
                    r: {a: 0, k: 0},
                    p: {
                      a: 1,
                      k: [{
                        i: {x: 0, y: 1}, o: {x: 0.333, y: 0}, n: '0_1_0p333_0', t: 0, s: [399.5, 327.5, 0], e: [257, 226, 0], to: [-23.75, -16.9166660308838, 0], ti: [23.75, 16.9166660308838, 0]
                      }, {t: 60}]
                    },
                    a: {a: 0, k: [0, 0, 0]},
                    s: {
                      a: 1,
                      k: [{
                        i: {x: [0, 0, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0_1_0p333_0', '0_1_0p333_0', '0p667_1_0p333_0'], t: 0, s: [0, 0, 100], e: [10, 10, 100]
                      }, {t: 60}]
                    }
                  },
                  ao: 0,
                  shapes: [{
                    d: 1, ty: 'el', s: {a: 0, k: [100, 100]}, p: {a: 0, k: [0, 0]}, nm: 'Ellipse Path 1', mn: 'ADBE Vector Shape - Ellipse'
                  }, {
                    ty: 'fl', c: {a: 0, k: [1, 0.0705882, 0.2674047, 1]}, o: {a: 0, k: 100}, r: 1, nm: 'Fill 1', mn: 'ADBE Vector Graphic - Fill'
                  }],
                  ip: 0,
                  op: 300,
                  st: 0,
                  bm: 0
                }]
              }],
              layers: [{
                ddd: 0,
                ind: 1,
                ty: 0,
                nm: 'Heart',
                td: 1,
                refId: 'comp_0',
                sr: 1,
                ks: {
                  o: {a: 0, k: 100}, r: {a: 0, k: 0}, p: {a: 0, k: [400, 270, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                },
                ao: 0,
                w: 800,
                h: 600,
                ip: 0,
                op: 300,
                st: 0,
                bm: 0
              }, {
                ddd: 0,
                ind: 2,
                ty: 4,
                nm: 'Shape Layer 1',
                tt: 1,
                sr: 1,
                ks: {
                  o: {a: 0, k: 100},
                  r: {a: 0, k: 0},
                  p: {a: 0, k: [400, 303, 0]},
                  a: {a: 0, k: [0, 0, 0]},
                  s: {
                    a: 1,
                    k: [{
                      i: {x: [0, 0, 0.667], y: [1, 1, 1]}, o: {x: [0.333, 0.333, 0.333], y: [0, 0, 0]}, n: ['0_1_0p333_0', '0_1_0p333_0', '0p667_1_0p333_0'], t: 20, s: [0, 0, 100], e: [217, 217, 100]
                    }, {t: 41}]
                  }
                },
                ao: 0,
                shapes: [{
                  d: 1, ty: 'el', s: {a: 0, k: [100, 100]}, p: {a: 0, k: [0, 0]}, nm: 'Ellipse Path 1', mn: 'ADBE Vector Shape - Ellipse'
                }, {
                  ty: 'fl', c: {a: 0, k: [0.9137255, 0.0788312, 0.0788312, 1]}, o: {a: 0, k: 100}, r: 1, nm: 'Fill 1', mn: 'ADBE Vector Graphic - Fill'
                }],
                ip: 0,
                op: 300,
                st: 0,
                bm: 0
              }, {
                ddd: 0,
                ind: 3,
                ty: 0,
                nm: 'Heart',
                refId: 'comp_0',
                sr: 1,
                ks: {
                  o: {a: 0, k: 100}, r: {a: 0, k: 0}, p: {a: 0, k: [400, 270, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                },
                ao: 0,
                ef: [{
                  ty: 5,
                  nm: 'Simple Choker',
                  mn: 'ADBE Simple Choker',
                  ix: 1,
                  en: 1,
                  ef: [{
                    ty: 7, nm: 'View', mn: 'ADBE Simple Choker-0001', ix: 1, v: {a: 0, k: 1}
                  }, {
                    ty: 0, nm: 'Choke Matte', mn: 'ADBE Simple Choker-0002', ix: 2, v: {a: 0, k: 1}
                  }]
                }],
                sy: [{
                  ty: 0, nm: 'Stroke', c: {a: 0, k: [0, 0, 0, 1]}, s: {a: 0, k: 3}
                }],
                w: 800,
                h: 600,
                ip: 0,
                op: 300,
                st: 0,
                bm: 0
              }, {
                ddd: 0,
                ind: 4,
                ty: 0,
                nm: 'Burst Final*',
                refId: 'comp_1',
                sr: 1,
                ks: {
                  o: {a: 0, k: 100}, r: {a: 0, k: 0}, p: {a: 0, k: [400, 310, 0]}, a: {a: 0, k: [400, 300, 0]}, s: {a: 0, k: [100, 100, 100]}
                },
                ao: 0,
                w: 800,
                h: 600,
                ip: 0,
                op: 300,
                st: 0,
                bm: 0
              }]
            },
            // 线上地址
            // path: '',
            rendererSettings: {
              context
            }
          }).addEventListener('complete', function () {
            that.setData({
              gifStatus: false
            })
          })
        }).exec()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
