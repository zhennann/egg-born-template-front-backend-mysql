module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_module_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_module_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_module_css__);


var Vue = void 0;



function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  if (Vue.prototype.$meta.provider === 'framework7') {
    Vue.prototype.$meta.eventHub.$on(Vue.prototype.$meta.constants.events.login, function (_ref) {
      var view = _ref.view,
          options = _ref.options;

      Vue.prototype.$meta.loginParams = { view: view, options: options };
      Vue.prototype.$f7.loginScreen();
    });
    Vue.prototype.$meta.eventHub.$on(Vue.prototype.$meta.constants.events.logout, function () {
      Vue.prototype.$meta.auth.commit('logout');
      Vue.prototype.$f7.loginScreen();
    });
  }if (Vue.prototype.$meta.provider === 'vuerouter') {
    Vue.prototype.$meta.eventHub.$on(Vue.prototype.$meta.constants.events.login, function (_ref2) {
      var redirect = _ref2.redirect;

      Vue.prototype.$meta.options.router.push({ path: '/aa/login/login', query: { redirect: redirect } });
    });
    Vue.prototype.$meta.eventHub.$on(Vue.prototype.$meta.constants.events.logout, function () {
      Vue.prototype.$meta.auth.commit('logout');
      Vue.prototype.$meta.options.router.push({ path: '/aa/login/login', query: { redirect: '/' } });
    });
  }

  return cb({
    routes: __webpack_require__(2).default
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  install: install
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function load(name) {
  return __webpack_require__(3)("./" + name + '.vue').default;
}

/* harmony default export */ __webpack_exports__["default"] = ([{ path: '/login', component: load('login') }]);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login.vue": 4,
	"./mock.vue": 5
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@2.4.2\n- vue-template-compiler@2.4.4\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (/Users/wind/Documents/data/github/egg-born-starter-hello/src/module/aa-login-sync/node_modules/vue-template-compiler/index.js:8:9)\n    at Module._compile (module.js:573:30)\n    at Object.Module._extensions..js (module.js:584:10)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)\n    at Module.require (module.js:517:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Users/wind/Documents/data/github/egg-born-starter-hello/src/module/aa-login-sync/node_modules/vue-loader/lib/parser.js:1:78)\n    at Module._compile (module.js:573:30)\n    at Object.Module._extensions..js (module.js:584:10)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)\n    at Module.require (module.js:517:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Users/wind/Documents/data/github/egg-born-starter-hello/src/module/aa-login-sync/node_modules/vue-loader/lib/loader.js:3:13)\n    at Module._compile (module.js:573:30)\n    at Object.Module._extensions..js (module.js:584:10)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@2.4.2\n- vue-template-compiler@2.4.4\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (/Users/wind/Documents/data/github/egg-born-starter-hello/src/module/aa-login-sync/node_modules/vue-template-compiler/index.js:8:9)\n    at Module._compile (module.js:573:30)\n    at Object.Module._extensions..js (module.js:584:10)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)\n    at Module.require (module.js:517:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Users/wind/Documents/data/github/egg-born-starter-hello/src/module/aa-login-sync/node_modules/vue-loader/lib/parser.js:1:78)\n    at Module._compile (module.js:573:30)\n    at Object.Module._extensions..js (module.js:584:10)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)\n    at Module.require (module.js:517:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Users/wind/Documents/data/github/egg-born-starter-hello/src/module/aa-login-sync/node_modules/vue-loader/lib/loader.js:3:13)\n    at Module._compile (module.js:573:30)\n    at Object.Module._extensions..js (module.js:584:10)\n    at Module.load (module.js:507:32)\n    at tryModuleLoad (module.js:470:12)\n    at Function.Module._load (module.js:462:3)");

/***/ })
/******/ ]);
//# sourceMappingURL=front.js.map