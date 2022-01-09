// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import VueAnnouncer from '@vue-a11y/announcer';

export default ({ app }) => {
    Vue.use(VueAnnouncer, { complementRoute: 'ist geladen' }, app.router);
};
