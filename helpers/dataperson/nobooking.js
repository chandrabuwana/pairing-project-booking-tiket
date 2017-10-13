function noBook(){

  let alphaNum = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  let code

  for(let i = 0; i < 6; i++){
    let a = alphaNum[Math.floor(Math.random() * alphaNum.length)]
    let b = alphaNum[Math.floor(Math.random() * alphaNum.length)]
    let c = alphaNum[Math.floor(Math.random() * alphaNum.length)]
    let d = alphaNum[Math.floor(Math.random() * alphaNum.length)]
    let e = alphaNum[Math.floor(Math.random() * alphaNum.length)]
    let f = alphaNum[Math.floor(Math.random() * alphaNum.length)]

    code = a + b + c + d + e + f

  }

  return code

}

console.log(noBook())

module.exports = noBook
