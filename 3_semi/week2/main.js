const input = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

let memos = []

if (localStorage.memos) {
  //
  const memosJson = localStorage.memos
  //パース
  memos = JSON.parse(memosJson)
  //メモの分だけくりかえす
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    memoContainer.append(div)
  }
}

addButton.onclick = function() {
  //3
  const text = input.value
  memos.push(text)
  input.value = ""
  localStorage.memos = JSON.stringify(memos)
  const div = document.createElement("div")
  div.textContent = text
  memoContainer.append(div)

  //2
  //   const text = input.value
  //   memos.push(text)
  //   console.log(memos)
  //   const div = document.createElement("div")
  //   div.textContent = text
  //   memoContainer.append(div)

  //1
  //   memoContainer.append(div)
  //   const text="テスト"
  //   const div = document.createElement("div")
  //   div.textContent = text
  //   console.log(text)
  //   memoContainer.append(div)
}
