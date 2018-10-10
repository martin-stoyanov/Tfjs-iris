webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/elliptic/package.json":
/*!********************************************!*\
  !*** ./node_modules/elliptic/package.json ***!
  \********************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, dependencies, description, devDependencies, files, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_args":[["elliptic@6.4.1","/Users/Martin/PycharmProjects/tfjs-iris"]],"_from":"elliptic@6.4.1","_id":"elliptic@6.4.1","_inBundle":false,"_integrity":"sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.4.1","name":"elliptic","escapedName":"elliptic","rawSpec":"6.4.1","saveSpec":null,"fetchSpec":"6.4.1"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz","_spec":"6.4.1","_where":"/Users/Martin/PycharmProjects/tfjs-iris","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.1"};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.ee485facaca2dc5cc79d.hot-update.js.map