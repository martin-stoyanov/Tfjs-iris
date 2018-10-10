module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/iris-testing.js":
/*!******************************!*\
  !*** ./data/iris-testing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var irisTesting = [{
  "sepal_length": 5.4,
  "sepal_width": 3.9,
  "petal_length": 1.7,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.9,
  "sepal_width": 3,
  "petal_length": 5.1,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.9,
  "petal_length": 4.2,
  "petal_width": 1.3,
  "species": "versicolor"
}];
/* harmony default export */ __webpack_exports__["default"] = (irisTesting);

/***/ }),

/***/ "./data/iris-training.js":
/*!*******************************!*\
  !*** ./data/iris-training.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var iris = [{
  "sepal_length": 5.1,
  "sepal_width": 3.5,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.7,
  "sepal_width": 3.2,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.6,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.4,
  "petal_length": 1.4,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.4,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.4,
  "sepal_width": 2.9,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.7,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3.4,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3,
  "petal_length": 1.4,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 4.3,
  "sepal_width": 3,
  "petal_length": 1.1,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5.8,
  "sepal_width": 4,
  "petal_length": 1.2,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.7,
  "sepal_width": 4.4,
  "petal_length": 1.5,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.9,
  "petal_length": 1.3,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.5,
  "petal_length": 1.4,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.7,
  "sepal_width": 3.8,
  "petal_length": 1.7,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.8,
  "petal_length": 1.5,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.4,
  "petal_length": 1.7,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.7,
  "petal_length": 1.5,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.6,
  "petal_length": 1,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.3,
  "petal_length": 1.7,
  "petal_width": 0.5,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3.4,
  "petal_length": 1.9,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.4,
  "petal_length": 1.6,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.2,
  "sepal_width": 3.5,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.2,
  "sepal_width": 3.4,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.7,
  "sepal_width": 3.2,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3.1,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.4,
  "petal_length": 1.5,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.2,
  "sepal_width": 4.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5.5,
  "sepal_width": 4.2,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.2,
  "petal_length": 1.2,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.5,
  "sepal_width": 3.5,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 4.4,
  "sepal_width": 3,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.4,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.5,
  "petal_length": 1.3,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 4.5,
  "sepal_width": 2.3,
  "petal_length": 1.3,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 4.4,
  "sepal_width": 3.2,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.5,
  "petal_length": 1.6,
  "petal_width": 0.6,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.8,
  "petal_length": 1.9,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3,
  "petal_length": 1.4,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.8,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.2,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.3,
  "sepal_width": 3.7,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.3,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 7,
  "sepal_width": 3.2,
  "petal_length": 4.7,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 6.4,
  "sepal_width": 3.2,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.1,
  "petal_length": 4.9,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.3,
  "petal_length": 4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.5,
  "sepal_width": 2.8,
  "petal_length": 4.6,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.8,
  "petal_length": 4.5,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 3.3,
  "petal_length": 4.7,
  "petal_width": 1.6,
  "species": "versicolor"
}, {
  "sepal_length": 4.9,
  "sepal_width": 2.4,
  "petal_length": 3.3,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 6.6,
  "sepal_width": 2.9,
  "petal_length": 4.6,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.2,
  "sepal_width": 2.7,
  "petal_length": 3.9,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5,
  "sepal_width": 2,
  "petal_length": 3.5,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.9,
  "sepal_width": 3,
  "petal_length": 4.2,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 2.2,
  "petal_length": 4,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.9,
  "petal_length": 4.7,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.9,
  "petal_length": 3.6,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.1,
  "petal_length": 4.4,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 3,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 4.1,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 6.2,
  "sepal_width": 2.2,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.5,
  "petal_length": 3.9,
  "petal_width": 1.1,
  "species": "versicolor"
}, {
  "sepal_length": 5.9,
  "sepal_width": 3.2,
  "petal_length": 4.8,
  "petal_width": 1.8,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.8,
  "petal_length": 4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.5,
  "petal_length": 4.9,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.8,
  "petal_length": 4.7,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.9,
  "petal_length": 4.3,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.6,
  "sepal_width": 3,
  "petal_length": 4.4,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 6.8,
  "sepal_width": 2.8,
  "petal_length": 4.8,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3,
  "petal_length": 5,
  "petal_width": 1.7,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 2.9,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.6,
  "petal_length": 3.5,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.4,
  "petal_length": 3.8,
  "petal_width": 1.1,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.4,
  "petal_length": 3.7,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 3.9,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 2.7,
  "petal_length": 5.1,
  "petal_width": 1.6,
  "species": "versicolor"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 3.4,
  "petal_length": 4.5,
  "petal_width": 1.6,
  "species": "versicolor"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.1,
  "petal_length": 4.7,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.3,
  "petal_length": 4.4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 3,
  "petal_length": 4.1,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.5,
  "petal_length": 4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.6,
  "petal_length": 4.4,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 3,
  "petal_length": 4.6,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.6,
  "petal_length": 4,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 5,
  "sepal_width": 2.3,
  "petal_length": 3.3,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.7,
  "petal_length": 4.2,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 3,
  "petal_length": 4.2,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6.2,
  "sepal_width": 2.9,
  "petal_length": 4.3,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.1,
  "sepal_width": 2.5,
  "petal_length": 3,
  "petal_width": 1.1,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.8,
  "petal_length": 4.1,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 3.3,
  "petal_length": 6,
  "petal_width": 2.5,
  "species": "virginica"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 5.1,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 7.1,
  "sepal_width": 3,
  "petal_length": 5.9,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.9,
  "petal_length": 5.6,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3,
  "petal_length": 5.8,
  "petal_width": 2.2,
  "species": "virginica"
}, {
  "sepal_length": 7.6,
  "sepal_width": 3,
  "petal_length": 6.6,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 4.9,
  "sepal_width": 2.5,
  "petal_length": 4.5,
  "petal_width": 1.7,
  "species": "virginica"
}, {
  "sepal_length": 7.3,
  "sepal_width": 2.9,
  "petal_length": 6.3,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 2.5,
  "petal_length": 5.8,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 7.2,
  "sepal_width": 3.6,
  "petal_length": 6.1,
  "petal_width": 2.5,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3.2,
  "petal_length": 5.1,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.7,
  "petal_length": 5.3,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 6.8,
  "sepal_width": 3,
  "petal_length": 5.5,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.5,
  "petal_length": 5,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.8,
  "petal_length": 5.1,
  "petal_width": 2.4,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 3.2,
  "petal_length": 5.3,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3,
  "petal_length": 5.5,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 3.8,
  "petal_length": 6.7,
  "petal_width": 2.2,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 2.6,
  "petal_length": 6.9,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6,
  "sepal_width": 2.2,
  "petal_length": 5,
  "petal_width": 1.5,
  "species": "virginica"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.2,
  "petal_length": 5.7,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.8,
  "petal_length": 4.9,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 2.8,
  "petal_length": 6.7,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.7,
  "petal_length": 4.9,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.3,
  "petal_length": 5.7,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 7.2,
  "sepal_width": 3.2,
  "petal_length": 6,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.2,
  "sepal_width": 2.8,
  "petal_length": 4.8,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.1,
  "sepal_width": 3,
  "petal_length": 4.9,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.8,
  "petal_length": 5.6,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 7.2,
  "sepal_width": 3,
  "petal_length": 5.8,
  "petal_width": 1.6,
  "species": "virginica"
}, {
  "sepal_length": 7.4,
  "sepal_width": 2.8,
  "petal_length": 6.1,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 7.9,
  "sepal_width": 3.8,
  "petal_length": 6.4,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.8,
  "petal_length": 5.6,
  "petal_width": 2.2,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.8,
  "petal_length": 5.1,
  "petal_width": 1.5,
  "species": "virginica"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.6,
  "petal_length": 5.6,
  "petal_width": 1.4,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 3,
  "petal_length": 6.1,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 3.4,
  "petal_length": 5.6,
  "petal_width": 2.4,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 3.1,
  "petal_length": 5.5,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6,
  "sepal_width": 3,
  "petal_length": 4.8,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.1,
  "petal_length": 5.4,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.1,
  "petal_length": 5.6,
  "petal_width": 2.4,
  "species": "virginica"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.1,
  "petal_length": 5.1,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 5.1,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 6.8,
  "sepal_width": 3.2,
  "petal_length": 5.9,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.3,
  "petal_length": 5.7,
  "petal_width": 2.5,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3,
  "petal_length": 5.2,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.5,
  "petal_length": 5,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3,
  "petal_length": 5.2,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.2,
  "sepal_width": 3.4,
  "petal_length": 5.4,
  "petal_width": 2.3,
  "species": "virginica"
}];
/* harmony default export */ __webpack_exports__["default"] = (iris);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "@tensorflow/tfjs");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_iris_training__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/iris-training */ "./data/iris-training.js");
/* harmony import */ var _data_iris_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/iris-testing */ "./data/iris-testing.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/tfjs-iris/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var trainingData = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](_data_iris_training__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (item) {
        return [item.sepal_length, item.sepal_width, item.petal_length, item.petal_width];
      }));
      var outputData = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](_data_iris_training__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (item) {
        return [item.species === 'setosa' ? 1 : 0, item.species === 'virginica' ? 1 : 0, item.species === 'versicolor' ? 1 : 0];
      }));
      var testingData = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](_data_iris_testing__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item) {
        return [item.sepal_length, item.sepal_width, item.petal_length, item.petal_width];
      }));
      var model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sequential"]();
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
        inputShape: [4],
        activation: "sigmoid",
        units: 5
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
        inputShape: [5],
        activation: "sigmoid",
        units: 3
      }));
      model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
        activation: "sigmoid",
        units: 3
      }));
      model.compile({
        loss: "meanSquaredError",
        optimizer: _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["train"].adam(0.06)
      });
      var startTime = Date.now();
      model.fit(trainingData, outputData, {
        epochs: 100
      }).then(function (history) {
        console.log(history);
        model.predict(testingData).print();
      });
      console.log(_data_iris_testing__WEBPACK_IMPORTED_MODULE_3__["default"]);
      console.log(history);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@tensorflow/tfjs":
/*!***********************************!*\
  !*** external "@tensorflow/tfjs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tensorflow/tfjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map