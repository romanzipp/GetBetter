<template>

    <div id="top"
         class="flex flex-wrap flex-col lg:flex-row justify-center p-2 lg:p-6 space-x-0 lg:space-x-16 text-black dark:text-white">

        <div class="order-2 lg:order-1 flex-1 flex items-center justify-center lg:justify-end space-x-4">

            <router-link v-for="link in links"
                         :key="link.url"
                         :to="link.url"
                         class="px-4 py-2 tracking-wide text-base lg:text-xl font-sans leading-normal hover:text-green-700 dark:hover:text-greener-100">
                {{ link.title }}
            </router-link>

        </div>

        <div class="order-1 lg:order-2 flex justify-center">

            <router-link to="/">

                <img src="/get_better_logo_transparent.png"
                     class="h-32"
                     alt="Logo">

            </router-link>

        </div>

        <div class="order-3 lg:order-3 flex-1 flex items-center justify-center lg:justify-start space-x-0 lg:space-x-4">

            <router-link to="/"
                         class="px-4 py-2 tracking-wide text-base lg:text-xl font-sans leading-normal hover:text-green-700 dark:hover:text-greener-100">
                Startseite
            </router-link>

            <router-link to="/projekt"
                         class="px-4 py-2 tracking-wide text-base lg:text-xl font-sans leading-normal hover:text-green-700 dark:hover:text-greener-100">
                Über uns
            </router-link>

            <router-link to="/faq"
                         class="px-4 py-2 tracking-wide text-base lg:text-xl font-sans leading-normal hover:text-green-700 dark:hover:text-greener-100">
                FAQ
            </router-link>

            <a class="px-4 py-2 hover:text-green-700 dark:hover:text-greener-100 cursor-pointer">

                <img v-show="!dark"
                     @click="toggleDark"
                     src="~/assets/moon-outline.svg"
                     class="h-6 w-6 fill-current"
                     alt="Darkmode">

                <img v-show="dark"
                     @click="toggleDark"
                     src="~/assets/sunny-outline.svg"
                     class="h-6 w-6 fill-current"
                     alt="Darkmode">

            </a>

        </div>

    </div>

</template>

<script>
import links from '~/mixins/links';
import styles from '~/mixins/style';

export default {
    mixins: [
        links,
        styles,
    ],

    created() {
        this.pullDark();
    },
};
</script>
