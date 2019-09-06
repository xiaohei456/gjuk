class Tab {
  /**
   * 
   * @param {大盒子选择器} box 
   * @param {参数对象方式传入} obj 
   */
  constructor(box, obj) {
    obj = obj || {}
    // 获取tab大盒子box
    this.box = document.querySelector(box)
    // 分类的父元素ul
    this.navItems = this.box.querySelector(obj.navItems || '.nav-items')
    // 分类
    this.item = this.box.querySelectorAll(obj.item || '.item')
    // 事件类型
    this.event = obj.event || 'mouseover';
    // 内容父盒子
    this.navContent = this.box.querySelector(obj.navContent || '.nav-content')
    // 内容
    this.content = this.box.querySelectorAll(obj.content || '.content')
    this.addEvent()

  }
  // 事件
  addEvent() {
    console.log(this.item)
    this.item.forEach((e, i) => {
      // addEventListener
      e.addEventListener(this.event, e => {
        // 当事件触发就调用自己的函数
        this.addItemStyle(e.target)
        this.addContentStyle(i)
      })
    })
  }
  // 改变分类样式

  addItemStyle(target) {
    // 排他方式先去掉所有项的类名
    this.item.forEach(e => {
      e.classList.remove('aqua')
    })
    // 并把事件对象加上类名
    target.classList.add('aqua')
  }
  // 改变对应内容显示，其他隐藏
  addContentStyle(index) {
    // 排他方式隐藏所有内容
    this.content.forEach(e => {
      e.classList.remove('show')

    })

    // 把对应内容显示，根据参数传入的索引
    this.content[index].classList.add('show')

  }
}