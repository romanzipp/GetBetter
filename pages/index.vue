<template>

    <div class="flex justify-center space-x-8">

        <router-link v-for="link in links"
                     :key="link.url"
                     :to="link.url"
                     class="bg-green-700 hover:bg-green-800 transition-colors px-8 py-3 text-white text-lg font-normal tracking-wide font-serif leading-normal">
            {{ link.title }}
        </router-link>

    </div>

</template>

<script>
export default {
    async asyncData() {
        return {
            links: [
                { title: 'Umwelt', url: '/umwelt' },
                { title: 'Ernährung', url: '/ernährung' },
                { title: 'Ethik', url: '/ethik' },
            ],
        };
    },
};
</script>
