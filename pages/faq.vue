<template>

    <Content v-if="page"
             :document="page" />

</template>

<script>
export default {
    layout: 'content',

    data: () => ({
        page: null,
    }),

    async fetch() {
        this.page = await this.$content('faq').fetch();
    },

    head() {
        return {
            title: 'FAQ - Get Better',
            meta: [
                { hid: 'og:title', name: 'og:title', content: 'FAQ - Get Better' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'FAQ - Get Better' },
            ],
        };
    },
};
</script>
