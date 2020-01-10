
// -----------------------------------定义工具对象----------------
var jm = {}


// -----------------------------------------jm.时间----------------------------
//1. 补零函数
jm.ten = function (s) {
  return s < 10 ? '0' + s : s
}
//2. 调用此函数返回当前时间
jm.time = function () {
  let ten = function (s) {
    return s < 10 ? '0' + s : s
  }
  var date = new Date()
  var year = date.getFullYear()
  var month = ten(date.getMonth() + 1)
  var day = ten(date.getDate())
  var hours = ten(date.getHours())
  var minutes = ten(date.getMinutes())
  var seconds = ten(date.getSeconds())
  return year + '-' + month + "-" + day + ' ' + hours + ':' + minutes + ':' + seconds
}
// ------------------------------------jm.随机数，随机id------------------------

//3. n~m随机数
jm.sjs = function (n, m) {
  return Math.floor(Math.random() * (m + 1 - n) + n)
}
//4. id数字：时间截+6位数
jm.id = function () {
  // 获得毫秒数
  let date = new Date()
  let num = date.getTime()
  return num + '' + this.sjs(100000, 999999)
}
// ------------------------------------------jm.随机颜色--------------------------------
//5. 获取十六进制随机颜色
jm.color16 = function () {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let a = jm.sjs(0, 15)
  let b = jm.sjs(0, 15)
  let c = jm.sjs(0, 15)
  let d = jm.sjs(0, 15)
  let e = jm.sjs(0, 15)
  let f = jm.sjs(0, 15)

  return '#' + arr[a] + arr[b] + arr[c] + arr[d] + arr[e] + arr[f]
}
//6. rgb随机颜色
jm.rgbColor = function () {
  let r = this.sjs(0, 255)
  let g = this.sjs(0, 255)
  let b = this.sjs(0, 255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'

}
// -----------------------------------------jm.localStorage------------------------------------
//7.getLocalDataArray(key)  从localStorage里面根据指定的键(key)获取一个数组或空[]
jm.getLocalDataArray = function (key) {
  let arr = localStorage.getItem(key)
  arr = JSON.parse(arr) || []
  return arr
}
//8. saveLocalDataArray(key,arr)   将一个数组(arr)以指定的键(key)存储到localStorage里面
jm.saveLocalDataArray = function (key, arr) {
  localStorage.setItem(key, JSON.stringify(arr))
}
//9.后 appendDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数据-后-追加一个数据对象（data）
jm.appendDataIntoArray = function (key, data) {
  // 得到储存的数组
  let arr = JSON.parse(localStorage.getItem(key)) || []
  // 向数组后面追加对象data
  arr.push(data)
  // 覆盖浏览器原来的记录
  localStorage.setItem(key, JSON.stringify(arr))
}
//10.前  beforeDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数-前-据追加一个数据对象（data）
jm.beforeDataIntoArray = function (key, data) {
  // 得到储存的数组
  let arr = JSON.parse(localStorage.getItem(key)) || []
  // 向数组前面追加对象data
  arr.unshift(data)
  // 覆盖浏览器原来的记录
  localStorage.setItem(key, JSON.stringify(arr))
}
// 11.deleteLocalDataById(key,id)   根据对应的id从localStorage中指定键(key)的数组中删除一条数据
jm.deleteLocalDataById = (key, id) => {
  // 获取浏览器记录数组
  let arr = JSON.parse(localStorage.getItem(key))
  // 遍历数组，找到id对应的那一项
  arr.forEach((e, i) => {
    if (e.id == id) {
      arr.splice(i, 1)
    }
  });
  localStorage.setItem(key, JSON.stringify(arr))
}

// 12.modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据
jm.modifyLocalDataById = (key, id, data) => {
  // 获取浏览器记录数组
  let arr = JSON.parse(localStorage.getItem())
  // 遍历数组，找到id对应的那一项
  arr.forEach((e, i) => {
    if (e.id == id) {
      arr.splice(i, 1, data)
    }
  });
  localStorage.setItem(key, JSON.stringify(arr))
}


// -----------------------------------------------------------------------------------------------