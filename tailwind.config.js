module.exports = {
    purge: {
        content: [
            'content/**/**.md',
            'pages/**/*.vue',
            'layouts/**/*.vue',
            'components/**/*.vue',
        ],
    },
    darkMode: false,
    theme: {
        fontFamily: {
            'heading-primary': [
                'Kazimir',
                'serif',
            ],
            'heading-secondary': [
                '"Brandon Grotesque"',
                'sans-serif',
            ],
            body: [
                'Kazimir',
            ],
        },
        extend: {
            colors: {
                green: {
                    50: '#f6faf5',
                    100: '#edf5eb',
                    200: '#d2e7cc',
                    300: '#b7d9ad',
                    400: '#81bc70',
                    500: '#4b9f32',
                    600: '#448f2d',
                    700: '#387726',
                    800: '#2d5f1e',
                    900: '#254e19',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
