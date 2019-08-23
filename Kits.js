
// 定义个变量，储存得到时间的函数
var jm = {}
// 补零函数
jm.ten = function (s) {

  return s < 10 ? '0' + s : s
}
// 调用此函数返回当前时间
jm.time = function () {
  var date = new Date()
  var year = date.getFullYear()
  var month = jm.ten(date.getMonth() + 1)
  var day = jm.ten(date.getDate())
  var hours = jm.ten(date.getHours())
  var minutes = jm.ten(date.getMinutes())
  var seconds = jm.ten(date.getSeconds())
  return year + '-' + month + "-" + day + ' ' + hours + ':' + minutes + ':' + seconds


}
// n~m随机数
jm.sjs = function (n, m) {
  return Math.floor(Math.random() * (m + 1 - n) + n)
}
// id数字：时间截+6位数
jm.id = function () {
  // 获得毫秒数
  let date = new Date()
  let num = date.getTime()
  return num + '' + this.sjs(100000, 999999)
}
// 获取十六进制随机颜色
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
// rgb随机颜色
jm.rgbColor = function () {
  let r = this.sjs(0, 255)
  let g = this.sjs(0, 255)
  let b = this.sjs(0, 255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'

}