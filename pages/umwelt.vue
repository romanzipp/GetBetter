<template>

    <div>
        <nuxt-content :document="page" />
    </div>

</template>

<script>
export default {
    async asyncData({ $content }) {
        return {
            page: await $content('umwelt').fetch(),
        };
    },
};
</script>
