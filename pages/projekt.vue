<template>

    <Content v-if="page"
             :document="page" />

</template>

<script>
export default {
    layout: 'content',

    async asyncData({ $content }) {
        return {
            page: await $content('projekt').fetch(),
        };
    },

    head() {
        const title = 'Über uns - Get Better';
        const description = 'Das Projekt »Get Better« ist vom Twitch-Streamer Dekarldent angestoßen worden. Wir haben uns vorgenommen eine Anlaufstelle zu generieren, die Menschen intensiver über die Auswirkungen des Konsums tierischen Produkten aufklärt, als auch dabei hilft in die Thematik rund um Veganismus einzutauchen und die eigene Ernährung umzustellen. Dafür hat Mimi, die bereits seit einiger Zeit vegan lebt, alle relevanten Informationen ausgearbeitet und so sind alle Inhalte auf dieser Seite entstanden.';

        return {
            title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: title },
                { hid: 'twitter:title', name: 'twitter:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'twitter:description', name: 'twitter:description', content: description },
            ],
        };
    },
};
</script>
