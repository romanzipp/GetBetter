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
        this.page = await this.$content('ethik').fetch();
    },

    head() {
        return {
            title: 'Ethik - Get Better',
            meta: [
                { hid: 'og:title', name: 'og:title', content: 'Ethik - Get Better' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Ethik - Get Better' },
            ],
        };
    },
};
</script>
