; (function () {
  // ---------------------------------------------尝试写自己的jqury方法库
  //----- 用$(css选择器)获取元素的伪数组-------$------
  let $ = function (xzq) {
    return new Init(xzq)
  }
  // 构建伪数组对象--------------------------------Init-------------
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
  // ---------------注册事件-----&-----委托事件---on(事件类型，子元素选择器,fn)
  Init.prototype.on = function (leixing, zi, fn) {
    // 如果传入两个参数
    if (fn === undefined) {
      fn = zi
      this.each((i, e) => {
        e.addEventListener(leixing, fn)
      })
    } else {
      this.each((i, e) => {
        e.addEventListener(leixing, function (e) {

          let list = this.querySelectorAll(zi);

          let index = Array.prototype.indexOf.call(list, e.target) != -1;
          if (index) {
            // this指向e.target
            fn.call(e.target)
          }
        })
      })


    }
  }
  // --------------给父盒子追加子元素---------------- append/prepend/before------------
  // 最前面添加
  Init.prototype.prepend = function (event) {
    this.each((i, e) => {
      console.log(e.children[0])
      e.insertBefore(event, e.children[0])
    })
  };
  // 在nextEvent前面添加
  Init.prototype.before = function (event, nextEvent) {
    this.each((i, e) => {
      e.insertBefore(event, nextEvent)
    })
  }
  // 在最后面添加
  Init.prototype.append = function (event) {
    this.each((i, e) => {
      // console.log(e.children)
      e.appendChild(event)
    })
  }






  // --------------获取元素---------------- siblings/children/parent/parents-------
  Init.prototype.siblings = function () {

  }



  // --------------将方法付给window对象，使在自调用函数外也可以用--《底》--
  window.$ = $;
})();