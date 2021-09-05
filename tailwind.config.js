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
    darkMode: 'class',
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
                dark: {
                    css: {
                        color: theme('colors.white'),
                        a: {
                            color: theme('colors.greener.100'),
                            '&:hover': {
                                color: theme('colors.greener.200'),
                            },
                        },
                        'strong, b': {
                            color: theme('colors.white'),
                        },
                        blockquote: {
                            color: theme('colors.white'),
                        },
                        h1: {
                            color: theme('colors.greener.50'),
                        },
                        h2: {
                            color: theme('colors.greener.200'),
                        },
                        h3: {
                            color: theme('colors.greener.200'),
                        },
                        h4: {
                            color: theme('colors.greener.200'),
                        },
                        h5: {
                            color: theme('colors.greener.200'),
                        },
                        mark: {
                            backgroundColor: theme('colors.greener.500'),
                            color: theme('colors.white'),
                        },
                        '.quote': {
                            backgroundColor: theme('colors.greener.500'),
                        },
                    },
                },
                green: {
                    css: {
                        fontSize: theme('fontSize.base')[0],
                        a: {
                            color: theme('colors.green.500'),
                            '&:hover': {
                                color: theme('colors.green.600'),
                            },
                        },
                        h1: {
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: theme('fontSize.3xl'),
                            fontStyle: 'italic',
                            fontWeight: theme('fontWeight.normal'),
                            marginBottom: theme('margin.6'),
                            marginTop: theme('margin.10'),
                            textAlign: 'center',
                            '@media (min-width: 1024px)': {
                                fontSize: theme('fontSize.5xl'),
                            },
                        },
                        h2: {
                            fontSize: theme('fontSize.3xl'),
                            fontWeight: theme('fontWeight.normal'),
                            marginBottom: theme('margin.4'),
                            marginTop: theme('margin.10'),
                            textTransform: 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                fontSize: theme('fontSize.4xl'),
                            },
                        },
                        h3: {
                            fontSize: theme('fontSize.2xl'),
                            fontWeight: theme('fontWeight.normal'),
                            marginBottom: theme('margin.4'),
                            marginTop: theme('margin.8'),
                            textTransform: 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                fontSize: theme('fontSize.3xl'),
                            },
                        },
                        h4: {
                            fontSize: theme('fontSize.xl'),
                            fontWeight: theme('fontWeight.normal'),
                            marginBottom: theme('margin.4'),
                            marginTop: theme('margin.6'),
                            textTransform: 'uppercase',
                            color: theme('colors.green.800'),
                            '@media (min-width: 1024px)': {
                                fontSize: theme('fontSize.2xl'),
                            },
                        },
                        h5: {
                            fontSize: theme('fontSize.xl'),
                            fontWeight: theme('fontWeight.normal'),
                            marginBottom: theme('margin.4'),
                            marginTop: theme('margin.6'),
                            textTransform: 'uppercase',
                            color: theme('colors.green.800'),
                        },
                        mark: {
                            backgroundColor: theme('colors.green.200'),
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
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
