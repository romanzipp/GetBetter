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
        const dark = !state.dark;

        if (typeof localStorage === 'undefined') {
            return;
        }

        if (!dark) {
            delete localStorage.dark;
        } else {
            localStorage.dark = true;
        }

        console.log('toggle dark to', dark);

        commit('setDark', dark);
    },

    pullDark({ commit }) {
        let dark = false;

        if (typeof localStorage === 'undefined') {
            return;
        }

        try {
            dark = !!localStorage.dark;
        } catch (err) {
            console.log('error retreiving darkmode cookie');
            console.log(err);
        }

        console.log('darkmode', dark);
        commit('setDark', dark);
    },
};
