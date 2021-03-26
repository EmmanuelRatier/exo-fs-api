const fs = require('fs')

if (process.argv.length !== 3) {
  console.log('Usage: node wc.js file.txt')
  process.exit(1)
} else if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
} else if (!fs.statSync(process.argv[2]).isFile()) {
  console.log(`Error: ${process.argv[2]} is note a file`)
  process.exit(1)
} else {
  let text = fs.readFileSync(process.argv[2], 'utf-8')
  let nbrLineTab = text.split('\n').length
  let nbrWordsTab = text.split(' ').length
  let nbrCharTab = text.split('').length
  let nbrLine = nbrLineTab.toString()
  let nbrWords = nbrWordsTab.toString()
  let nbrChar = nbrCharTab.toString()
  console.log(nbrLine + '   ' + nbrWords + '  ' + nbrChar + '   ' + process.argv[2])
}
