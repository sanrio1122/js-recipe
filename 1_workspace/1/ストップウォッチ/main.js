const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  // count を更新
  count += 1
  console.log(count)
  // count を秒単位にして表示
  display.textContent = count / 100
}
// 実行中のタイマーのid
let id = null

button.onclick = function() {
  // 10ms（100分の1秒） ごとに countUp を実行するように登録する
  //   setInterval(countUp, 10)
  //   button.textContent = "stop"
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    // stop
    //setInterval ⇄ clearInteraval
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
