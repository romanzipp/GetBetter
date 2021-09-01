<template>

    <div class="flex justify-center p-6 space-x-16">

        <div class="flex-1 flex items-center justify-end space-x-4">

            <router-link v-for="link in links"
                         :key="link.url"
                         :to="link.url"
                         class="px-4 py-2 tracking-wide text-xl font-sans leading-normal hover:text-green-700">
                {{ link.title }}
            </router-link>

        </div>

        <router-link to="/">
            <img src="/get_better_logo_transparent.png"
                 class="h-32"
                 alt="Logo">
        </router-link>

        <div class="flex-1 flex items-center justify-start space-x-4">

            <router-link to="/"
                         class="px-4 py-2 tracking-wide text-xl font-sans leading-normal hover:text-green-700">
                Startseite
            </router-link>

            <router-link to="/faq"
                         class="px-4 py-2 tracking-wide text-xl font-sans leading-normal hover:text-green-700">
                FAQ
            </router-link>

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
