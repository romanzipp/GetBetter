<template>

    <article class="prose prose-green mx-auto">
        <nuxt-content :document="page" />
    </article>

</template>

<script>
export default {
    async asyncData({ $content }) {
        return {
            page: await $content('umwelt').fetch(),
        };
    },
};
</script>
