//recipe.4　ストップウォッチ
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

//recipe.3　□と◯
// const figure = document.getElementById("figure")
// const squareButton = document.getElementById("squaew-button")
// const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function (){
//     // htmlではfigure はsquareクラスのみ、rounded クラスを追加する
//     figure.classList.add('rounded')
// }

// squareButton.onclick = function (){
//     // figure から rounded クラスを削除する
//     figure.classList.remove('rounded')
// }

//要素.classList.toggle(クラス名)はクラス名が要素にあれば削除し、なければ追加
// const figure = document.getElementById("figure")

// figure.onclick = function() {
//   figure.classList.toggle("rounded")
// }

//recipe.2　カウンター
// const display = document.getElementById("display")
// const plusButton = document.getElementById("plus-button")

// let count = 0

// plusButton.onclick = function() {
//   count += 1
//   display.textContent = count
// }

//recipe.1 3の倍数
// const number = 24
//まるいち
// if (number % 3 === 0) {
//   console.log(number + "!!!!!!")
// } else {
//   console.log(number)
// }
//まるに
// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n + "!!!!!")
//   } else {
//     console.log(n)
//   }
// }
//まるさん 引数 number を受け取る関数
// const genkiFunction = function(number) {
//   //nが1からnumberに達するまでfor文
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 === 0) {
//       console.log(`${n}!!!!!!!`)
//     } else {
//       console.log(n)
//     }
//   }
// }
