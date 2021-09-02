export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Get Better',
        htmlAttrs: {
            lang: 'de',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Gerade in jüngster Zeit bekommen wir alle die Auswirkungen der Klimakrise zu spüren. Dass die anthropogenen Einflüsse die Hauptursache der globalen Klimaentwicklung sind, ist mittlerweile indisputabel. Wir sollten uns allen bewusst sein, dass wir jetzt Änderungen brauchen. Dieses Projekt soll Menschen informieren und den Umstieg auf eine vegane Ernährung erleichtern.' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', content: '#d2e7cc' },

            // OpenGraph

            { hid: 'og:locale', property: 'og:locale', content: 'de_DE' },
            { hid: 'og:title', name: 'og:title', content: 'Get Better' },
            { hid: 'og:description', property: 'og:description', content: 'Gerade in jüngster Zeit bekommen wir alle die Auswirkungen der Klimakrise zu spüren. Dass die anthropogenen Einflüsse die Hauptursache der globalen Klimaentwicklung sind, ist mittlerweile indisputabel. Wir sollten uns allen bewusst sein, dass wir jetzt Änderungen brauchen. Dieses Projekt soll Menschen informieren und den Umstieg auf eine vegane Ernährung erleichtern.' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'Get Better' },
            { hid: 'og:image', property: 'og:image', content: 'https://get-better.me/social-1280.jpg' },

            // Twitter

            { hid: 'twitter:title', name: 'twitter:title', content: 'Get Better' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:site', name: 'twitter:site', content: '@romanzipp' },
            { hid: 'twitter:creator', name: 'twitter:creator', content: '@romanzipp' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Gerade in jüngster Zeit bekommen wir alle die Auswirkungen der Klimakrise zu spüren. Dass die anthropogenen Einflüsse die Hauptursache der globalen Klimaentwicklung sind, ist mittlerweile indisputabel. Wir sollten uns allen bewusst sein, dass wir jetzt Änderungen brauchen. Dieses Projekt soll Menschen informieren und den Umstieg auf eine vegane Ernährung erleichtern.' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://get-better.me/social-1280.jpg' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [
            {
                src: 'https://u.ich.wtf/s.js', async: true, defer: true, 'data-website-id': '3ae24d79-f274-4687-b533-c3421a5aa73e',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/fonts.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '~/assets/scss/tailwind.scss',
    },
};
