/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(1)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/widget-latestcomments.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1cdad1e8/widget-latestcomments.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    section: {
	        label: 'Settings'
	    },
	    replace: false,
	    props: ['widget', 'config', 'form'],
	    data: function data() {
	        return {};
	    },
	    created: function created() {
	        this.$options.partials = this.$parent.$options.partials;
	        this.$set('widget.data', _.merge({
	            count: 5,
	            showmeta: true,
	            showcomment: true,
	            truncatecomment: 150
	        }, this.widget.data));
	    }
	};
	window.Widgets.components['spqr-latestcomments:settings'] = module.exports;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"uk-grid pk-grid-large pk-width-sidebar-large\" data-uk-grid-margin>\n    <div class=\"pk-width-content uk-form-horizontal\">\n        <div class=\"uk-form-row\">\n            <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\" v-model=\"widget.title\"\n                       v-validate:required>\n                <p class=\"uk-form-help-block uk-text-danger\"\n                   v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p>\n            </div>\n        </div>\n        <div class=\"uk-form-row\">\n            <label for=\"form-count\" class=\"uk-form-label\">{{ 'Count' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-count\" class=\"uk-form-width-small uk-text-right\" type=\"number\" name=\"count\"\n                       v-model=\"widget.data.count\" min=\"0\" number>\n            </div>\n        </div>\n        <div class=\"uk-form-row\">\n            <label for=\"form-showmeta\" class=\"uk-form-label\">{{ 'Show Meta' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <input id=\"form-showmeta\" type=\"checkbox\" v-model=\"widget.data.showmeta\">\n            </div>\n        </div>\n        <div class=\"uk-form-row\">\n            <label for=\"form-showcomment\" class=\"uk-form-label\">{{ 'Show Comment' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <input id=\"form-showcomment\" type=\"checkbox\" v-model=\"widget.data.showcomment\">\n            </div>\n        </div>\n        <div class=\"uk-form-row\" v-if=\"widget.data.showcomment\">\n            <label for=\"form-truncatecomment\" class=\"uk-form-label\">{{ 'Truncate Comment' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-truncatecomment\" class=\"uk-form-width-small uk-text-right\" type=\"number\" name=\"truncatecomment\"\n                       v-model=\"widget.data.truncatecomment\" min=\"0\" number>\n            </div>\n        </div>\n    </div>\n    <div class=\"pk-width-sidebar\">\n        <partial name=\"settings\"></partial>\n    </div>\n</div>\n\n";

/***/ }
/******/ ]);