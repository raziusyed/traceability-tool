import { useState } from 'react'

const traceNodes = [
  {
    id: 'trail-runner',
    label: 'Trail Runner',
    type: 'Final Product',
    status: 'Verified',
    icon: 'PR',
    children: [
      {
        id: 'upper',
        label: 'Upper',
        type: 'Assembly',
        status: 'Verified',
        icon: 'UP',
        children: [
          {
            id: 'mesh',
            label: 'Recycled Polyester Mesh',
            type: 'Material',
            status: 'Verified',
            icon: 'ME',
          },
          {
            id: 'cotton-lining',
            label: 'Cotton Lining',
            type: 'Material',
            status: 'Pending',
            icon: 'CL',
          },
        ],
      },
      {
        id: 'midsole',
        label: 'Midsole',
        type: 'Assembly',
        status: 'In Transit',
        icon: 'MI',
        children: [
          {
            id: 'eva-foam',
            label: 'EVA Foam',
            type: 'Material',
            status: 'In Transit',
            icon: 'EV',
          },
        ],
      },
      {
        id: 'outsole',
        label: 'Outsole',
        type: 'Assembly',
        status: 'Verified',
        icon: 'OU',
        children: [
          {
            id: 'recycled-rubber',
            label: 'Recycled Rubber',
            type: 'Material',
            status: 'Verified',
            icon: 'RR',
          },
        ],
      },
      {
        id: 'laces',
        label: 'Laces',
        type: 'Assembly',
        status: 'Verified',
        icon: 'LA',
        children: [
          {
            id: 'recycled-polyester',
            label: 'Recycled Polyester',
            type: 'Material',
            status: 'Verified',
            icon: 'RP',
          },
        ],
      },
    ],
  },
]

const nodeDetails = {
  'trail-runner': {
    supplier: 'Global Footwear Assembly Co.',
    country: 'Vietnam',
    facility: 'Ho Chi Minh Final Assembly',
    status: 'Verified',
    latestBatch: { id: '#BT-774-VX-2024', quantity: '10,000 units' },
    previousBatches: [
      { id: '#BT-773-VX-2024', quantity: '9,500 units' },
      { id: '#BT-772-VX-2024', quantity: '10,200 units' },
    ],
    shipment: {
      received: '10,000 units',
      inventory: '2,000 units',
      shipped: '8,000 units',
      destination: 'Global Distribution Center',
      number: 'SHP-TR-001',
      status: 'Delivered',
    },
    evidence: [
      { label: 'Final assembly certificate', source: 'Vietnam QA Desk', date: 'Jun 01' },
      { label: 'Product bill of materials lock', source: 'TraceGraph Ledger', date: 'May 29' },
      { label: 'Export packing validation', source: 'Port Authority', date: 'Jun 03' },
    ],
    journeySteps: [
      { label: 'Sourcing', date: 'May 10', status: 'Complete' },
      { label: 'Processing', date: 'May 15', status: 'Complete' },
      { label: 'Assembly', date: 'May 28', status: 'Complete' },
      { label: 'QA Lock', date: 'Jun 01', status: 'Complete' },
      { label: 'Released', date: 'Jun 03', status: 'Current' },
    ],
  },
  upper: {
    supplier: 'KnitTech Materials Ltd.',
    country: 'Taiwan',
    facility: 'Taichung Knit Line 4',
    status: 'Verified',
    latestBatch: { id: '#UP-112-90', quantity: '5,000 units' },
    previousBatches: [{ id: '#UP-112-89', quantity: '4,800 units' }],
    shipment: {
      received: '5,000 units',
      inventory: '1,000 units',
      shipped: '4,000 units',
      destination: 'Vietnam Assembly',
      number: 'SHP-UP-092',
      status: 'Delivered',
    },
    evidence: [
      { label: 'Assembly origin declaration', source: 'KnitTech Materials', date: 'May 21' },
      { label: 'Thread lot reconciliation', source: 'EcoThread Taiwan', date: 'May 20' },
      { label: 'Inbound inspection note', source: 'Vietnam QA Desk', date: 'May 24' },
    ],
    journeySteps: [
      { label: 'Material Match', date: 'May 18', status: 'Complete' },
      { label: 'Knitting', date: 'May 20', status: 'Complete' },
      { label: 'Cutting', date: 'May 22', status: 'Complete' },
      { label: 'Packed', date: 'May 23', status: 'Complete' },
      { label: 'Received', date: 'May 24', status: 'Current' },
    ],
  },
  mesh: {
    supplier: 'EcoThread Taiwan',
    country: 'Taiwan',
    facility: 'Tainan Fiber Recovery Unit',
    status: 'Verified',
    latestBatch: { id: '#RP-2024-08', quantity: '5,000 units' },
    previousBatches: [
      { id: '#RP-2024-07', quantity: '4,800 units' },
      { id: '#RP-2024-06', quantity: '5,200 units' },
    ],
    shipment: {
      received: '5,000 units',
      inventory: '1,200 units',
      shipped: '3,800 units',
      destination: 'Ho Chi Minh City, VN',
      number: 'SHP-992384-VX',
      status: 'Delivered',
    },
    evidence: [
      { label: 'GRS recycled content certificate', source: 'Control Union', date: 'May 12' },
      { label: 'Fiber bale mass-balance record', source: 'EcoThread Taiwan', date: 'May 14' },
      { label: 'Dye house wastewater test', source: 'Tainan Lab', date: 'May 16' },
      { label: 'Shipment seal photograph', source: 'Port Klang Hub', date: 'May 19' },
    ],
    journeySteps: [
      { label: 'Recovered', date: 'May 10', status: 'Complete' },
      { label: 'Processed', date: 'May 14', status: 'Complete' },
      { label: 'Spun', date: 'May 17', status: 'Complete' },
      { label: 'Woven', date: 'May 19', status: 'Complete' },
      { label: 'Released', date: 'May 20', status: 'Current' },
    ],
  },
  'cotton-lining': {
    supplier: 'Riverbend Cotton Cooperative',
    country: 'India',
    facility: 'Gujarat Finishing Mill',
    status: 'Pending',
    latestBatch: { id: '#CT-441-19', quantity: '4,900 units' },
    previousBatches: [{ id: '#CT-441-18', quantity: '5,100 units' }],
    shipment: {
      received: '4,900 units',
      inventory: '4,900 units',
      shipped: '0 units',
      destination: 'Taiwan Knitting',
      number: 'SHP-CT-447',
      status: 'Pending',
    },
    evidence: [
      { label: 'Organic cotton certificate', source: 'Supplier Upload', date: 'May 09' },
      { label: 'Pesticide residue panel', source: 'Awaiting lab review', date: 'Pending' },
    ],
    journeySteps: [
      { label: 'Harvested', date: 'May 02', status: 'Complete' },
      { label: 'Ginned', date: 'May 06', status: 'Complete' },
      { label: 'Finished', date: 'May 11', status: 'Complete' },
      { label: 'Audit', date: 'Open', status: 'Current' },
      { label: 'Release', date: 'Blocked', status: 'Pending' },
    ],
  },
  midsole: {
    supplier: 'FoamForm Indonesia',
    country: 'Indonesia',
    facility: 'Surabaya Compression Unit',
    status: 'In Transit',
    latestBatch: { id: '#MS-704-22', quantity: '5,000 pairs' },
    previousBatches: [{ id: '#MS-704-21', quantity: '5,000 pairs' }],
    shipment: {
      received: '5,000 pairs',
      inventory: '500 pairs',
      shipped: '4,500 pairs',
      destination: 'Vietnam Assembly',
      number: 'SHP-MS-884',
      status: 'In Transit',
    },
    evidence: [
      { label: 'EVA compound declaration', source: 'FoamForm Indonesia', date: 'May 18' },
      { label: 'Compression test results', source: 'Surabaya Lab', date: 'May 20' },
      { label: 'Container handoff scan', source: 'Jakarta Port', date: 'May 22' },
    ],
    journeySteps: [
      { label: 'Compounded', date: 'May 17', status: 'Complete' },
      { label: 'Molded', date: 'May 19', status: 'Complete' },
      { label: 'Tested', date: 'May 20', status: 'Complete' },
      { label: 'Dispatched', date: 'May 22', status: 'Complete' },
      { label: 'Arriving', date: 'Jun 04', status: 'Current' },
    ],
  },
  'eva-foam': {
    supplier: 'FoamForm Indonesia',
    country: 'Indonesia',
    facility: 'Surabaya Materials Bay',
    status: 'In Transit',
    latestBatch: { id: '#EV-55-902', quantity: '2,400 kg' },
    previousBatches: [],
    shipment: {
      received: '2,400 kg',
      inventory: '300 kg',
      shipped: '2,100 kg',
      destination: 'Surabaya Compression Unit',
      number: 'SHP-EV-902',
      status: 'In Transit',
    },
    evidence: [
      { label: 'Material safety declaration', source: 'FoamForm Indonesia', date: 'May 15' },
      { label: 'Compound recipe lock', source: 'TraceGraph Ledger', date: 'May 16' },
    ],
    journeySteps: [
      { label: 'Received', date: 'May 14', status: 'Complete' },
      { label: 'Blended', date: 'May 16', status: 'Complete' },
      { label: 'Released', date: 'May 17', status: 'Complete' },
      { label: 'Transferred', date: 'May 18', status: 'Current' },
      { label: 'Consumed', date: 'Open', status: 'Pending' },
    ],
  },
  outsole: {
    supplier: 'Duracraft Soles Inc.',
    country: 'Indonesia',
    facility: 'Bandung Sole Assembly',
    status: 'Verified',
    latestBatch: { id: '#SL-992-04', quantity: '5,000 pairs' },
    previousBatches: [{ id: '#SL-992-03', quantity: '4,800 pairs' }],
    shipment: {
      received: '5,000 pairs',
      inventory: '500 pairs',
      shipped: '4,500 pairs',
      destination: 'Vietnam Assembly',
      number: 'SHP-SL-881',
      status: 'Delivered',
    },
    evidence: [
      { label: 'Rubber source declaration', source: 'Duracraft Soles', date: 'May 12' },
      { label: 'Abrasion resistance test', source: 'Bandung Lab', date: 'May 18' },
      { label: 'Final packing scan', source: 'Jakarta Port', date: 'May 21' },
    ],
    journeySteps: [
      { label: 'Mixed', date: 'May 13', status: 'Complete' },
      { label: 'Pressed', date: 'May 16', status: 'Complete' },
      { label: 'Trimmed', date: 'May 17', status: 'Complete' },
      { label: 'Tested', date: 'May 18', status: 'Complete' },
      { label: 'Delivered', date: 'May 24', status: 'Current' },
    ],
  },
  'recycled-rubber': {
    supplier: 'SecondCycle Rubber',
    country: 'Malaysia',
    facility: 'Penang Granulate Center',
    status: 'Verified',
    latestBatch: { id: '#RB-88-117', quantity: '3,200 kg' },
    previousBatches: [{ id: '#RB-88-116', quantity: '3,000 kg' }],
    shipment: {
      received: '3,200 kg',
      inventory: '700 kg',
      shipped: '2,500 kg',
      destination: 'Bandung Sole Assembly',
      number: 'SHP-RB-117',
      status: 'Delivered',
    },
    evidence: [
      { label: 'Post-industrial rubber declaration', source: 'SecondCycle Rubber', date: 'May 08' },
      { label: 'Contaminant screen', source: 'Penang Lab', date: 'May 09' },
    ],
    journeySteps: [
      { label: 'Collected', date: 'May 04', status: 'Complete' },
      { label: 'Sorted', date: 'May 06', status: 'Complete' },
      { label: 'Granulated', date: 'May 08', status: 'Complete' },
      { label: 'Shipped', date: 'May 10', status: 'Complete' },
      { label: 'Accepted', date: 'May 13', status: 'Current' },
    ],
  },
  laces: {
    supplier: 'Global Textile Solutions',
    country: 'Thailand',
    facility: 'Rayong Narrow Weave Unit',
    status: 'Verified',
    latestBatch: { id: '#LC-002', quantity: '10,000 units' },
    previousBatches: [{ id: '#LC-001', quantity: '10,000 units' }],
    shipment: {
      received: '10,000 units',
      inventory: '2,000 units',
      shipped: '8,000 units',
      destination: 'Vietnam Assembly',
      number: 'SHP-LC-002',
      status: 'Delivered',
    },
    evidence: [
      { label: 'Narrow-weave production record', source: 'Global Textile Solutions', date: 'May 20' },
      { label: 'Tensile strength report', source: 'Rayong QA Lab', date: 'May 21' },
    ],
    journeySteps: [
      { label: 'Yarn In', date: 'May 16', status: 'Complete' },
      { label: 'Woven', date: 'May 20', status: 'Complete' },
      { label: 'Tipped', date: 'May 21', status: 'Complete' },
      { label: 'Packed', date: 'May 22', status: 'Complete' },
      { label: 'Delivered', date: 'May 26', status: 'Current' },
    ],
  },
  'recycled-polyester': {
    supplier: 'EcoThread Thailand',
    country: 'Thailand',
    facility: 'Chonburi Yarn Recovery',
    status: 'Verified',
    latestBatch: { id: '#PLY-784', quantity: '1,200 kg' },
    previousBatches: [],
    shipment: {
      received: '1,200 kg',
      inventory: '200 kg',
      shipped: '1,000 kg',
      destination: 'Rayong Narrow Weave Unit',
      number: 'SHP-PLY-784',
      status: 'Delivered',
    },
    evidence: [
      { label: 'Recycled content attestation', source: 'EcoThread Thailand', date: 'May 12' },
      { label: 'Lot-to-lace conversion record', source: 'TraceGraph Ledger', date: 'May 20' },
    ],
    journeySteps: [
      { label: 'Recovered', date: 'May 08', status: 'Complete' },
      { label: 'Extruded', date: 'May 11', status: 'Complete' },
      { label: 'Spun', date: 'May 13', status: 'Complete' },
      { label: 'Transferred', date: 'May 15', status: 'Complete' },
      { label: 'Consumed', date: 'May 20', status: 'Current' },
    ],
  },
}

const statusStyles = {
  Verified: {
    badge: 'bg-secondary-container text-secondary-on-fixed-variant ring-secondary-fixed-dim',
    indicator: 'bg-secondary text-white',
    panel: 'border-secondary',
  },
  'In Transit': {
    badge: 'bg-tertiary-fixed text-tertiary-on-fixed-variant ring-tertiary-fixed-dim',
    indicator: 'bg-primary-container text-white',
    panel: 'border-primary-container',
  },
  Pending: {
    badge: 'bg-amber-100 text-trace-amber ring-amber-200',
    indicator: 'bg-amber-500 text-white',
    panel: 'border-trace-amber',
  },
  Complete: {
    badge: 'bg-secondary-container text-secondary-on-fixed-variant ring-secondary-fixed-dim',
    indicator: 'bg-secondary text-white',
    panel: 'border-secondary',
  },
  Current: {
    badge: 'bg-primary-container text-white ring-primary-container',
    indicator: 'bg-primary-container text-white',
    panel: 'border-primary-container',
  },
}

const shipmentFields = [
  ['Quantity Received', 'received'],
  ['Quantity in Inventory', 'inventory'],
  ['Quantity Shipped', 'shipped'],
  ['Destination Warehouse', 'destination'],
  ['Shipment Number', 'number'],
  ['Delivery Status', 'status'],
]

function StatusBadge({ status }) {
  const style = statusStyles[status]?.badge ?? statusStyles.Pending.badge

  return (
    <span className={`inline-flex rounded-lg px-2.5 py-1 text-label-md uppercase ring-1 ${style}`}>
      {status}
    </span>
  )
}

function TreeNode({ node, depth = 0, selectedNodeId, onSelect }) {
  const hasChildren = Boolean(node.children?.length)
  const isSelected = selectedNodeId === node.id
  const rowStyle = isSelected
    ? 'border-l-4 border-primary bg-surface-container text-on-surface'
    : 'border-l-4 border-transparent text-on-surface-variant hover:bg-surface-container-low'

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(node.id)}
        className={`group flex min-h-12 w-full items-center gap-3 px-3 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-trace-navy focus:ring-inset ${rowStyle}`}
        style={{ paddingLeft: `${12 + depth * 28}px` }}
        aria-current={isSelected ? 'true' : undefined}
      >
        <span className="grid size-8 shrink-0 place-items-center rounded bg-surface-container-high text-[10px] font-bold text-on-surface">
          {node.icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-body-sm font-semibold text-on-surface">{node.label}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
              {node.type}
            </span>
            <StatusBadge status={node.status} />
          </span>
        </span>
        {hasChildren ? (
          <span className="text-body-sm font-bold text-outline transition group-hover:text-primary">+</span>
        ) : null}
      </button>

      {hasChildren ? (
        <ul className="relative border-l border-outline-variant/70">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedNodeId={selectedNodeId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

function ProductionJourney({ steps }) {
  return (
    <section className="border border-outline-variant bg-surface-container-lowest p-5">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-label-md uppercase text-on-surface-variant">Production Journey</p>
          <h2 className="text-headline-lg text-on-surface">Batch lifecycle</h2>
        </div>
        <p className="text-body-sm text-on-surface-variant">Milestones update from the selected node.</p>
      </div>

      <ol className="grid gap-4 md:grid-cols-5">
        {steps.map((step, index) => (
          <li key={`${step.label}-${step.date}`} className="relative">
            <div className="flex items-center gap-3 md:block">
              <div
                className={`grid size-9 shrink-0 place-items-center rounded-full text-body-sm font-bold ${
                  statusStyles[step.status]?.indicator ?? 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {index + 1}
              </div>
              <div className="min-w-0 md:mt-3">
                <p className="truncate text-body-sm font-bold text-on-surface">{step.label}</p>
                <p className="text-label-md uppercase text-on-surface-variant">{step.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ShipmentInformation({ shipment }) {
  return (
    <section className="border border-outline-variant bg-surface-container-lowest p-5">
      <div className="mb-4">
        <p className="text-label-md uppercase text-on-surface-variant">Shipment Information</p>
        <h2 className="text-headline-lg text-on-surface">Movement record</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {shipmentFields.map(([label, key]) => (
          <div key={key} className="min-w-0 border border-outline-variant bg-surface px-4 py-3">
            <p className="text-label-md uppercase text-on-surface-variant">{label}</p>
            <p className="mt-2 break-words text-table-data text-on-surface">{shipment[key]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function InspectorPanel({ selectedNode, details }) {
  const panelStyle = statusStyles[details.status]?.panel ?? statusStyles.Pending.panel

  return (
    <aside className="min-w-0 border border-outline-variant bg-surface-container-lowest lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
      <div className={`border-t-4 ${panelStyle} p-5 sm:p-6`}>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-label-md uppercase text-on-surface-variant">Inspector</p>
            <h2 className="mt-1 break-words text-headline-lg text-on-surface">{selectedNode.label}</h2>
            <p className="mt-1 text-body-sm text-on-surface-variant">{selectedNode.type}</p>
          </div>
          <StatusBadge status={details.status} />
        </div>

        <div className="mb-6 flex items-center gap-4 bg-surface-container p-4">
          <div
            className={`grid size-11 shrink-0 place-items-center rounded-full text-body-sm font-bold ${
              statusStyles[details.status]?.indicator ?? statusStyles.Pending.indicator
            }`}
          >
            {details.status === 'Verified' ? 'OK' : details.status === 'Pending' ? 'PD' : 'MV'}
          </div>
          <div>
            <p className="text-label-md uppercase text-on-surface-variant">Verification Status</p>
            <p className="text-body-sm font-bold text-on-surface">
              {details.status === 'Verified' ? 'Verified and active' : details.status}
            </p>
          </div>
        </div>

        <dl className="space-y-4">
          <DetailRow label="Supplier" value={details.supplier} />
          <DetailRow label="Country of Origin" value={details.country} />
          <DetailRow label="Facility" value={details.facility} />
          <div className="border-b border-outline-variant/60 pb-4">
            <dt className="text-label-md uppercase text-on-surface-variant">Latest Batch</dt>
            <dd className="mt-1 flex flex-wrap items-center justify-between gap-2 text-table-data text-on-surface">
              <span>{details.latestBatch.id}</span>
              <span className="text-on-surface-variant">{details.latestBatch.quantity}</span>
            </dd>
          </div>
          <div className="border-b border-outline-variant/60 pb-4">
            <dt className="text-label-md uppercase text-on-surface-variant">Previous Batches</dt>
            <dd className="mt-2 text-table-data text-on-surface">
              {details.previousBatches.length ? (
                <ul className="space-y-1">
                  {details.previousBatches.map((batch) => (
                    <li key={batch.id} className="flex flex-wrap justify-between gap-2">
                      <span>{batch.id}</span>
                      <span className="text-on-surface-variant">{batch.quantity}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-on-surface-variant">No previous batches recorded</span>
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <p className="mb-3 text-label-md uppercase text-on-surface-variant">Evidence Records</p>
          <ul className="space-y-3">
            {details.evidence.map((record) => (
              <li key={`${record.label}-${record.date}`} className="border border-outline-variant bg-surface px-4 py-3">
                <p className="text-body-sm font-bold text-on-surface">{record.label}</p>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  {record.source} / {record.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="border-b border-outline-variant/60 pb-4">
      <dt className="text-label-md uppercase text-on-surface-variant">{label}</dt>
      <dd className="mt-1 break-words text-table-data text-on-surface">{value}</dd>
    </div>
  )
}

function findNode(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) {
      return node
    }

    if (node.children) {
      const child = findNode(node.children, id)

      if (child) {
        return child
      }
    }
  }

  return null
}

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState('mesh')
  const selectedNode = findNode(traceNodes, selectedNodeId) ?? traceNodes[0]
  const selectedDetails = nodeDetails[selectedNode.id]

  return (
    <main className="min-h-screen bg-background text-background-foreground">
      <header className="sticky top-0 z-30 border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-margin-mobile py-4 sm:px-gutter lg:px-margin-desktop">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded bg-trace-navy text-body-md font-bold text-white">
              T
            </div>
            <div className="min-w-0">
              <p className="truncate text-body-sm font-semibold text-on-surface">TraceGraph</p>
              <p className="truncate text-label-md uppercase text-on-surface-variant">
                Trail Runner / Revision C
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {['QA', 'AL', 'US'].map((item) => (
              <button
                key={item}
                type="button"
                className="grid size-9 place-items-center rounded-full border border-outline-variant bg-surface-container-lowest text-[11px] font-bold text-on-surface-variant transition hover:bg-surface-container focus:outline-none focus:ring-2 focus:ring-trace-navy"
                aria-label={`${item} action`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-content gap-6 px-margin-mobile py-6 sm:px-gutter lg:grid-cols-[minmax(0,1fr)_380px] lg:px-margin-desktop">
        <div className="min-w-0 space-y-6">
          <section className="border border-outline-variant bg-surface-container-lowest">
            <div className="border-b border-outline-variant p-5">
              <p className="text-label-md uppercase text-secondary">Traceability Hierarchy</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="text-headline-xl text-on-surface">Trail Runner</h1>
                  <p className="mt-1 max-w-2xl text-body-sm text-on-surface-variant">
                    Select a component or material to inspect supplier, batch, shipment, and audit evidence.
                  </p>
                </div>
                <StatusBadge status="Verified" />
              </div>
            </div>

            <div className="grid gap-0 xl:grid-cols-[minmax(280px,420px)_1fr]">
              <nav className="border-b border-outline-variant xl:border-b-0 xl:border-r" aria-label="Product trace tree">
                <ul className="divide-y divide-outline-variant/70">
                  {traceNodes.map((node) => (
                    <TreeNode
                      key={node.id}
                      node={node}
                      selectedNodeId={selectedNodeId}
                      onSelect={setSelectedNodeId}
                    />
                  ))}
                </ul>
              </nav>

              <div className="min-w-0 bg-surface p-5">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-label-md uppercase text-on-surface-variant">Selected Scope</p>
                    <h2 className="text-headline-lg text-on-surface">{selectedNode.label}</h2>
                  </div>
                  <StatusBadge status={selectedDetails.status} />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="border border-outline-variant bg-surface-container-lowest px-4 py-3">
                    <p className="text-label-md uppercase text-on-surface-variant">Supplier</p>
                    <p className="mt-2 break-words text-body-sm font-semibold text-on-surface">
                      {selectedDetails.supplier}
                    </p>
                  </div>
                  <div className="border border-outline-variant bg-surface-container-lowest px-4 py-3">
                    <p className="text-label-md uppercase text-on-surface-variant">Latest Lot</p>
                    <p className="mt-2 break-words text-body-sm font-semibold text-on-surface">
                      {selectedDetails.latestBatch.id}
                    </p>
                  </div>
                  <div className="border border-outline-variant bg-surface-container-lowest px-4 py-3">
                    <p className="text-label-md uppercase text-on-surface-variant">Evidence</p>
                    <p className="mt-2 text-body-sm font-semibold text-on-surface">
                      {selectedDetails.evidence.length} records
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ProductionJourney steps={selectedDetails.journeySteps} />
          <ShipmentInformation shipment={selectedDetails.shipment} />
        </div>

        <InspectorPanel selectedNode={selectedNode} details={selectedDetails} />
      </div>
    </main>
  )
}

export default App
