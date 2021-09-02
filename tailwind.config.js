/* eslint-disable global-require */

module.exports = {
    mode: 'jit',
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
            serif: [
                'Kazimir',
                'serif',
            ],
            sans: [
                '"Brandon Grotesque"',
                'sans-serif',
            ],
        },
        extend: {
            borderWidth: {
                16: '16px',
            },
            spacing: {
                nav: '18.5rem',
                '-nav': '-18.5rem',
            },
            maxWidth: {
                prose: '65ch',
                landing: '95ch',
                nav: '18.5rem',
            },
            minWidth: {
                nav: '18.5rem',
            },
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
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            'text-align': 'center',
                            'font-family': theme('fontFamily.serif'),
                            'font-size': theme('fontSize.3xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'font-style': 'italic',
                            'margin-top': theme('margin.10'),
                            'margin-bottom': theme('margin.6'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.5xl'),
                            },
                        },
                        h2: {
                            'font-size': theme('fontSize.3xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-top': theme('margin.10'),
                            'margin-bottom': theme('margin.4'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.4xl'),
                            },
                        },
                        h3: {
                            'font-size': theme('fontSize.2xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-top': theme('margin.8'),
                            'margin-bottom': theme('margin.4'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.3xl'),
                            },
                        },
                        h4: {
                            'font-size': theme('fontSize.xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-top': theme('margin.6'),
                            'margin-bottom': theme('margin.4'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.2xl'),
                            },
                        },
                        h5: {
                            'font-size': theme('fontSize.xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-top': theme('margin.6'),
                            'margin-bottom': theme('margin.4'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                        },
                        mark: {
                            backgroundColor: theme('colors.green.200'),
                        },
                        '.quote': {
                            marginTop: theme('margin.8'),
                            padding: theme('padding.4'),
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: theme('fontSize.xl'),
                            fontStyle: 'italic',
                            textAlign: 'center',
                            fontWeight: theme('fontWeight.light'),
                            backgroundColor: theme('colors.green.200'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
