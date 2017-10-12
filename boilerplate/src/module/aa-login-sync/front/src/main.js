/*
* @Author: zhennann
* @Date:   2017-09-08 21:31:56
* @Last Modified by:   zhennann
* @Last Modified time: 2017-09-22 21:06:22
*/

let Vue;

// import css
// eslint-disable-next-line
import CSS from './css/module.css';

// install
function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  if (Vue.prototype.$meta.provider === 'framework7') {
    // subcribe event: login
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constants.events.login, ({ view, options }) => {
        Vue.prototype.$meta.loginParams = { view, options };
        Vue.prototype.$f7.loginScreen();
      });
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constants.events.logout, () => {
        Vue.prototype.$meta.store.commit('auth/logout');
        Vue.prototype.$f7.loginScreen();
      });
  } if (Vue.prototype.$meta.provider === 'vuerouter') {
    // subcribe event: login
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constants.events.login, ({ redirect }) => {
        Vue.prototype.$meta.options.router.push({ path: '/aa/login/login', query: { redirect } });
      });
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constants.events.logout, () => {
        Vue.prototype.$meta.store.commit('auth/logout');
        Vue.prototype.$meta.options.router.push({ path: '/aa/login/login', query: { redirect: '/' } });
      });
  }

  return cb({
    routes: require('./routes.js').default,
  });
}

// export
export default {
  install,
};
