// eslint-disable-next-line import/no-extraneous-dependencies
import { mapActions } from 'vuex';

export default {

    computed: {
        dark() {
            return this.$store.state.dark;
        },
    },

    methods: {
        ...mapActions([
            'toggleDark',
            'pullDark',
        ]),
    },
};
