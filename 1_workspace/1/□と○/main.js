const figure = document.getElementById("figure")
const squareButton = document.getElementById("squaew-button")
const circleButton = document.getElementById("circle-button")

circleButton.onclick = function() {
  // htmlではfigure はsquareクラスのみ、rounded クラスを追加する
  figure.classList.add("rounded")
}

squareButton.onclick = function() {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
}

//要素.classList.toggle(クラス名)はクラス名が要素にあれば削除し、なければ追加
const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}
