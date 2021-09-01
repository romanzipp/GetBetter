<template>

    <article class="max-w-prose mx-auto">

        <div v-if="showNav && anchors.length > 0"
             @click="showNav = false"
             class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25" />

        <div v-if="anchors.length > 0"
             :class="{
                 'left-1/2 z-10 -translate-x-1/2 -translate-y-1/2': showNav,
                 'hidden xl:block pr-4 transform -translate-x-full': !showNav
             }"
             class="fixed">

            <div class="p-4 mr-0 xl:mr-4 w-64 bg-green-200">

                <div class="mb-2 pb-2 text-xl font-medium border-b-2 border-green-300">
                    Navigation
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

            </div>

        </div>

        <div class="prose prose-green max-w-none mx-auto overflow-x-auto">
            <nuxt-content ref="content"
                          :document="document" />
        </div>

        <div class="block xl:hidden fixed mr-10 mb-10 bottom-0 right-0">
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
    }),

    mounted() {
        console.log(this.document.title);
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
