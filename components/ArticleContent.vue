<template>

    <section class="mt-0 md:-mt-16 max-w-prose mx-auto">

        <h1 class="mb-12 text-center text-5xl md:text-8xl text-green-800 dark:text-white font-normal font-sans">
            {{ document.title }}
        </h1>

        <div v-if="showNav && anchors.length > 0"
             @click="showNav = false"
             class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10" />

        <div class="block xl:hidden fixed mr-10 mb-10 bottom-0 right-0 z-30">
            <button @click="showNav = !showNav"
                    aria-label="open navigation"
                    class="rounded-full bg-green-300 focus:bg-green-400 p-4 shadow">
                <img src="~/assets/search-outline.svg"
                     class="h-5 w-5"
                     alt="Navigation">
            </button>
        </div>

        <div class="flex xl:-ml-nav">

            <aside :class="{
                       'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 xl:top-auto z-10 top-0': showNav,
                       'hidden xl:block pr-6': !showNav,
                   }"
                   class="z-20 max-h-full w-full xl:min-w-nav xl:max-w-nav mt-0 xl:-mt-4">

                <div v-if="anchors.length > 0"
                     class="relative xl:sticky overflow-y-auto pt-0 xl:pt-4 top-0 px-8 xl:px-0">

                    <div class="p-4 mr-0 xl:mr-4 w-full bg-green-200 dark:bg-greener-500 dark:text-white"
                         role="navigation">

                        <div class="mb-2 pb-2 text-2xl font-medium border-b-2 border-green-300 dark:border-greener-400">
                            Inhalte
                        </div>
                        <div v-for="anchor in anchors"
                             :style="{ paddingLeft: `${(anchor.depth - 2) * 10}px` }"
                             :key="anchor.id"
                             class="truncate">
                            <router-link :to="{hash: anchor.id}"
                                         :class="{ 'text-sm': anchor.depth > 2 }"
                                         class="text-black dark:text-white hover:text-green-700 dark:hover:text-green-200 no-underline!important truncate">
                                {{ anchor.title }}
                            </router-link>

                        </div>

                        <a href="#top"
                           class="block text-black dark:text-white hover:text-green-700 dark:hover:text-green-200 no-underline!important truncate mt-2 pt-2 border-t-2 border-green-300 dark:border-greener-400">
                            Nach oben
                        </a>

                    </div>

                </div>

            </aside>

            <article class="prose prose-green dark:prose-dark max-w-none mx-auto overflow-x-auto"
                     id="main-content">

                <nuxt-content :document="document" />

            </article>

        </div>

    </section>

</template>

<script>
export default {

    props: {
        document: {
            required: true,
            type: Object,
        },
    },

    data: () => ({
        anchors: [],
        activeAnchor: null,
        showNav: false,
    }),

    created() {
        for (const el of this.document.body.children) {
            if (!el.tag || !el.children) {
                continue;
            }

            if (el.tag[0] !== 'h' || el.tag[1] > 3) {
                continue;
            }

            let title = null;
            el.children.forEach((child) => {
                if (child.type === 'text') {
                    title = child.value;
                }
            });

            this.anchors.push({
                id: el.props.id,
                title,
                depth: parseInt(el.tag[1], 10),
            });
        }
    },

    methods: {
        jumpTo(anchor) {
            this.activeAnchor = anchor;

            if (this.showNav) {
                this.showNav = false;
            }
        },
    },

    head() {
        const title = `${this.document.title} - Get Better`;
        const { description } = this.document;

        return {
            title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: title },
                { hid: 'twitter:title', name: 'twitter:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'twitter:description', name: 'twitter:description', content: description },
            ],
            link: [
                { rel: 'canonical', href: `${this.$config.baseUrl}${this.document.path}/` },
            ],
        };
    },
};
</script>
