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
        };
    },
};
</script>
