import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0F',
          surface: '#14141C',
          elevated: '#1B1B26',
        },
        ember: {
          DEFAULT: '#FF6A3D',
          soft: '#FF8A5E',
          dim: '#7A3620',
        },
        electric: {
          DEFAULT: '#5B8CFF',
          soft: '#7FA3FF',
          dim: '#28407A',
        },
        gold: '#F0B429',
        text: {
          primary: '#F5F5F7',
          secondary: '#9C9CAC',
          muted: '#65656F',
        },
        success: '#3DDC84',
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.16)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'forge-gradient': 'radial-gradient(circle at 20% 20%, rgba(255,106,61,0.15), transparent 50%), radial-gradient(circle at 80% 30%, rgba(91,140,255,0.12), transparent 50%)',
        'ember-electric': 'linear-gradient(135deg, #FF6A3D 0%, #5B8CFF 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.4)',
        'glow-ember': '0 0 40px rgba(255,106,61,0.25)',
        'glow-electric': '0 0 40px rgba(91,140,255,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        'spark-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spark-pulse': 'spark-pulse 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
