<template>

    <MainContent>

        <ArticleContent v-if="page"
                        :document="page" />

    </MainContent>

</template>

<script>
export default {
    async asyncData({ $content, i18n }) {
        return {
            page: await $content(`${i18n.locale}/faq`).fetch(),
        };
    },
};
</script>
