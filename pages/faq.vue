<template>

    <Content v-if="page"
             :document="page" />

</template>

<script>
export default {
    layout: 'content',

    async asyncData({ $content }) {
        return {
            page: await $content('faq').fetch(),
        };
    },

    head() {
        const title = 'FAQ - Get Better';
        const description = 'Frequently Asked Questions';

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
