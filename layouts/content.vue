<template>

    <main :class="{ dark }">
        <div class="min-h-screen flex flex-col border-8 md:border-16 border-green-100 dark:border-greener-600 dark:bg-greener-700">

            <Navbar />

            <div class="flex-grow flex flex-col">

                <div class="hidden md:block h-32 bg-rounded" />

                <div class="flex-grow flex flex-col justify-between bg-green-100 dark:bg-greener-600 -mt-px">

                    <div class="container mx-auto mt-12">
                        <Nuxt class="content" />
                    </div>

                    <Footer />

                </div>

            </div>

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
