const fs = require('fs')
let elem = process.argv[2]
if (process.argv.length !== 3) {
  console.log('pas le bon nombre d\'argument')
}
if (!fs.existsSync(elem)) {//verifier si le fichier existe
  console.log(`error: ${elem} does not exist`)
  process.exit(1)
}
const stats = fs.statSync(elem)// verifie si c'est un fichier
if (!stats.isFile()) {
  console.log(`Error: ${elem} is not a file`)
  process.exit(1)
}
else {
  let textFile = fs.readFileSync(process.argv[2], 'utf-8')
  let lastTenLine = textFile.split('\n').splice(-11, 10)
  console.log(lastTenLine.join('\n'))
}