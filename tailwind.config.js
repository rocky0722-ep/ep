/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#07090c',
          900: '#0d1117', // Primary matte carbon background
          850: '#111620',
          800: '#161b22', // Card / frosted surface
          700: '#21262d',
          600: '#30363d',
        },
        cyber: {
          emerald: '#10b981',
          lime: '#a3e635',
          neon: '#00ff9d',
          glow: 'rgba(16, 185, 129, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.4), 0 0 10px -5px rgba(163, 230, 53, 0.3)',
        'emerald-glow-lg': '0 0 45px -5px rgba(16, 185, 129, 0.55), 0 0 20px -5px rgba(163, 230, 53, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(16, 185, 129, 0.15)',
      },
      animation: {
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2.2)',
            opacity: '0',
          },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}

