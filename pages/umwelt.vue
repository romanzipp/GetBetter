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
        this.page = await this.$content('umwelt').fetch();
    },

    head() {
        return {
            title: 'Umwelt - Get Better',
            meta: [
                { hid: 'og:title', name: 'og:title', content: 'Umwelt - Get Better' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Umwelt - Get Better' },
            ],
        };
    },
};
</script>
