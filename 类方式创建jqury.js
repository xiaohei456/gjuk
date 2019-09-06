(function () {
  function $(xzq) {
    return new Init(xzq)
  }


  class Init {
    constructor(xzq) {
      // 参数是选择器字符串，通过获取页面元素维数组
      let dom = document.querySelectorAll(xzq)
      // 遍历dom
      dom.forEach((e, i) => {
        this[i] = e
      })
      this.length = dom.length
    }
    // -------------------------------------each((i,e)=>{})----循环遍历的方法---
    /**
     * 
     * @param {回调函数} fn 
     */
    each(fn) {
      for (let i = 0; i < this.length; i++) {
        fn(i, this[i])
      }
    }
    // -----------------------------------------css设置/获取样式----------
    /**
     * 
     * @param {属性名} m 
     * @param {属性值} z 
     */
    css(m, z) {
      // 传入一个参数就获取属性值
      if (z === undefined) {
        // 获取页面该元素的所有样式
        let style = window.getComputedStyle(this[0])
        return style[m]
      } else {
        //传入两个参数就设置属性值
        this.each((i, e) => {
          e.style[m] = z
        })
      }


    }
    //------------------------------注册事件------事件委托--------------
    // -----on(事件类型，后代子元素,fn)
    // addEventListener
    on(leixing, xzq, fn) {
      //  当传入两个参数时
      if (fn === undefined) {
        let fn = xzq;

        this.each((i, e) => {
          e.addEventListener(leixing, fn)
        })
      } else {
        this.each((i, e) => {
          e.addEventListener(leixing, function (e) {

            let list = this.querySelectorAll(xzq);

            let index = Array.prototype.indexOf.call(list, e.target) != -1;
            if (index) {
              // this指向e.target
              fn.call(e.target)
            }
          })
        })


      }


    }

  }
  // -------------------------------------底部---------------------------------
  window.$ = $
})()