<template>

    <article class="mt-0 md:-mt-16 max-w-prose mx-auto">

        <h1 class="mb-12 text-center text-5xl md:text-8xl text-green-800 font-normal font-sans">
            {{ document.title }}
        </h1>

        <div v-if="showNav && anchors.length > 0"
             @click="showNav = false"
             class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10" />

        <div v-if="anchors.length > 0"
             :class="{
                 'left-1/2 z-10 -translate-x-1/2 -translate-y-1/2': showNav,
                 'hidden xl:block pr-4 transform -translate-x-full': !showNav,
                 'fixed xl:top-10': stick,
                 'fixed xl:absolute': !stick,
             }"
             class="h-full z-20">

            <div class="p-4 mr-0 xl:mr-4 w-64 bg-green-200">

                <div class="mb-2 pb-2 text-2xl font-medium border-b-2 border-green-300">
                    Inhalte
                </div>

                <div v-for="anchor in anchors"
                     :style="{ paddingLeft: `${(anchor.depth - 1) * 10}px` }"
                     :key="anchor.id"
                     class="truncate">

                    <a :href="`#${anchor.id}`"
                       @click="jumpTo(anchor)"
                       :class="{ 'text-sm': anchor.depth > 1 }"
                       class="text-black hover:text-green-700 no-underline!important truncate">
                        {{ anchor.title }}
                    </a>

                </div>

                <a href="#top"
                   class="block text-black hover:text-green-700 no-underline!important truncate mt-2 pt-2 border-t-2 border-green-300">
                    Nach oben
                </a>

            </div>

        </div>

        <div ref="sticky-guard"
             class="prose prose-green max-w-none mx-auto overflow-x-auto">
            <nuxt-content ref="content"
                          :document="document" />
        </div>

        <div class="block xl:hidden fixed mr-10 mb-10 bottom-0 right-0 z-20">
            <button @click="showNav = !showNav"
                    class="rounded-full bg-green-300 focus:bg-green-400 p-4 shadow">
                Nav
            </button>
        </div>

    </article>

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
        stick: false,
    }),

    mounted() {
        for (const el of this.document.body.children) {
            if (!el.tag || !el.children) {
                continue;
            }

            if (el.tag[0] !== 'h') {
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

        window.addEventListener('scroll', () => {
            const rect = this.$refs['sticky-guard'].getBoundingClientRect();

            this.stick = rect.y <= 0;
            console.log(rect.y, this.stick);
            // if (rect.y <= 10) {
            //    const offset = Math.min(rect.y, 0) * -1;
            //    console.log(offset);
            //    this.$refs['sticky-container'].classList
            // }
        });
    },

    methods: {
        jumpTo(anchor) {
            this.activeAnchor = anchor;

            if (this.showNav) {
                this.showNav = false;
            }
        },
    },
};
</script>
