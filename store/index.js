export const state = () => ({
    dark: false,
});

export const mutations = {
    setDark(state, dark) {
        state.dark = dark;
    },
};

export const actions = {

    toggleDark({ commit, state }) {
        const prev = state.dark;
        commit('setDark', !prev);

        if (prev) {
            this.$cookies.remove('dark');
        } else {
            this.$cookies.set('dark', '1');
        }
    },

    pullDark({ commit }) {
        commit('setDark', !!this.$cookies.get('dark'));
    },
};
