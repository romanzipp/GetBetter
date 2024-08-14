<template>

    <div class="flex justify-center mt-64 space-x-6 py-16">

        <a v-for="link in links"
           :key="link.title"
           :href="link.url"
           target="_blank"
           class="flex items-center dark:text-greener-50"
           rel="noopener">

            <img v-if="link.logo"
                 :src="link.logo"
                 :alt="link.title"
                 class="h-5 mr-2">

            {{ link.title }}

        </a>

    </div>

</template>

<script>
import styles from '~/mixins/style';
import GitHubLogo from '~/assets/logo-github.svg';

export default {

    mixins: [
        styles,
    ],

    data: () => ({
        links: [
            { title: 'Open Source', url: 'https://github.com/romanzipp/GetBetter', logo: GitHubLogo },
            { title: 'Impressum', url: 'https://ich.wtf/impressum' },
            { title: 'Datenschutz', url: 'https://ich.wtf/datenschutzerklaerung' },
        ],
    }),
};
</script>
