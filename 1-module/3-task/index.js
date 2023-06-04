function ucFirst(str) {
  if(!str ){
    return ''
    // return false
  }

 return str[0].toUpperCase()  + str.slice(1)
}
console.log(ucFirst('вася'))
console.log(ucFirst('в'))
console.log(ucFirst(''))
