import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const source = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')

const requiredSignals = [
  'traceNodes',
  'nodeDetails',
  'journeySteps',
  'selectedNodeId',
  'Production Journey',
  'Evidence Records',
  'Shipment Information',
  'Previous Batches',
]

for (const signal of requiredSignals) {
  assert(
    source.includes(signal),
    `Expected App.jsx to include traceability signal: ${signal}`,
  )
}

assert(
  source.includes('useState'),
  'Expected App.jsx to use React state for selected node updates',
)

assert(
  !source.includes('document.querySelector') && !source.includes('getElementById'),
  'Expected App.jsx to avoid imperative DOM mutation',
)
