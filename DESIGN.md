---
name: Traceability Core
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#1f6c3a'
  on-secondary: '#ffffff'
  secondary-container: '#a4f1b2'
  on-secondary-container: '#24703e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#a6f4b5'
  secondary-fixed-dim: '#8bd79b'
  on-secondary-fixed: '#00210b'
  on-secondary-fixed-variant: '#005226'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  table-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1440px
---

## Brand & Style

The design system is engineered to project absolute transparency and industrial-grade reliability. Targeted at supply chain managers, auditors, and conscious consumers, the visual language prioritizes data integrity and professional rigor.

The aesthetic follows a **Corporate / Modern** approach with a lean toward **Minimalism**. It avoids unnecessary ornamentation, focusing instead on clarity and the structural hierarchy of information. The emotional response is one of "verified truth"—a sophisticated, calm environment where complex data becomes actionable insight. Every pixel is intentional, reinforcing the product's role as a source of record for global sustainability and origin.

## Colors

The palette is anchored by **Deep Navy** (#0F172A), used for primary navigation and high-level headers to establish authority. **Forest Green** (#166534) is utilized strategically as the "Verification Color," signifying successful audits, sustainable origins, and positive status updates.

**Slate Gray** (#64748B) manages the secondary information layer, such as supporting text and inactive states. The background relies on a cool **Neutral White** (#F8FAFC) to maintain a clean, laboratory-like environment for data analysis. Semantic colors for warnings (Amber) and errors (Crimson) should be desaturated to maintain the professional tone.

## Typography

The design system utilizes **Inter** exclusively to leverage its exceptional legibility and systematic feel. The type scale is tight and disciplined.

- **Headlines:** Use Bold and Semi-Bold weights with slight negative letter-spacing to create a "locked-in" professional look.
- **Body:** Regular weight is standard for readability. Data-heavy views should utilize `body-sm` to maximize information density without sacrificing clarity.
- **Labels:** Small caps or all-caps with increased letter-spacing are used for metadata, status badges, and table headers to distinguish them clearly from interactive data.
- **Numeric Data:** Ensure the use of tabular lining figures so that columns of numbers align perfectly in traceability reports and ledger views.

## Layout & Spacing

The layout utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The rhythm is based on a 4px baseline shift, ensuring consistent alignment of all UI elements.

- **Desktop:** The 12-column grid uses 24px gutters. Content is centered with a max-width of 1440px to prevent excessive line lengths in data reports.
- **Tables:** Hierarchical tables should use a "zebra-stripe" or subtle border-bottom approach (1px Slate 100) to maintain horizontal scanning.
- **Density:** Provide two density modes: "Standard" for general browsing and "Compact" for technical auditing where vertical screen real estate is at a premium.

## Elevation & Depth

To maintain a "trustworthy and grounded" feel, the design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Neutral White (#F8FAFC).
- **Level 1 (Cards/Tables):** Pure White (#FFFFFF) with a 1px border in Slate 200. No shadow.
- **Level 2 (Dropdowns/Modals):** Pure White (#FFFFFF) with a thin 1px border and a very soft, highly diffused ambient shadow (0px 4px 20px rgba(15, 23, 42, 0.08)).
- **Interactive State:** Hovering over a data card or table row should trigger a subtle shift in background color to Slate 50 rather than an elevation change.

## Shapes

The shape language is **Soft** (0.25rem), reflecting precision and engineering.

- **Primary Elements:** Buttons and Input fields use a 4px corner radius. This conveys a modern feel while remaining more serious than fully rounded alternatives.
- **Status Badges:** Use a slightly higher radius (rounded-lg) to distinguish these functional "chips" from structural layout elements.
- **Data Visualizations:** Bar charts and progress indicators should have flat ends or minimal rounding to maintain the "data-driven" technical aesthetic.

## Components

### Interactive Data Cards

Cards represent batch records or product origins. They feature a white background, Slate 200 border, and a "Forest Green" accent bar on the left edge if the item is "Verified."

### Status Badges

Small, high-contrast labels for "In Transit," "Verified," or "Pending." Use Forest Green for positive states, Slate Gray for neutral, and Deep Navy for finalized/archived states. Badges use `label-md` typography.

### Hierarchical Tables

The core of the traceability tool. Features include:

- **Sticky Headers:** Always visible during scroll.
- **Inline Status:** Verification icons (Forest Green checkmarks) appearing next to ID numbers.
- **Expandable Rows:** Subtle chevron icons for revealing sub-batch details.

### Buttons

- **Primary:** Deep Navy background with White text. Sharp, high-contrast.
- **Secondary:** Transparent background with Slate 200 border.
- **Actionable Icons:** Use 20px stroke-based icons with a 2px weight for consistency with the Inter typeface.

### Input Fields

Focus states switch from a Slate 200 border to a 2px Deep Navy border. Use "Inter" for all user-entered text to ensure serial numbers and batch codes are highly legible.
