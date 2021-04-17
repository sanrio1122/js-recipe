//ボタンを取得→displayを取得→clickしたらdisplayの中に文字を代入
const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const button3 = document.getElementById("choice-3")
const display = document.getElementById("dis")

button1.onclick = function() {
  display.textContent = "残念！イーブイは茶色いやつだよ"
}
button2.onclick = function() {
  display.textContent = "残念！サンダースは黄色いやつだよ"
}
button3.onclick = function() {
  display.textContent = "正解！ニンフィアかわいいね！"
}
