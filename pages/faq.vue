<template>

    <Content :document="page" />

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
        return {
            title: 'FAQ - Get Better',
        };
    },
};
</script>
