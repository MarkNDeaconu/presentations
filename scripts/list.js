// scripts/list.js
const fs = require('fs')
const path = require('path')

const decksPath = path.resolve(__dirname, '..', 'slidedecks')

const decks = fs.readdirSync(decksPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

if (decks.length === 0) {
  console.log('No presentations found.')
} else {
  console.log('Available presentations:')
  decks.forEach(deck => console.log('•', deck))
}
