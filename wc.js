const fs = require('fs')

let text = process.argv.length === 3 ? fs.readFileSync(process.argv[2], 'utf-8') : fs.readFileSync(process.argv[3], 'utf-8')
let nbrLineTab = text.split('\n').length
let nbrWordsTab = text.split(' ').length
let nbrCharTab = text.split('').length
let nbrLine = nbrLineTab.toString()
let nbrWords = nbrWordsTab.toString()
let nbrChar = nbrCharTab.toString()

//console.log(text)

if (process.argv.length !== 3 && process.argv.length !== 4) {
  console.log('Usage: node wc.js file.txt or node wc.js -[params] file.txt')
  process.exit(1)
} else if (process.argv.length === 3 && !fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
} else if (process.argv.length === 3 && !fs.statSync(process.argv[2]).isFile()) {
  console.log(`Error: ${process.argv[2]} is note a file`)
  process.exit(1)
} else if (process.argv.length === 3) {
  console.log(nbrLine + '   ' + nbrWords + '  ' + nbrChar + '   ' + process.argv[2])
} else if (process.argv.length === 4 && process.argv[2] === '-l') {
  console.log(nbrLine + '   ' + process.argv[3])
} else if (process.argv.length === 4 && process.argv[2] === '-w') {
  console.log(nbrWords + '   ' + process.argv[3])
} else if (process.argv.length === 4 && process.argv[2] === '-c') {
  console.log(nbrChar + '   ' + process.argv[3])
}