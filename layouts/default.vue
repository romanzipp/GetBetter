<template>

    <main :class="{ dark }">
        <div class="min-h-screen flex flex-col border-8 md:border-16 border-green-100 dark:border-greener-600 bg-green-100 dark:bg-greener-600">

            <Navbar />

            <Nuxt class="content" />

        </div>

    </main>

</template>

<script>
import styles from '~/mixins/style';

export default {
    mixins: [
        styles,
    ],
};
</script>
