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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("function sayhelloprivate(){\n    return 'Hello world ' + arguments[0];\n}\n\nexports.say = function (){\n    console.log(sayhelloprivate('Roger Forner'));\n};\n\n//ENCAPSULAMENT : relacions amb l'exterior. Amagar estat intern dels objectes. Per canviar l'estat (propietats) obliguem a utilitzar funcions\n//SETTER/GETTER => Evitar. No són expressius. Cal? Trobar noms millors.\n//ENCAPSULAMENT: per dissenyar millor codi.  Per evitar code coupling / Acoblament de codi.\n//\n// Dependre d'especificacions/interfícies i no d'implementacions.\n// ENCAPSULAR -> 1) Amagar implementació 2) Definir la interfície -> API Pública\n\n// Si no es posa res la funció és privada.//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9ub2RlX21vZHVsZXMvZGF2aWRtZ2lsby1oZWxsby13b3JsZC1wYWNrYWdlL3NyYy9pbmRleC5qcz9mYWU2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNheWhlbGxvcHJpdmF0ZSgpe1xuICAgIHJldHVybiAnSGVsbG8gd29ybGQgJyArIGFyZ3VtZW50c1swXTtcbn1cblxuZXhwb3J0cy5zYXkgPSBmdW5jdGlvbiAoKXtcbiAgICBjb25zb2xlLmxvZyhzYXloZWxsb3ByaXZhdGUoJ0RhdmlkJykpO1xufTtcblxuLy9FTkNBUFNVTEFNRU5UIDogcmVsYWNpb25zIGFtYiBsJ2V4dGVyaW9yLiBBbWFnYXIgZXN0YXQgaW50ZXJuIGRlbHMgb2JqZWN0ZXMuIFBlciBjYW52aWFyIGwnZXN0YXQgKHByb3BpZXRhdHMpIG9ibGlndWVtIGEgdXRpbGl0emFyIGZ1bmNpb25zXG4vL1NFVFRFUi9HRVRURVIgPT4gRXZpdGFyLiBObyBzw7NuIGV4cHJlc3NpdXMuIENhbD8gVHJvYmFyIG5vbXMgbWlsbG9ycy5cbi8vRU5DQVBTVUxBTUVOVDogcGVyIGRpc3NlbnlhciBtaWxsb3IgY29kaS4gIFBlciBldml0YXIgY29kZSBjb3VwbGluZyAvIEFjb2JsYW1lbnQgZGUgY29kaS5cbi8vXG4vLyBEZXBlbmRyZSBkJ2VzcGVjaWZpY2FjaW9ucy9pbnRlcmbDrWNpZXMgaSBubyBkJ2ltcGxlbWVudGFjaW9ucy5cbi8vIEVOQ0FQU1VMQVIgLT4gMSkgQW1hZ2FyIGltcGxlbWVudGFjacOzIDIpIERlZmluaXIgbGEgaW50ZXJmw61jaWUgLT4gQVBJIFDDumJsaWNhXG5cbi8vIFNpIG5vIGVzIHBvc2EgcmVzIGxhIGZ1bmNpw7Mgw6lzIHByaXZhZGEuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9kYXZpZG1naWxvLWhlbGxvLXdvcmxkLXBhY2thZ2Uvc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

eval("// Javascript Modules\nvar hello = __webpack_require__(0);\n\nhello.say();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2luZGV4LmpzPzhmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSmF2YXNjcmlwdCBNb2R1bGVzXG52YXIgaGVsbG8gPSByZXF1aXJlKCdkYXZpZG1naWxvLWhlbGxvLXdvcmxkLXBhY2thZ2UnKTtcblxuaGVsbG8uc2F5KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);