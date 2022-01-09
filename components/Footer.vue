<template>

    <footer class="flex justify-center mt-64 space-x-6 py-16">

        <ul class="flex gap-8"
            tabindex="-1"
            id="footer">
            <li v-for="link in links"
                :key="link.title">
                <a :href="link.url"
                   target="_blank"
                   :aria-label="link.title"
                   class="flex items-center dark:text-greener-50"
                   rel="noopener">

                    <img v-if="link.logo"
                         :src="link.logo"
                         :alt="link.title"
                         class="h-5 mr-2">

                    {{ link.title }}

                </a>
            </li>
        </ul>

    </footer>

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
            { title: 'Impressum', url: 'https://ich.wtf/imprint' },
            { title: 'Datenschutz', url: 'https://ich.wtf/privacy' },
        ],
    }),
};
</script>
