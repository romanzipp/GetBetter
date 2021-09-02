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
        this.page = await this.$content('projekt').fetch();
    },

    head() {
        return {
            title: 'Über uns - Get Better',
            meta: [
                { hid: 'og:title', name: 'og:title', content: 'Über uns - Get Better' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Über uns - Get Better' },
            ],
        };
    },
};
</script>
