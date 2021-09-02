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
        };
    },
};
</script>
