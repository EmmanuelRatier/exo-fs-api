const fs = require('fs')

if (process.argv.length !== 3) {
  console.log('pas le bon nombre d\'argument')
} else {
  let textFile = fs.readFileSync(process.argv[2], 'utf-8')
  let lastTenLine = textFile.split('\n').splice(-11, 10)
  console.log(lastTenLine.join('\n'))

}