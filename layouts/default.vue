<template>

    <div class="min-h-screen flex flex-col border-16 border-green-100">

        <div>

            <div class="flex justify-center p-6">

                <router-link to="/">
                    <img src="/get_better_logo_transparent.png"
                         class="h-32"
                         alt="Logo">
                </router-link>

            </div>

            <div class="px-12 py-32 bg-nature text-center">

                <div class="container mx-auto">

                    <div class="font-serif font-medium text-8xl text-green-800">
                        Get Better
                    </div>

                    <p class="mt-12 font-serif text-xl leading-normal">
                        Gerade in jüngster Zeit bekommen wir alle die Auswirkungen der Klimakrise zu spüren. Das die anthropogenen Einflüsse die Hauptursache der globalen Klimaentwicklung sind, ist mittlerweile indisputabel. Wir sollten uns allen bewusst sein, dass wir jetzt Änderungen brauchen.
                    </p>

                </div>

            </div>

        </div>

        <div class="flex-grow flex flex-col">

            <img src="/rounded.svg"
                 alt=""
                 class="w-full">

            <div class="flex-grow flex flex-col justify-between bg-green-100 -mt-px">

                <div class="flex justify-center space-x-8 -mt-12">

                    <router-link v-for="link in links"
                                 :key="link.url"
                                 :to="link.url"
                                 class="bg-green-700 hover:bg-green-800 transition-colors px-8 py-3 text-white text-lg font-normal tracking-wide font-serif leading-normal">
                        {{ link.title }}
                    </router-link>

                </div>

                <div class="container mx-auto mt-12">
                    <Nuxt class="content" />
                </div>

                <div class="flex justify-center space-x-6">

                    <a href="https://ich.wtf/imprint"
                       target="_blank"
                       rel="noopener">Impressum</a>

                    <a href="https://ich.wtf/privacy"
                       target="_blank"
                       rel="noopener">Datenschutz</a>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    data: () => ({
        links: [
            { title: 'Umwelt', url: '/umwelt' },
            { title: 'Ernährung', url: '/ernährung' },
            { title: 'Ethik', url: '/ethik' },
        ],
    }),
};
</script>
