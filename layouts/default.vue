<template>

    <div class="min-h-screen flex flex-col border-16 border-green-100">

        <Navbar />

        <Jumbotron />

        <div class="flex-grow flex flex-col">

            <div class="hidden md:block h-32 bg-rounded" />

            <div class="flex-grow flex flex-col justify-between bg-green-100 -mt-px">

                <div class="flex justify-center flex-col md:flex-row sapce-x-0 md:space-x-8 space-y-8 md:space-y-0 mt-8 md:-mt-12 px-6 md:px-0">

                    <router-link v-for="link in links"
                                 :key="link.url"
                                 :to="link.url"
                                 class="bg-green-700 hover:bg-green-800 transition-colors px-8 py-3 text-white text-lg text-center font-normal tracking-wide font-serif leading-normal">
                        {{ link.title }}
                    </router-link>

                </div>

                <div class="container mx-auto mt-12">
                    <Nuxt class="content" />
                </div>

                <Footer />

            </div>

        </div>

    </div>

</template>

<script>
import links from '~/mixins/links';

export default {
    mixins: [
        links,
    ],
};
</script>
