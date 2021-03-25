const fs = require('fs')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('pas le bon nombre d\'argument')
}
if (process.argv.length === 3) {
  let textFile = fs.readFileSync(process.argv[2], 'utf-8')
  let lastTenLine = textFile.split('\n').splice(-10, 10)
  console.log(lastTenLine.join('\n'))
} else if (process.argv.length === 5 && process.argv[2] === '-n') {
  let numberParam = process.argv[3]
  let textFileWithParam = fs.readFileSync(process.argv[4], 'utf-8')
  let lastLine = textFileWithParam.split('\n').splice(- numberParam, numberParam)
  //console.log(lastLine.length)
  console.log(lastLine.join('\n'))
}
