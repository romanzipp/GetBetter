// eslint-disable-next-line import/no-extraneous-dependencies
import { mapActions } from 'vuex';

export default {

    computed: {
        dark() {
            return this.$store.state.dark;
        },
    },

    created() {
        this.pullDark();
    },

    mounted() {
        this.pullDark();
    },

    methods: {
        ...mapActions([
            'toggleDark',
            'pullDark',
        ]),

        initDark() {
            const cookie = this.$cookies.get('dark') !== undefined;

            if (cookie) {
                this.$cookies.remove('dark');
            } else {
                this.$cookies.set('dark', '1');
            }

            this.dark = !this.dark;
        },
    },
};
