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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\src\\\\app\\\\index.js: Unexpected token (52:6)\\n\\n\\u001b[0m \\u001b[90m 50 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(\\u001b[32m\\\"render called SERVER/CLIENT\\\"\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 51 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 52 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 53 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mPage\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 54 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mNavbar\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 55 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mSwitch\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4028:15)\\n    at Parser.unexpected (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5343:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6432:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6019:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5998:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5907:21)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5879:21)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5826:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6588:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6388:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6019:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5998:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5907:21)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5879:21)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5826:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5779:21)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7631:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7311:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7277:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7829:23)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7816:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7805:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7042:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7024:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6966:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8208:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8133:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8075:10)\\n    at Parser.parseClassBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8030:12)\\n    at Parser.parseClass (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7980:10)\");\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ })

/******/ });