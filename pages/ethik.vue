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
            page: await $content('ethik').fetch(),
        };
    },

    head() {
        const title = 'Ethik - Get Better';
        const description = 'Unsere Gesellschaft und die Wissenschaft entwickeln sich stets weiter, doch bei der ethischen Frage ob wir Lebewesen für unseren Genuss quälen und töten dürfen, scheint es nur ganz langsam Fortschritt zu geben. Wir haben täglich die Wahl: Kaufen wir tierische Produkte und verantworten das qualvolle Leben und den Tod von Lebewesen, die nicht sterben wollen, oder stehen wir für die Lebewesen ein, die selbst keine Stimme haben sich zu äußern und leben ohne Tierleid zu verursachen – vegan.';

        return {
            title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: title },
                { hid: 'twitter:title', name: 'twitter:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'twitter:description', name: 'twitter:description', content: description },
            ],
        };
    },
};
</script>
