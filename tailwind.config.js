/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#f7f9fb',
          dim: '#d8dadc',
          bright: '#f7f9fb',
          variant: '#e0e3e5',
          tint: '#565e74',
          inverse: '#2d3133',
          container: {
            lowest: '#ffffff',
            low: '#f2f4f6',
            DEFAULT: '#eceef0',
            high: '#e6e8ea',
            highest: '#e0e3e5',
          },
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#45464d',
          inverse: '#eff1f3',
        },
        outline: {
          DEFAULT: '#76777d',
          variant: '#c6c6cd',
        },
        primary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
          container: '#131b2e',
          'on-container': '#7c839b',
          inverse: '#bec6e0',
          fixed: '#dae2fd',
          'fixed-dim': '#bec6e0',
          'on-fixed': '#131b2e',
          'on-fixed-variant': '#3f465c',
        },
        secondary: {
          DEFAULT: '#1f6c3a',
          foreground: '#ffffff',
          container: '#a4f1b2',
          'on-container': '#24703e',
          fixed: '#a6f4b5',
          'fixed-dim': '#8bd79b',
          'on-fixed': '#00210b',
          'on-fixed-variant': '#005226',
        },
        tertiary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
          container: '#0b1c30',
          'on-container': '#75859d',
          fixed: '#d3e4fe',
          'fixed-dim': '#b7c8e1',
          'on-fixed': '#0b1c30',
          'on-fixed-variant': '#38485d',
        },
        error: {
          DEFAULT: '#ba1a1a',
          foreground: '#ffffff',
          container: '#ffdad6',
          'on-container': '#93000a',
        },
        background: {
          DEFAULT: '#f7f9fb',
          foreground: '#191c1e',
        },
        trace: {
          navy: '#0F172A',
          forest: '#166534',
          slate: '#64748B',
          amber: '#B45309',
          crimson: '#991B1B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['36px', { lineHeight: '44px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline-lg': ['24px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.05em' }],
        'table-data': ['14px', { lineHeight: '20px', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      spacing: {
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '48px',
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        ambient: '0px 4px 20px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
