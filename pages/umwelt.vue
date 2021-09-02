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
        const title = 'Umwelt - Get Better';
        const description = 'Unser Planet ist unser Lebensraum, für alle jetzigen und für alle kommenden Generationen. Unser oberstes Ziel sollte es sein, diesen Lebensraum zu bewahren. »Eine vegane Ernährung ist wahrscheinlich die effektivste Weise den eigenen ökologischen Fußabdruck zu reduzieren und das nicht nur in Bezug auf Treibhausgase sondern auch auf die weltweite Übersäuerung der Böden, die Überdüngung sowie die Land- und Wassernutzung.« Poore, J.';

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
