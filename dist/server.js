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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\src\\\\server.js: Unexpected token (136:6)\\n\\n  134 | \\n  135 |     let html = ReactDOMServer.renderToString(\\n> 136 |       <Loadable.Capture report={moduleName => modules.push(moduleName)}>\\n      |       ^\\n  137 |          <StaticRouter location={req.url} context={context}>\\n  138 |           <App/>\\n  139 |         </StaticRouter>\\n    at Parser.raise (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4028:15)\\n    at Parser.unexpected (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5343:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6432:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6019:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5998:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5907:21)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5879:21)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5826:21)\\n    at Parser.parseExprListItem (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7111:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6227:22)\\n    at Parser.parseSubscript (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6129:32)\\n    at Parser.parseSubscripts (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6039:19)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6029:17)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5998:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5907:21)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5879:21)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5826:21)\\n    at Parser.parseVar (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7898:26)\\n    at Parser.parseVarStatement (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7728:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7327:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7277:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7829:23)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7816:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7805:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7042:24)\\n    at Parser.parseArrowExpression (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6995:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6607:12)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6388:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6019:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\shlomi.oliel\\\\Desktop\\\\sites\\\\graphql\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5998:21)\");\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ })

/******/ });