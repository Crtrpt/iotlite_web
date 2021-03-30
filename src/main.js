import Vue from 'vue';
import routes from './route/index';
import Vuex from 'vuex';
import store from './store';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import lang from './i18n';
import VueLoading from 'vue-loading-template';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import mqttClient from "./api/mqttClient";

import dateUtils from './utils/DateUtils';

Vue.use(dateUtils);

Vue.use(VueLoading);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/main.css';
import './assets/css/error.css';
import './assets/css/dash.css';
import "./assets/css/structure.css";
import "./assets/css/switch.css";
import "./assets/css/breadcrumb.css";
import "./assets/css/custom-modal.css";
import "./assets/css/custom-pagination.css";
import "./assets/css/custom-list-group.css";
import "./assets/css/tab.css";
import "./assets/css/vue-treeselect.css";

const axios = require('axios');

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

Vue.use(Vuex);

Vue.config.productionTip = true;

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages: lang,
    fallbackLocale: 'zh',
});

const loadedLanguages = ['zh']; // 我们的预装默认语言

function setI18nLanguage (lang) {
    i18n.locale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

export function loadLanguageAsync(lang) {
    // 如果语言相同
    if (i18n.locale === lang) {
        return Promise.resolve(setI18nLanguage(lang));
    }

    // 如果语言已经加载
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(lang));
    }

    // 如果尚未加载语言
    return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/messages/${lang}.js`).then(
        messages => {
            i18n.setLocaleMessage(lang, messages.default);
            loadedLanguages.push(lang);
            return setI18nLanguage(lang);
        }
    );
}

router.beforeEach((to, from, next) => {
    var lang = to.params.lang;
    if (lang===undefined) {
        lang="zh";
    }
    loadLanguageAsync(lang).then(() => next());

    if(to.name===from.name){
        console.log("全局导航守卫");
    }else{
        next();
    }

});

new Vue({
    i18n,
    store,
    router:router
}).$mount('#app');
