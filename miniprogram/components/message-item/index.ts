// components/message-item/index.ts
Component({
  options:{
      virtualHost:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
      role: {
          type: String,
          default: 'assistant',
      },
      content: {
          type: String,
          default: '',
      },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
