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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function Ball(alive, x, y, size, sx, sy) {\n  var _this = this;\n\n  _classCallCheck(this, Ball);\n\n  this.randomColor = function () {\n    return Math.random() * 360;\n  };\n\n  this.update = function () {\n    _this.x = _this.x + _this.sx;\n    _this.y = _this.y + _this.sy;\n  };\n\n  this.destroy = function () {\n    console.log('asdf');\n    _this.alive = 0;\n  };\n\n  this.getX = function () {\n    return _this.x;\n  };\n\n  this.getY = function () {\n    return _this.y;\n  };\n\n  this.render = function () {\n    _this.update();\n\n    var ball = document.createElement('div');\n    ball.className = 'ball';\n    ball.style.top = \"\".concat(_this.y - _this.size / 2, \"px\");\n    ball.style.left = \"\".concat(_this.x - _this.size / 2, \"px\");\n    ball.style.width = \"\".concat(_this.size, \"px\");\n    ball.style.height = \"\".concat(_this.size, \"px\");\n    ball.style.backgroundColor = _this.color;\n    return ball;\n  };\n\n  this.alive = alive;\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.sx = sx;\n  this.sy = sy;\n  this.color = this.randomColor();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/Ball.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize */ \"./src/resize.js\");\n/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar Game = function Game() {\n  var _this = this;\n\n  _classCallCheck(this, Game);\n\n  this.mouseMove = function (event) {\n    _this.mouse.x = event.clientX / _this.game.dataset.gameSizeCoefficient - parseInt(_this.game.dataset.marginLeft.replace('px', ''), 10) / 2 / _this.game.dataset.gameSizeCoefficient;\n    _this.mouse.y = event.clientY / _this.game.dataset.gameSizeCoefficient - parseInt(_this.game.dataset.marginTop.replace('px', ''), 10) / 2 / _this.game.dataset.gameSizeCoefficient;\n  };\n\n  this.mouseClick = function () {\n    _this.balls.forEach(function (ball) {\n      var xDist = ball.x - _this.mouse.x;\n      var yDist = ball.y - _this.mouse.y;\n\n      if (Math.sqrt(xDist * xDist + yDist * yDist) < ball.size) {\n        console.log('clicked');\n        ball.alive = false;\n      }\n    });\n  };\n\n  this.gameRender = function () {\n    requestAnimationFrame(_this.gameRender);\n\n    _this.canvas.clearRect(0, 0, _this.game.width, _this.game.height);\n\n    _this.balls.forEach(function (ball) {\n      if (ball.alive === true) {\n        _this.canvas.beginPath();\n\n        _this.canvas.arc(ball.getX(), ball.getY(), ball.size, 0, 2 * Math.PI);\n\n        _this.canvas.fillStyle = \"hsl(\".concat(ball.color, \", 50%, 50%)\");\n\n        _this.canvas.fill();\n      }\n    });\n  };\n\n  this.game = document.querySelector('#game');\n  this.balls = [new _Ball__WEBPACK_IMPORTED_MODULE_3__[\"default\"](true, 1920 / 2, 1080 / 2, 100, 0, 0)];\n  this.canvas = this.game.getContext('2d');\n  this.game.addEventListener('mousemove', this.mouseMove, false);\n  this.game.addEventListener('click', this.mouseClick, false);\n  this.mouse = {\n    x: 0,\n    y: 0\n  };\n};\n\nvar game = new Game();\ngame.gameRender();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/resize.js":
/*!***********************!*\
  !*** ./src/resize.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var gameCanvas = document.querySelector('#game');\n\nfunction resize() {\n  if (window.innerHeight * 1.7778 > window.innerWidth) {\n    var gameSizeCoefficent = window.innerWidth / 1920;\n    gameCanvas.style.transform = \"scale(\".concat(gameSizeCoefficent, \")\");\n    gameCanvas.style.marginTop = \"\".concat((window.innerHeight - gameCanvas.offsetHeight * gameSizeCoefficent) / 2, \"px\");\n    gameCanvas.setAttribute('data-margin-top', window.innerHeight - gameCanvas.offsetHeight * gameSizeCoefficent);\n    gameCanvas.style.marginLeft = '0px';\n    gameCanvas.setAttribute('data-margin-left', '0px');\n    gameCanvas.setAttribute('data-game-size-coefficient', gameSizeCoefficent);\n  } else {\n    var _gameSizeCoefficent = window.innerHeight / 1080;\n\n    gameCanvas.style.transform = \"scale(\".concat(_gameSizeCoefficent, \")\");\n    gameCanvas.style.marginLeft = \"\".concat((window.innerWidth - gameCanvas.offsetWidth * _gameSizeCoefficent) / 2, \"px\");\n    gameCanvas.setAttribute('data-margin-left', window.innerWidth - gameCanvas.offsetWidth * _gameSizeCoefficent);\n    gameCanvas.style.marginTop = '0px';\n    gameCanvas.setAttribute('data-margin-top', '0px');\n    gameCanvas.setAttribute('data-game-size-coefficient', _gameSizeCoefficent);\n  }\n}\n\nwindow.addEventListener('resize', resize);\nresize();\n\n//# sourceURL=webpack:///./src/resize.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/reset.css?");

/***/ })

/******/ });