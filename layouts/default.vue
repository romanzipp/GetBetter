<template>

    <main :class="{ dark }">
        <div class="min-h-screen flex flex-col border-8 md:border-16 border-green-100 dark:border-greener-600 bg-green-100 dark:bg-greener-600">

            <Navbar />

            <Nuxt class="content" />

            <div v-if="notice && !noticeDismissed"
                 class="fixed right-0 bottom-0 p-4 lg:p-6 w-full lg:max-w-notice z-30">

                <div class="p-4 bg-red-100 rounded shadow-md space-y-2">

                    <div class="flex justify-between">

                        <div class="text-base lg:text-xl text-red-900">
                            {{ notice.title }}
                        </div>

                        <div class="self-start">
                            <img :src="CloseIcon"
                                 @click="dismissNotice"
                                 alt="Close notice"
                                 class="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer">
                        </div>

                    </div>

                    <p class="text-sm lg:text-base">
                        {{ notice.content }}
                    </p>

                    <p>
                        <a :href="notice.link"
                           @click="dismissNotice"
                           class="-mx-1 px-1 border-b border-red-300 hover:border-b-2 text-red-800 hover:text-red-900">
                            Ansehen
                        </a>
                    </p>

                </div>

            </div>

        </div>

    </main>

</template>

<script>
import styles from '~/mixins/style';
import CloseIcon from '~/assets/close-outline.svg';

export default {

    data: () => ({
        notice: null,
        noticeDismissed: true,
        CloseIcon,
    }),

    mixins: [
        styles,
    ],

    head: {
        bodyAttrs: {
            class: 'bg-green-100',
        },
        script: [{
            src: 'https://p.ich.wtf/js/script.js',
            'data-domain': 'get-better.me',
            async: true,
        }],
    },

    async fetch() {
        const notice = await this.$content('notice').fetch();

        if (notice.enabled) {
            this.notice = notice;
        }
    },

    mounted() {
        if (!('notice-dismissed' in localStorage)) {
            this.noticeDismissed = false;
        } else if (this.notice) {
            this.noticeDismissed = this.notice.updatedAt === localStorage['notice-dismissed'];
        }
    },

    methods: {
        dismissNotice() {
            localStorage['notice-dismissed'] = this.notice.updatedAt;
            this.noticeDismissed = true;
        },
    },
};
</script>
