<template>

    <Content :document="page" />

</template>

<script>
export default {
    layout: 'content',

    async asyncData({ $content }) {
        return {
            page: await $content('ernaehrung').fetch(),
        };
    },

    head() {
        return {
            title: 'Ernährung - Get Better',
        };
    },
};
</script>
