// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: ['http://f.hiphotos.baidu.com/image/h%3D300/sign=705ffa145fda81cb51e685cd6267d0a4/4bed2e738bd4b31c5a30865b89d6277f9f2ff8c6.jpg',
      'http://b.hiphotos.baidu.com/image/h%3D300/sign=472111e0b7389b5027ffe652b537e5f1/a686c9177f3e6709b8cd4e0135c79f3df9dc557a.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=7eb5b3ce9bcad1c8cfbbfa274f3c67c4/83025aafa40f4bfbb5163db50d4f78f0f6361808.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=0ed135fcda2a28345ca6300b6bb4c92e/e61190ef76c6a7efa0938dc7f3faaf51f2de669d.jpg',
      'http://f.hiphotos.baidu.com/image/h%3D300/sign=549d46e1526034a836e2be81fb1249d9/7c1ed21b0ef41bd560d627145fda81cb38db3d4d.jpg',
      'http://f.hiphotos.baidu.com/image/h%3D300/sign=00af05b334f33a87816d061af65d1018/8d5494eef01f3a29f863534d9725bc315d607c8e.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=342e12b86563f624035d3f03b745eb32/203fb80e7bec54e7f0e0839fb7389b504fc26a27.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=1930fb0cba8f8c54fcd3c32f0a282dee/c9fcc3cec3fdfc032424de5ada3f8794a5c226f7.jpg',
      'http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg',
      'http://f.hiphotos.baidu.com/image/h%3D300/sign=705ffa145fda81cb51e685cd6267d0a4/4bed2e738bd4b31c5a30865b89d6277f9f2ff8c6.jpg',
      'http://b.hiphotos.baidu.com/image/h%3D300/sign=472111e0b7389b5027ffe652b537e5f1/a686c9177f3e6709b8cd4e0135c79f3df9dc557a.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=7eb5b3ce9bcad1c8cfbbfa274f3c67c4/83025aafa40f4bfbb5163db50d4f78f0f6361808.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=0ed135fcda2a28345ca6300b6bb4c92e/e61190ef76c6a7efa0938dc7f3faaf51f2de669d.jpg',
      'http://f.hiphotos.baidu.com/image/h%3D300/sign=549d46e1526034a836e2be81fb1249d9/7c1ed21b0ef41bd560d627145fda81cb38db3d4d.jpg',
      'http://f.hiphotos.baidu.com/image/h%3D300/sign=00af05b334f33a87816d061af65d1018/8d5494eef01f3a29f863534d9725bc315d607c8e.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=342e12b86563f624035d3f03b745eb32/203fb80e7bec54e7f0e0839fb7389b504fc26a27.jpg',
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=1930fb0cba8f8c54fcd3c32f0a282dee/c9fcc3cec3fdfc032424de5ada3f8794a5c226f7.jpg',
      'http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const index = e.currentTarget.dataset.index;
      const array = this.data.imgArr;
      wx.previewImage({
        urls: array,
        current: array[index]
      })
    }
  }
})