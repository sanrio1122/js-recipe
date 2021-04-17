const number = 24
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
const genkiFunction = function(number) {
  //nが1からnumberに達するまでfor文
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
