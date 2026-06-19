import { useEffect, useMemo, useState } from 'react'

const traceNodes = [
  {
    id: 'trail-runner',
    label: 'Trail Runner',
    type: 'Final Product',
    status: 'Verified',
    icon: 'product',
    children: [
      {
        id: 'upper',
        label: 'Upper',
        type: 'Assembly',
        status: 'Verified',
        icon: 'assembly',
        children: [
          {
            id: 'mesh',
            label: 'Recycled Polyester Mesh',
            type: 'Material',
            status: 'Verified',
            icon: 'material',
          },
          {
            id: 'cotton-lining',
            label: 'Cotton Lining',
            type: 'Material',
            status: 'Pending',
            icon: 'material',
          },
        ],
      },
      {
        id: 'midsole',
        label: 'Midsole',
        type: 'Assembly',
        status: 'In Transit',
        icon: 'assembly',
        children: [
          {
            id: 'eva-foam',
            label: 'EVA Foam',
            type: 'Material',
            status: 'In Transit',
            icon: 'material',
          },
        ],
      },
      {
        id: 'outsole',
        label: 'Outsole',
        type: 'Assembly',
        status: 'Verified',
        icon: 'assembly',
        children: [
          {
            id: 'recycled-rubber',
            label: 'Recycled Rubber',
            type: 'Material',
            status: 'Verified',
            icon: 'material',
          },
        ],
      },
      {
        id: 'laces',
        label: 'Laces',
        type: 'Assembly',
        status: 'Verified',
        icon: 'assembly',
        children: [
          {
            id: 'recycled-polyester',
            label: 'Recycled Polyester',
            type: 'Material',
            status: 'Verified',
            icon: 'material',
          },
        ],
      },
    ],
  },
]

const qualityIssueScenario = {
  sourceNodeId: 'mesh',
  reportedBatchId: '#RP-2024-08',
  title: 'Material discoloration reported',
  severity: 'Quality hold',
  reportedBy: 'Vietnam QA Desk',
  reportedOn: 'Jun 04',
  impactCountLabel: '3 affected records',
  summary:
    'A shade variation was found during upper inspection. TraceGraph links the material lot to every downstream part and process currently exposed to the issue.',
  containmentAction:
    'Hold open inventory, block final release for affected Trail Runner units, and inspect upper assemblies produced from lot #RP-2024-08.',
  impactedNodeIds: ['mesh', 'upper', 'trail-runner'],
}

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
  'Quality hold': {
    indicator: 'bg-trace-amber text-white',
    panel: 'border-trace-amber',
  },
  Verified: {
    indicator: 'bg-secondary text-white',
    panel: 'border-secondary',
  },
  'In Transit': {
    indicator: 'bg-primary-container text-white',
    panel: 'border-primary-container',
  },
  Pending: {
    indicator: 'bg-amber-500 text-white',
    panel: 'border-trace-amber',
  },
  Complete: {
    indicator: 'bg-secondary text-white',
    panel: 'border-secondary',
  },
  Current: {
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

function WarningIcon({ className = 'size-4' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.5 21 20H3L12 4.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M12 9v5M12 17h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

function TreeIcon({ type }) {
  if (type === 'product') {
    return (
      <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
        <path d="M6 8.5 12 5l6 3.5v7L12 19l-6-3.5v-7Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m6.5 9 5.5 3 5.5-3M12 12v6.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  if (type === 'assembly') {
    return (
      <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
        <path d="M7 7h10v10H7V7Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 10h3M17 10h3M4 14h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M12 5c3.2 2.2 5 4.8 5 7.5A5 5 0 0 1 7 12.5C7 9.8 8.8 7.2 12 5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 14c1.7-.3 3.1-1.2 4-2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function TreeNode({
  node,
  depth = 0,
  selectedNodeId,
  expandedNodeIds,
  impactedNodeIds,
  issueSourceNodeId,
  onSelect,
  onToggleExpanded,
}) {
  const hasChildren = Boolean(node.children?.length)
  const isSelected = selectedNodeId === node.id
  const isExpanded = expandedNodeIds.includes(node.id)
  const isImpacted = impactedNodeIds.includes(node.id)
  const isIssueSource = issueSourceNodeId === node.id
  const rowStyle = isSelected
    ? 'border-l-4 border-secondary bg-secondary-container/35 text-on-surface'
    : isImpacted
      ? 'border-l-4 border-trace-amber bg-amber-50 text-on-surface'
    : 'border-l-4 border-transparent text-on-surface-variant hover:bg-surface-container-low'

  return (
    <li>
      <div
        data-quality-impact={isImpacted ? 'true' : undefined}
        className={`group flex min-h-12 w-full items-center gap-3 px-3 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-trace-navy focus:ring-inset ${rowStyle}`}
        style={{ paddingLeft: `${12 + depth * 28}px` }}
      >
        <span className="grid size-8 shrink-0 place-items-center rounded bg-surface-container-high text-on-surface">
          <TreeIcon type={node.icon} />
        </span>
        <button
          type="button"
          onClick={() => onSelect(node.id)}
          className="min-w-0 flex-1 text-left focus:outline-none"
          aria-current={isSelected ? 'true' : undefined}
        >
          <span className="block truncate text-body-sm font-semibold text-on-surface">{node.label}</span>
          <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
            {isIssueSource ? 'Issue source' : isImpacted ? 'Affected downstream' : node.type}
          </span>
        </button>
        {isImpacted ? (
          <span
            className="grid size-8 shrink-0 place-items-center rounded border border-amber-300 bg-amber-100 text-trace-amber"
            aria-label={`${node.label} affected by quality issue`}
            title={`${node.label} affected by quality issue`}
          >
            <WarningIcon />
          </span>
        ) : null}
        {hasChildren ? (
          <button
            type="button"
            onClick={() => onToggleExpanded(node.id)}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${node.label}`}
            className="grid size-8 shrink-0 place-items-center rounded border border-outline-variant bg-surface-container-lowest text-body-sm font-bold text-on-surface-variant transition hover:border-trace-navy hover:bg-surface-container hover:text-trace-navy focus:outline-none focus:ring-2 focus:ring-trace-navy"
          >
            {isExpanded ? '-' : '+'}
          </button>
        ) : null}
      </div>

      {hasChildren && isExpanded ? (
        <ul className="relative border-l border-outline-variant/70">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedNodeId={selectedNodeId}
              expandedNodeIds={expandedNodeIds}
              impactedNodeIds={impactedNodeIds}
              issueSourceNodeId={issueSourceNodeId}
              onSelect={onSelect}
              onToggleExpanded={onToggleExpanded}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

function ImpactAnalysis({ scenario, affectedNodes, onTraceIssuePath }) {
  return (
    <section className="border border-trace-amber bg-surface-container-lowest">
      <div className="border-b border-outline-variant p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="text-label-md uppercase text-trace-amber">Impact Analysis</p>
            <h2 className="mt-1 text-headline-lg text-on-surface">{scenario.title}</h2>
            <p className="mt-2 max-w-3xl text-body-sm text-on-surface-variant">{scenario.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-lg bg-amber-100 px-2.5 py-1 text-label-md uppercase text-trace-amber ring-1 ring-amber-200">
                {scenario.impactCountLabel}
              </span>
              <span className="rounded-lg bg-surface-container px-2.5 py-1 text-label-md uppercase text-on-surface-variant ring-1 ring-outline-variant">
                {scenario.reportedBatchId}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onTraceIssuePath}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded bg-trace-navy px-4 py-2 text-body-sm font-semibold text-white transition hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-trace-navy/30"
          >
            <WarningIcon />
            Report quality issue
          </button>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.7fr)]">
        <div className="border-b border-outline-variant p-5 md:border-b-0 md:border-r">
          <p className="text-label-md uppercase text-on-surface-variant">Trace path</p>
          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {affectedNodes.map((node, index) => (
              <div key={node.id} className="flex min-w-0 flex-1 items-center gap-3">
                <div className="min-w-0 flex-1 border border-outline-variant bg-surface px-4 py-3">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="grid size-7 shrink-0 place-items-center rounded bg-amber-100 text-trace-amber">
                      <WarningIcon />
                    </span>
                    <span className="text-label-md uppercase text-on-surface-variant">
                      {index === 0 ? 'Issue source' : 'Affected downstream'}
                    </span>
                  </div>
                  <p className="truncate text-table-data text-on-surface">{node.label}</p>
                  <p className="mt-1 text-label-md uppercase text-on-surface-variant">{node.type}</p>
                </div>
                {index < affectedNodes.length - 1 ? (
                  <span className="hidden text-body-sm font-bold text-outline lg:block" aria-hidden="true">
                    -&gt;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="p-5">
          <p className="text-label-md uppercase text-on-surface-variant">Containment action</p>
          <p className="mt-2 text-body-sm font-semibold text-on-surface">{scenario.containmentAction}</p>
          <div className="mt-4 border border-outline-variant bg-surface px-4 py-3">
            <p className="text-label-md uppercase text-on-surface-variant">Reported by</p>
            <p className="mt-1 text-table-data text-on-surface">
              {scenario.reportedBy} / {scenario.reportedOn}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function LifecycleConnector({ isLast }) {
  if (isLast) {
    return null
  }

  return (
    <>
      <div data-lifecycle-connector="line" aria-hidden="true" className="absolute left-[18px] top-9 h-4 w-px bg-outline-variant md:left-12 md:right-4 md:top-[18px] md:h-px md:w-auto" />
      <div data-lifecycle-connector="arrow" aria-hidden="true" className="absolute left-[14px] top-[49px] size-2 rotate-45 border-r border-t border-outline-variant md:left-auto md:right-4 md:top-[14px]" />
    </>
  )
}

function BatchDetails({ batches, selectedBatchId, onBatchChange }) {
  const selectedBatch = batches.find((batch) => batch.id === selectedBatchId) ?? batches[0]

  return (
    <section className="border border-outline-variant bg-surface-container-lowest p-5">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-label-md uppercase text-on-surface-variant">Batch Details</p>
          <h2 className="text-headline-lg text-on-surface">Production and movement</h2>
          <p className="mt-1 text-body-sm text-on-surface-variant">
            Select a batch to update lifecycle and shipment information.
          </p>
        </div>
        <label className="min-w-0 sm:w-64">
          <span className="mb-2 block text-label-md uppercase text-on-surface-variant">Select Batch</span>
          <select
            value={selectedBatch.id}
            onChange={(event) => onBatchChange(event.target.value)}
            className="w-full rounded border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-sm font-semibold text-on-surface focus:border-trace-navy focus:outline-none focus:ring-2 focus:ring-trace-navy/20"
          >
            {batches.map((batch) => (
              <option key={batch.id} value={batch.id}>
                {batch.id}
                {batch.isLatest ? ' (latest)' : ''}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="border border-outline-variant bg-surface px-4 py-3">
          <p className="text-label-md uppercase text-on-surface-variant">Batch Quantity</p>
          <p className="mt-2 break-words text-table-data text-on-surface">{selectedBatch.quantity}</p>
        </div>
        <div className="border border-outline-variant bg-surface px-4 py-3">
          <p className="text-label-md uppercase text-on-surface-variant">Movement Status</p>
          <p className="mt-2 text-table-data text-on-surface">{selectedBatch.shipment.status}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-label-md uppercase text-on-surface-variant">Production Journey</p>
            <h3 className="text-headline-lg text-on-surface">Batch lifecycle</h3>
          </div>
          <p className="text-body-sm text-on-surface-variant">{selectedBatch.id}</p>
        </div>

        <ol className="grid gap-4 md:grid-cols-5">
          {selectedBatch.journeySteps.map((step, index) => (
            <li key={`${selectedBatch.id}-${step.label}-${step.date}`} className="relative">
              <LifecycleConnector isLast={index === selectedBatch.journeySteps.length - 1} />
              <div className="flex items-center gap-3 md:block">
                <div
                  className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-full text-body-sm font-bold ${
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
      </div>

      <div>
        <p className="text-label-md uppercase text-on-surface-variant">Shipment Information</p>
        <h3 className="text-headline-lg text-on-surface">Movement record</h3>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {shipmentFields.map(([label, key]) => (
          <div key={key} className="min-w-0 border border-outline-variant bg-surface px-4 py-3">
            <p className="text-label-md uppercase text-on-surface-variant">{label}</p>
            <p className="mt-2 break-words text-table-data text-on-surface">{selectedBatch.shipment[key]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function InspectorPanel({ selectedNode, details, activeIssue }) {
  const issueTouchesNode = activeIssue?.impactedNodeIds.includes(selectedNode.id)
  const displayStatus = issueTouchesNode ? activeIssue.severity : details.status
  const panelStyle = statusStyles[displayStatus]?.panel ?? statusStyles.Pending.panel

  return (
    <aside className="min-w-0 border border-outline-variant bg-surface-container-lowest lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
      <div className={`border-t-4 ${panelStyle} p-5 sm:p-6`}>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-label-md uppercase text-on-surface-variant">Inspector</p>
            <h2 className="mt-1 break-words text-headline-lg text-on-surface">{selectedNode.label}</h2>
            <p className="mt-1 text-body-sm text-on-surface-variant">{selectedNode.type}</p>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-4 bg-surface-container p-4">
          <div
            className={`grid size-11 shrink-0 place-items-center rounded-full text-body-sm font-bold ${
              statusStyles[displayStatus]?.indicator ?? statusStyles.Pending.indicator
            }`}
          >
            {issueTouchesNode ? <WarningIcon /> : details.status === 'Verified' ? 'OK' : details.status === 'Pending' ? 'PD' : 'MV'}
          </div>
          <div>
            <p className="text-label-md uppercase text-on-surface-variant">Verification Status</p>
            <p className="text-body-sm font-bold text-on-surface">
              {issueTouchesNode ? activeIssue.severity : details.status === 'Verified' ? 'Verified and active' : details.status}
            </p>
          </div>
        </div>

        {issueTouchesNode ? (
          <div className="mb-6 border border-trace-amber bg-amber-50 p-4">
            <p className="text-label-md uppercase text-trace-amber">Quality issue linked</p>
            <p className="mt-2 text-body-sm font-semibold text-on-surface">{activeIssue.title}</p>
            <p className="mt-1 text-body-sm text-on-surface-variant">{activeIssue.containmentAction}</p>
          </div>
        ) : null}

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

function findPathToNode(nodes, id, path = []) {
  for (const node of nodes) {
    const nextPath = [...path, node]

    if (node.id === id) {
      return nextPath
    }

    if (node.children) {
      const childPath = findPathToNode(node.children, id, nextPath)

      if (childPath.length) {
        return childPath
      }
    }
  }

  return []
}

function createBatchOptions(details) {
  const latestBatch = {
    ...details.latestBatch,
    isLatest: true,
    shipment: details.shipment,
    journeySteps: details.journeySteps,
  }

  const previousBatches = details.previousBatches.map((batch, index) => ({
    ...batch,
    isLatest: false,
    shipment: createHistoricalShipment(details.shipment, batch, index),
    journeySteps: createHistoricalJourney(details.journeySteps, index),
  }))

  return [latestBatch, ...previousBatches]
}

function createHistoricalShipment(shipment, batch, index) {
  return {
    ...shipment,
    received: batch.quantity,
    inventory: index === 0 ? '0 units' : '-',
    shipped: batch.quantity,
    number: `${shipment.number}-P${index + 1}`,
    status: 'Archived',
  }
}

function createHistoricalJourney(steps, index) {
  return steps.map((step, stepIndex) => ({
    ...step,
    status: 'Complete',
    date: index === 0 ? step.date : stepIndex === steps.length - 1 ? 'Archived' : step.date,
  }))
}

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState('mesh')
  const [expandedNodeIds, setExpandedNodeIds] = useState(['trail-runner', 'upper', 'midsole', 'outsole', 'laces'])
  const [activeIssueId, setActiveIssueId] = useState(qualityIssueScenario.sourceNodeId)
  const selectedNode = findNode(traceNodes, selectedNodeId) ?? traceNodes[0]
  const selectedDetails = nodeDetails[selectedNode.id]
  const batchOptions = useMemo(() => createBatchOptions(selectedDetails), [selectedDetails])
  const activeIssue = activeIssueId ? qualityIssueScenario : null
  const traceIssuePath = useMemo(
    () => findPathToNode(traceNodes, qualityIssueScenario.sourceNodeId),
    [],
  )
  const affectedNodes = traceIssuePath.toReversed()
  const impactedNodeIds = activeIssue?.impactedNodeIds ?? []
  const [selectedBatchId, setSelectedBatchId] = useState(batchOptions[0].id)

  useEffect(() => {
    setSelectedBatchId(batchOptions[0].id)
  }, [batchOptions])

  function toggleNodeExpanded(nodeId) {
    setExpandedNodeIds((currentNodeIds) =>
      currentNodeIds.includes(nodeId)
        ? currentNodeIds.filter((currentNodeId) => currentNodeId !== nodeId)
        : [...currentNodeIds, nodeId],
    )
  }

  function traceIssuePathToSource() {
    setActiveIssueId(qualityIssueScenario.sourceNodeId)
    setSelectedNodeId(qualityIssueScenario.sourceNodeId)
    setExpandedNodeIds((currentNodeIds) => {
      const pathNodeIds = traceIssuePath
        .filter((node) => node.children?.length)
        .map((node) => node.id)

      return Array.from(new Set([...currentNodeIds, ...pathNodeIds]))
    })
  }

  return (
    <main className="min-h-screen bg-background text-background-foreground">
      <header className="sticky top-0 z-30 border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center gap-4 px-margin-mobile py-4 sm:px-gutter lg:px-margin-desktop">
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
        </div>
      </header>

      <div className="mx-auto grid max-w-content gap-6 px-margin-mobile py-6 sm:px-gutter lg:grid-cols-[minmax(0,1fr)_380px] lg:px-margin-desktop">
        <div className="min-w-0 space-y-6">
          <section className="border border-outline-variant bg-surface-container-lowest">
            <div className="border-b border-outline-variant p-5">
              <p className="text-label-md uppercase text-secondary">Traceability Hierarchy</p>
              <div className="mt-2">
                <div>
                  <h1 className="text-headline-xl text-on-surface">Trail Runner</h1>
                  <p className="mt-1 max-w-2xl text-body-sm text-on-surface-variant">
                    Select a component or material to inspect supplier, batch, shipment, and audit evidence.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <nav aria-label="Product trace tree">
                <ul className="divide-y divide-outline-variant/70">
                  {traceNodes.map((node) => (
                    <TreeNode
                      key={node.id}
                      node={node}
                      selectedNodeId={selectedNodeId}
                      expandedNodeIds={expandedNodeIds}
                      impactedNodeIds={impactedNodeIds}
                      issueSourceNodeId={qualityIssueScenario.sourceNodeId}
                      onSelect={setSelectedNodeId}
                      onToggleExpanded={toggleNodeExpanded}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </section>

          {activeIssue ? (
            <ImpactAnalysis
              scenario={activeIssue}
              affectedNodes={affectedNodes}
              onTraceIssuePath={traceIssuePathToSource}
            />
          ) : null}

          <BatchDetails
            batches={batchOptions}
            selectedBatchId={selectedBatchId}
            onBatchChange={setSelectedBatchId}
          />
        </div>

        <InspectorPanel selectedNode={selectedNode} details={selectedDetails} activeIssue={activeIssue} />
      </div>
    </main>
  )
}

export default App
