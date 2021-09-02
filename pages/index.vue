<template>

    <MainContent>

        <template #before>
            <Jumbotron />
        </template>

        <div class="-mt-12 max-w-landing mx-auto space-y-32">

            <div v-for="(link, index) in links"
                 :key="link.url"
                 class="flex flex-col md:flex-row items-center">

                <img :src="link.image"
                     :class="index === 1 ? 'order-1 md:order-2' : 'order-1'"
                     class="h-48 md:h-64"
                     :alt="link.title">

                <div :class="index === 1 ? 'order-1 md:order-1' : 'order-2'"
                     class="flex flex-col p-8 space-y-6 md:space-y-8">

                    <h1 class="text-5xl md:text-8xl text-green-800 dark:text-greener-100 font-normal font-sans">
                        {{ link.title }}
                    </h1>

                    <p class="dark:text-white">
                        {{ link.intro }}
                    </p>

                    <div>
                        <router-link :to="link.url"
                                     class="bg-green-700 dark:bg-greener-400 hover:bg-green-800 dark:hover:bg-greener-300 transition-colors px-8 py-3 text-white text-lg text-center font-normal tracking-wide font-serif leading-normal">
                            Weiterlesen
                        </router-link>
                    </div>

                </div>

            </div>

        </div>

    </MainContent>

</template>

<script>
import links from '~/mixins/links';

export default {
    mixins: [
        links,
    ],

    head() {
        return {
            title: 'Get Better',
        };
    },
};
</script>
