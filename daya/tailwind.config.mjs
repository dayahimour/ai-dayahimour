/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#050a12',
                    800: '#0a0f1a',
                    700: '#0d1b2a',
                    600: '#1b2838',
                    500: '#243447',
                    400: '#2d4156',
                },
                neon: {
                    blue: '#00B4D8',
                    green: '#00FF94',
                    purple: '#a855f7',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Tajawal', 'sans-serif'],
                arabic: ['Tajawal', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0, 180, 216, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 180, 216, 0.4)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
