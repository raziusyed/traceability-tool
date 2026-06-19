import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const source = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')

const requiredSignals = [
  'traceNodes',
  'nodeDetails',
  'journeySteps',
  'selectedNodeId',
  'expandedNodeIds',
  'toggleNodeExpanded',
  'selectedBatchId',
  'Batch Details',
  'Select Batch',
  'Production Journey',
  'Shipment Information',
  'Previous Batches',
  'LifecycleConnector',
  'md:right-4',
  'aria-expanded',
  'bg-secondary-container/35',
  'border-outline-variant',
  'qualityIssueScenario',
  'Report quality issue',
  'Affected downstream',
  'Impact Analysis',
  'Containment action',
  '3 affected records',
  'Trace path',
  'impactedNodeIds',
  'traceIssuePath',
  'Quality hold',
  'data-quality-impact',
  'WarningIcon',
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

assert(
  !source.includes('function ProductionJourney') && !source.includes('function ShipmentInformation'),
  'Expected journey and shipment to be rendered together in one batch details card',
)

assert(
  !source.includes('Selected Scope'),
  'Expected selected scope summary to be removed because inspector already shows this data',
)

assert(
  !source.includes('>{node.icon}<'),
  'Expected tree nodes to render icons instead of two-letter abbreviations',
)

assert(
  !source.includes('Batch Type'),
  'Expected redundant batch type summary tile to be removed',
)

assert(
  !source.includes('Process exposure') && !source.includes('processImpacts'),
  'Expected impact analysis to stay simple without the detailed process exposure table',
)
