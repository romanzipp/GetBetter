<template>

    <article class="max-w-prose mx-auto">

        <div class="fixed pr-4 transform -translate-x-full">

            <div class="p-4 mr-4 w-64 bg-green-200">

                <div class="mb-2 pb-2 text-xl font-medium border-b-2 border-green-300">
                    Navigation
                </div>

                <div v-for="anchor in anchors"
                     :style="{ paddingLeft: `${(anchor.depth - 1) * 8}px` }"
                     :key="anchor.id">

                    <a :href="`#${anchor.id}`"
                       class="text-black hover:text-green-700 no-underline!important">
                        ({{ anchor.depth }})
                        {{ anchor.title }}
                    </a>

                </div>

            </div>

        </div>

        <div class="prose prose-green max-w-none mx-auto">
            <nuxt-content ref="content"
                          :document="document" />
        </div>

    </article>

</template>

<script>
export default {

    props: {
        document: {
            required: true,
        },
    },

    data: () => ({
        anchors: [],
    }),

    mounted() {
        const headings = this.$refs.content.$el.querySelectorAll('h1,h2,h3,h4');

        headings.forEach((el) => {
            this.anchors.push({
                id: el.getAttribute('id'),
                title: el.innerText,
                depth: parseInt(el.tagName.replace('H', ''), 10),
            });
        });

        console.log(headings);
    },
};
</script>
