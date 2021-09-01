<template>

    <article class="prose prose-green mx-auto">
        <nuxt-content :document="page" />
    </article>

</template>

<script>
export default {
    layout: 'content',

    async asyncData({ $content }) {
        return {
            page: await $content('ethik').fetch(),
        };
    },
};
</script>
