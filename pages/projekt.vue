<template>

    <MainContent>

        <ArticleContent v-if="page"
                        :document="page" />

    </MainContent>

</template>

<script>
export default {
    async asyncData({ $content }) {
        return {
            page: await $content('projekt').fetch(),
        };
    },
};
</script>
