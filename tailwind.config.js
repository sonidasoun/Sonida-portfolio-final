// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    // tailwind.config.js
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Kantumruy Pro', 'sans-serif'],
                moul: ['Moul', 'Roboto', 'sans-serif']
            },
            colors: {
                primary: {
                    light: '#7dd3fc', // soft blue
                    DEFAULT: '#6366f1', // indigo
                    dark: '#312e81', // deep indigo
                },
                accent: {
                    gold: '#fbbf24',
                    green: '#34d399',
                },
                background: {
                    light: '#f8fafc',
                    dark: '#18181b',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glow': '0 0 16px 0 rgba(99,102,241,0.5)',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
