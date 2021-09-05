<template>

    <MainContent>

        <div class="text-center">

            <div class="mb-32">

                <h1 v-if="error.statusCode === 404"
                    class="font-serif italic text-6xl md:text-8xl dark:text-white">
                    Seite nicht gefunden
                </h1>

                <h1 v-else
                    class="font-serif italic text-6xl md:text-8xl dark:text-white">
                    Ein Fehler ist aufgetreten
                </h1>

            </div>

            <router-link to="/"
                         class="bg-green-700 dark:bg-greener-400 hover:bg-green-800 dark:hover:bg-greener-300 transition-colors px-8 py-3 text-white text-lg text-center font-normal tracking-wide font-serif leading-normal">
                Startseite
            </router-link>

        </div>

    </MainContent>

</template>

<script>
import styles from '~/mixins/style';

export default {

    props: {
        error: {
            type: Object,
            default: null,
        },
    },

    mixins: [
        styles,
    ],
};
</script>
