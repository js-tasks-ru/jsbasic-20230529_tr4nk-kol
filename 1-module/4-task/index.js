function checkSpam(str) {
  let strToLower = str.toLowerCase()
  return strToLower.includes('1xbet') || strToLower.includes('xxx')

}

console.log(checkSpam('1XbeT now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))
