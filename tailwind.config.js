// Paleta Gris Oscuro + Azul Slate (Minimalismo premium)
// Para luxury rentals con sofisticación moderna y profesionalismo absoluto

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
           50: '#f0fdfc',   // Muy claro (fondos)
          100: '#ccfbf8',  // Claro
          200: '#99f6f0',  // Claro medio
          300: '#5ceae3',  // Medio brillante
          400: '#22d3cd',  // Brillante
          500: '#005c5c',  // 
          600: '#004d4d',  // Oscuro
          700: '#003d3d',  // Más oscuro
          800: '#002e2e',  // Muy oscuro (textos)
          900: '#001f1f',  // Casi negro
          950: '#001414',  // Negro azulado
        },
        accent: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',  // Base gris medio
          600: '#4b5563',  // Gris oscuro
          700: '#374151',  // Gris profundo
          800: '#1f2937',  // Gris muy oscuro (textos principales)
          900: '#111827',  // Casi negro
          950: '#030712', 
        },
      },
      fontFamily: {
        'display': ['Lora', 'serif'],
        'body': ['Work Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}