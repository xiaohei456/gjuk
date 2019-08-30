// ---------------------------------------------尝试写自己的jqury方法库
//----- 用$(css选择器)获取元素的伪数组-------$------
let $ = function (xzq) {
  return new Init(xzq)
}
// 构建伪数组对象--------------------------------Init-----
function Init(xzq) {
  // 通过形参获取页面元素伪数组
  let dom = document.querySelectorAll(xzq)
  // 遍历这个dom伪数组，将其转换成init实例对象
  for (let i = 0; i < dom.length; i++) {
    this[i] = dom[i]
  }
  // 长度
  this.length = dom.length
}



// --------------------------------------------给 Init原型添加方法-----------------
// --------------------------------------------------each循环---------------------
// jq对象.each((i,e)=>{})
/**
 * 
 */
Init.prototype.each = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(i, this[i])
  }
}
// ---------------------------------------------css设置/获取样式--------------------
// jq对象.css(属性名m，属性值z))
Init.prototype.css = function (m, z) {
  // 如果传入一个参数就 返回属性值
  if (z === undefined) {
    // 获取style
    let style = window.getComputedStyle(this[0])
    // 因为传入的m时字符串，用[]获取
    return style[m]
  }
  // 两个参数就设置该属性的值
  this.each((i, e) => {
    e.style[m] = z
  })
}
