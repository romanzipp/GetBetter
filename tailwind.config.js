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
    darkMode: 'media',
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
            fontSize: {
                base: ['1.125rem', { lineHeight: '1.75rem' }],
                lg: ['1.175rem', { lineHeight: '1.75rem' }],
            },
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
                greener: {
                    DEFAULT: '#3F5837',
                    50: '#B2CAAA',
                    100: '#A4C09B',
                    200: '#87AD7B',
                    300: '#6C975E',
                    400: '#55774B',
                    500: '#3F5837',
                    600: '#293923',
                    700: '#1f2a1a',
                    800: '#000000',
                    900: '#000000',
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        fontSize: theme('fontSize.base'),
                        '@media (prefers-color-scheme: dark)': {
                            color: theme('colors.white'),
                            'strong, b': {
                                color: theme('colors.white'),
                            },
                            blockquote: {
                                color: theme('colors.white'),
                            },
                        },
                        '&.prose-green': {
                            a: {
                                color: theme('colors.greener.50'),
                            },
                        },
                        h1: {
                            'font-family': theme('fontFamily.serif'),
                            'font-size': theme('fontSize.3xl'),
                            'font-style': 'italic',
                            'font-weight': theme('fontWeight.normal'),
                            'margin-bottom': theme('margin.6'),
                            'margin-top': theme('margin.10'),
                            'text-align': 'center',
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.5xl'),
                            },
                            '@media (prefers-color-scheme: dark)': {
                                color: theme('colors.greener.50'),
                            },
                        },
                        h2: {
                            'font-size': theme('fontSize.3xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-bottom': theme('margin.4'),
                            'margin-top': theme('margin.10'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.4xl'),
                            },
                            '@media (prefers-color-scheme: dark)': {
                                color: theme('colors.greener.200'),
                            },
                        },
                        h3: {
                            'font-size': theme('fontSize.2xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-bottom': theme('margin.4'),
                            'margin-top': theme('margin.8'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.3xl'),
                            },
                            '@media (prefers-color-scheme: dark)': {
                                color: theme('colors.greener.200'),
                            },
                        },
                        h4: {
                            'font-size': theme('fontSize.xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-bottom': theme('margin.4'),
                            'margin-top': theme('margin.6'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                'font-size': theme('fontSize.2xl'),
                            },
                            '@media (prefers-color-scheme: dark)': {
                                color: theme('colors.greener.200'),
                            },
                        },
                        h5: {
                            'font-size': theme('fontSize.xl'),
                            'font-weight': theme('fontWeight.normal'),
                            'margin-bottom': theme('margin.4'),
                            'margin-top': theme('margin.6'),
                            'text-transform': 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (prefers-color-scheme: dark)': {
                                color: theme('colors.greener.200'),
                            },
                        },
                        mark: {
                            backgroundColor: theme('colors.green.200'),
                            '@media (prefers-color-scheme: dark)': {
                                backgroundColor: theme('colors.greener.500'),
                                color: theme('colors.white'),
                            },
                        },
                        '.quote': {
                            backgroundColor: theme('colors.green.200'),
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: theme('fontSize.xl'),
                            fontStyle: 'italic',
                            fontWeight: theme('fontWeight.light'),
                            marginTop: theme('margin.8'),
                            padding: theme('padding.4'),
                            textAlign: 'center',
                            '@media (prefers-color-scheme: dark)': {
                                backgroundColor: theme('colors.greener.600'),
                            },
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
