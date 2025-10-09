/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern color system with CSS variables
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
          tertiary: 'var(--foreground-tertiary)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          dark: 'var(--primary-dark)',
          contrast: 'var(--primary-contrast)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
        'glow-lg': '0 0 30px rgba(37, 99, 235, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      gradientColorStops: {
        'primary-light': '#60a5fa',
        'primary-dark': '#1e40af',
        'secondary-light': '#a78bfa',
        'secondary-dark': '#6d28d9',
      },
      animationDelay: {
        '200': '0.2s',
        '400': '0.4s',
        '600': '0.6s',
        '700': '0.7s',
        '800': '0.8s',
        '900': '0.9s',
        '1000': '1.0s',
        '1100': '1.1s',
        '1200': '1.2s',
      },
    },
  },
  plugins: [
    // Custom plugin for modern design utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.1)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.gradient-primary': {
          'background': 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        },
        '.gradient-soft': {
          'background': 'linear-gradient(135deg, var(--background-secondary) 0%, var(--background-tertiary) 100%)',
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.card-modern': {
          'background': 'var(--background)',
          'border': '1px solid var(--border)',
          'border-radius': '1rem',
          'box-shadow': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.card-modern:hover': {
          'transform': 'translateY(-4px)',
          'box-shadow': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        },
        '.btn-modern': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'padding': '0.75rem 1.5rem',
          'font-weight': '600',
          'border-radius': '0.75rem',
          'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          'min-height': '48px',
        },
        '.btn-primary': {
          'background': 'var(--primary)',
          'color': 'white',
          'border': '2px solid var(--primary)',
        },
        '.btn-primary:hover': {
          'background': 'var(--primary-hover)',
          'border-color': 'var(--primary-hover)',
          'transform': 'translateY(-1px)',
          'box-shadow': '0 4px 15px rgba(37, 99, 235, 0.3)',
        },
        '.btn-secondary': {
          'background': 'transparent',
          'color': 'var(--primary)',
          'border': '2px solid var(--primary)',
        },
        '.btn-secondary:hover': {
          'background': 'var(--primary)',
          'color': 'white',
          'transform': 'translateY(-1px)',
          'box-shadow': '0 4px 15px rgba(37, 99, 235, 0.3)',
        },
        '.nav-link': {
          'text-decoration': 'none',
          'border-bottom': 'none',
          '-webkit-text-decoration': 'none',
          '-webkit-border-bottom': 'none',
        },
        '.nav-link:hover': {
          'text-decoration': 'none',
          'border-bottom': 'none',
          '-webkit-text-decoration': 'none',
          '-webkit-border-bottom': 'none',
        },
        '.section-padding': {
          'padding-top': '4rem',
          'padding-bottom': '4rem',
        },
        '@media (min-width: 768px)': {
          '.section-padding': {
            'padding-top': '6rem',
            'padding-bottom': '6rem',
          },
        },
        '@media (min-width: 1024px)': {
          '.section-padding': {
            'padding-top': '8rem',
            'padding-bottom': '8rem',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}