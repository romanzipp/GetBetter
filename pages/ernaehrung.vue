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
            page: await $content('ernaehrung').fetch(),
        };
    },

    head() {
        const title = 'Ernährung - Get Better';
        const description = 'Für unseren Nährstoffbedarf besteht absolut keine Notwendigkeit, tierische Produkte zu konsumieren. Des Weiteren zeigen Untersuchungen, dass die vegane Ernährungsweise im Vergleich zur Omnivoren Ernährung mit besseren gesundheitlichen Effekten einhergeht. Zum Beispiel mit einem geringeren Risiko für Herz-Kreislauf-Erkrankungen, für einige Krebsarten, Übergewicht, Hypertonie (Bluthochdruck), Typ-2 Diabetes und allgemein einer geringen Sterblichkeit.';

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
