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
        // Modern defense-tech palette
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          850: '#172033',
          900: '#0f172a',
          950: '#020617',
        },
        'navy': {
          50: '#e6f1ff',
          100: '#b3d4ff',
          200: '#80b8ff',
          300: '#4d9bff',
          400: '#1a7eff',
          500: '#0066e6',
          600: '#0052b3',
          700: '#003d80',
          800: '#00294d',
          900: '#00141a',
          950: '#000a0d',
        },
        'accent': {
          'blue': '#0066e6',      // Primary accent (Palantir-inspired)
          'green': '#10b981',     // Success/active (Anduril-inspired)
          'gray': '#6b7280',      // Muted text
          'light': '#f3f4f6',     // Light backgrounds
        },
        'status': {
          'active': '#10b981',
          'pending': '#6b7280',
          'archived': '#374151',
        },
        'tactical': {
          'green': '#00ff41',      // Radar green
          'blue': '#00d4ff',       // Satellite blue  
          'red': '#ff0040',        // Thermal red
          'yellow': '#ffb800',     // Warning yellow
          'cyan': '#00ffcc',       // System cyan
          'orange': '#ff6a00',     // Thermal orange (hot zones)
          'cold-blue': '#00e0ff',  // Cold blue (inactive modules)
          'muted-red': '#cc3333',  // Muted red (offline/fail states)
        },
        'grid': {
          'lines': 'rgba(0, 255, 65, 0.1)',
          'glow': 'rgba(0, 255, 65, 0.3)',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'panel': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'tactical': '0 0 20px rgba(0, 255, 65, 0.5)',
        'tactical-lg': '0 0 40px rgba(0, 255, 65, 0.5)',
        'terminal': 'inset 0 0 20px rgba(0, 212, 255, 0.1)',
      },
    },
  },
  plugins: [],
} 