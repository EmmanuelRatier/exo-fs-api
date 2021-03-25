const fs = require('fs')

if (process.argv.length !== 4) {// check si bon nombre d'arguments
  console.log('usage: node cp.js src.txt dst.txt')
  process.exit(1)
} else if (!fs.existsSync(process.argv[2])) {
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
} else {
  fs.copyFileSync(process.argv[2], process.argv[3])
}