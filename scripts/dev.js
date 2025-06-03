// scripts/dev.js
const { execSync } = require('child_process')
const path = require('path')

const deckName = process.argv[2]

if (!deckName) {
  console.error('❌ Please provide a deck name: npm run dev <deckname>')
  process.exit(1)
}

const deckFilePath = path.resolve(__dirname, '..', 'slidedecks', deckName, 'slides.md')

try {
  execSync(`npx slidev "${deckFilePath}"`, { stdio: 'inherit' })
} catch (err) {
  console.error(`❌ Failed to start Slidev for "${deckName}"`)
  process.exit(1)
}

