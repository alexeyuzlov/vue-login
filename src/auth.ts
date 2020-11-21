import Vue from 'vue';

export const authState = Vue.observable({loggedIn: !!localStorage.getItem('token')});
