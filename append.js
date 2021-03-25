const fs = require('fs')
let tabArg = process.argv.slice(2)
let lastElem = tabArg.pop()

if (process.argv.length < 3) {
  console.log('pas le bon nombre d\'arguments')
  process.exit(1)
} else {
  for (let elem of tabArg) {
    const stats = fs.statSync(elem)// verifie si c'est un fichier
    if (!stats.isFile()) {
      console.log(`Error: ${elem} is not a file`)
      process.exit(1)
    }
    if (!fs.existsSync(elem)) {//verifier si le fichier existe
      console.log(`error: ${elem} does not exist`)
      process.exit(1)
    } else {
      const content = fs.readFileSync(elem, 'utf-8') //lecture du contenu
      fs.appendFileSync(lastElem, content) // placer les contenus dans le premier arg
    }
  }
}
