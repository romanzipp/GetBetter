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
        };
    },
};
</script>
