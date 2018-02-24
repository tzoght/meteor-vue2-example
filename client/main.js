// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import { Accounts } from 'meteor/accounts-base'
import router from './router'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

// Main app
import App from '/client/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
    router,
  }).$mount('app');
});
