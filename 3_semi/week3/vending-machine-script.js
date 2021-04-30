const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const myMoneyButton = document.getElementById("add-money")
const myMoneyDisplay = document.getElementById("my-money")
const addMoneyButtonV = document.getElementById("add-money-v")
const amountDisplay = document.getElementById("amount-money")

// 所持金
let myMoney = 0
// 投入金額
let amountMoney = 0
//所持金追加ボタン
myMoneyButton.onclick = () => {
  myMoney += 1000
  myMoneyDisplay.textContent = myMoney
}
addMoneyButtonV.onclick = () => {
  if (myMoney >= 100) {
    myMoney -= 100
    amountMoney += 100
    myMoneyDisplay.textContent = myMoney
    amountDisplay.textContent = amountMoney
  }
}

const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  //   figure
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  //   img
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  //   figureの中にimgを入れて返す
  figure.append(img)
  return figure
}
//投入金（amountMoney）がお茶ボタン
teaButton.onclick = () => {
  if (amountMoney >= 100) {
    amountMoney -= 100
    amountDisplay.textContent = amountMoney
    // createImage関数が発動
    const image = createImage("tea")
    display.append(image)
  }
}
cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    amountMoney -= 130
    amountDisplay.textContent = amountMoney
    const image = createImage("coke")
    display.append(image)
  }
}
