const fs = require('fs')
let tabArg = process.argv.slice(2)

if (process.argv.length < 3) {//verifier la cmd line
  console.log('usage: node cat.js file.txt file.txt ...')
  process.exit(1)
} else {
  for (let elem of tabArg) {
    const stats = fs.statSync(elem)// verifie si c'est un fichier
    if (!stats.isFile()) {
      console.log(`Error: ${elem} is not a file`)
      continue
    }
    if (!fs.existsSync(elem)) {//verifier si le fichier existe
      console.log(`error: ${elem} does not exist`)
      continue
    } else {
      console.log(fs.readFileSync(elem, 'utf-8'))// lecture du fichier dans le terminal
    }
  }
}
