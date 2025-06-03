// scripts/export.js
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const deckName = process.argv[2]

if (!deckName) {
  console.error('❌ Please provide a deck name: npm run export <deckname>')
  process.exit(1)
}

const deckPath = path.resolve(__dirname, '..', 'slidedecks', deckName)
const outputPdfPath = path.join(deckPath, `${deckName}.pdf`)

if (!fs.existsSync(path.join(deckPath, 'slides.md'))) {
  console.error(`❌ slides.md not found in ${deckPath}`)
  process.exit(1)
}

try {
  execSync(`npx slidev export "${path.join(deckPath, 'slides.md')}" --output "${outputPdfPath}"`, {
    stdio: 'inherit'
  })
  console.log(`✅ PDF saved to: ${outputPdfPath}`)
} catch (err) {
  console.error(`❌ Failed to export PDF for "${deckName}"`)
  process.exit(1)
}
