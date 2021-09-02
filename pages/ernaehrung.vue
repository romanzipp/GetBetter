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
        this.page = await this.$content('ernaehrung').fetch();
    },

    head() {
        return {
            title: 'Ernährung - Get Better',
            meta: [
                { hid: 'og:title', name: 'og:title', content: 'Ernährung - Get Better' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Ernährung - Get Better' },
            ],
        };
    },
};
</script>
