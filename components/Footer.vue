<template>

    <div class="flex justify-center mt-64 space-x-6">

        <a href="https://ich.wtf/imprint"
           target="_blank"
           class="dark:text-greener-50"
           rel="noopener">Impressum</a>

        <a href="https://ich.wtf/privacy"
           target="_blank"
           class="dark:text-greener-50"
           rel="noopener">Datenschutz</a>

    </div>

</template>

<script>
import styles from '~/mixins/style';

export default {
    mixins: [
        styles,
    ],
};
</script>
