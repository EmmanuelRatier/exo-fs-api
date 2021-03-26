const fs = require('fs')

//check comman line length
if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('usage: node tail.js file.txt or node tail.js -n number file txt')
  process.exit(1)
}
// check if file exists
if (!fs.existsSync(process.argv[2]) && process.argv.length === 3) {
  console.log('Error: file does not exist')
  process.exit(1)
}
// check if isFile
else if (!fs.statSync(process.argv[2]).isFile() && process.argv.length === 3) {
  console.log('only file are accepted')
  process.exit(1)
}
//if is good numbers arguments execute program
else if (process.argv.length === 3) {
  let textFile = fs.readFileSync(process.argv[2], 'utf-8')
  let lastTenLine = textFile.split('\n').splice(-10, 10)
  console.log(lastTenLine.join('\n'))
}
//check if file exist for program with param
else if (!fs.existsSync(process.argv[4]) && process.argv.length === 5) {
  console.log('Error: file does not exist')
  process.exit(1)
}
// check if isFile with param
else if (!fs.statSync(process.argv[4]).isFile() && process.argv.length === 5) {
  console.log('only file are accepted')
  process.exit(1)
}
else if (process.argv.length === 5 && process.argv[2] === '-n') {
  let numberParam = process.argv[3]
  let textFileWithParam = fs.readFileSync(process.argv[4], 'utf-8')
  let lastLine = textFileWithParam.split('\n').splice(- numberParam, numberParam)
  console.log(lastLine.join('\n'))
}
