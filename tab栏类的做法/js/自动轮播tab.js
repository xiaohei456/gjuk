class AutoTab extends Tab {
  constructor(box, afterTime, obj) {
    super(box, obj)
    this.afterTime = afterTime
    this.autoPlay()
  }
  autoPlay() {
    // 每隔一段时间afterTime后，执行函数
    // 转换tab栏索引值切换
    // 开始为0
    let num = 0
    let si = setInterval(() => {
      num++;
      num %= this.item.length
      this.addItemStyle(this.item[num])
      this.addContentStyle(num)
    }, this.afterTime)
    this.stopAuto(si, num)
  }
  stopAuto(si, num) {
    this.box.addEventListener(this.event, () => {
      clearInterval(si)
    })
    this.box.addEventListener('mouseout', () => {
      si = setInterval(() => {
        num++;
        num %= this.item.length
        this.addItemStyle(this.item[num])
        this.addContentStyle(num)
      }, this.afterTime)
    })
  }
} 