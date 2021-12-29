exports.ids = ["MovieUseCasesFactory"];
exports.modules = {

/***/ "../../frontend-mv--lib-movies/lib/movie/Repositories/HTTPMovieRepository.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HTTPMovieRepository; });\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MovieRepositoryInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"../../frontend-mv--lib-movies/lib/movie/Repositories/MovieRepositoryInterface.js\");\nvar HTTPMovieRepository=/*#__PURE__*/function(_MovieRepositoryInter){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HTTPMovieRepository,_MovieRepositoryInter);function HTTPMovieRepository(_ref){var _this;var config=_ref.config,fetcher=_ref.fetcher,valueObjectFactory=_ref.valueObjectFactory;_this=_MovieRepositoryInter.call(this)||this;_this._config=config;_this._fetcher=fetcher;_this._valueObjectFactory=valueObjectFactory;return _this;}var _proto=HTTPMovieRepository.prototype;_proto.getMovieList=/*#__PURE__*/function(){var _getMovieList=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(){var _this$_config,API_KEY,BASE_URL,url,_yield$this$_fetcher$,data;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$_config=this._config,API_KEY=_this$_config.API_KEY,BASE_URL=_this$_config.BASE_URL;url=BASE_URL+\"/discover/\"+API_KEY;_context.next=4;return this._fetcher.get(url);case 4:_yield$this$_fetcher$=_context.sent;data=_yield$this$_fetcher$.data;return _context.abrupt(\"return\",this._valueObjectFactory.movieListValueObject(data));case 7:case\"end\":return _context.stop();}}},_callee,this);}));function getMovieList(){return _getMovieList.apply(this,arguments);}return getMovieList;}();return HTTPMovieRepository;}(_MovieRepositoryInterface__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/Repositories/HTTPMovieRepository.js?");

/***/ }),

/***/ "../../frontend-mv--lib-movies/lib/movie/Repositories/MovieRepositoryInterface.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieRepositoryInterface; });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\n// Interface\nvar MovieRepositoryInterface=/*#__PURE__*/function(_Repository){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(MovieRepositoryInterface,_Repository);function MovieRepositoryInterface(){return _Repository.apply(this,arguments)||this;}var _proto=MovieRepositoryInterface.prototype;_proto.getMovieDetails=function getMovieDetails(){// Cuando se ejecuta este error??\n// Cuando no existe en la case de la que extiende\nthrow new Error('[MovieRepository#getMovieDetails] must be implemented');};_proto.getMovieList=function getMovieList(){throw new Error('[MovieRepository#getMovieList] must be implemented');};return MovieRepositoryInterface;}(_s_ui_domain__WEBPACK_IMPORTED_MODULE_1__[\"Repository\"]);\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/Repositories/MovieRepositoryInterface.js?");

/***/ }),

/***/ "../../frontend-mv--lib-movies/lib/movie/Repositories/factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HTTPMovieRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../../frontend-mv--lib-movies/lib/movie/Repositories/HTTPMovieRepository.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../frontend-mv--lib-movies/node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ValueObjects_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"../../frontend-mv--lib-movies/lib/movie/ValueObjects/factory.js\");\n// import {FetcherFactory} from '@s-ui/domain'\nvar MovieRepositoryFactory=function MovieRepositoryFactory(){};// Mirar interfaces, herencia\n// Dos ficheros por repo, interfaz e implementación concreta\nMovieRepositoryFactory.httpMovieRepository=function(_temp){var _ref=_temp===void 0?{}:_temp,config=_ref.config;return new _HTTPMovieRepository__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({config:config,fetcher:axios__WEBPACK_IMPORTED_MODULE_1___default.a,valueObjectFactory:_ValueObjects_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"]// fetcher: FetcherFactory.httpFetcher({config})\n});};/* harmony default export */ __webpack_exports__[\"default\"] = (MovieRepositoryFactory);\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/Repositories/factory.js?");

/***/ }),

/***/ "../../frontend-mv--lib-movies/lib/movie/UseCases/GetMovieListUseCase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GetMovieListUseCase; });\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"../../frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\nvar GetMovieListUseCase=/*#__PURE__*/function(_UseCase){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GetMovieListUseCase,_UseCase);function GetMovieListUseCase(_ref){var _this;var repository=_ref.repository;_this=_UseCase.call(this)||this;_this._repository=repository;return _this;}var _proto=GetMovieListUseCase.prototype;_proto.execute=/*#__PURE__*/function(){var _execute=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(){var movieList;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return this._repository.getMovieList();case 2:movieList=_context.sent;return _context.abrupt(\"return\",movieList.toJSON());case 4:case\"end\":return _context.stop();}}},_callee,this);}));function execute(){return _execute.apply(this,arguments);}return execute;}();return GetMovieListUseCase;}(_s_ui_domain__WEBPACK_IMPORTED_MODULE_3__[\"UseCase\"]);\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/UseCases/GetMovieListUseCase.js?");

/***/ }),

/***/ "../../frontend-mv--lib-movies/lib/movie/UseCases/factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieUseCasesFactory; });\n/* harmony import */ var _GetMovieListUseCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../../frontend-mv--lib-movies/lib/movie/UseCases/GetMovieListUseCase.js\");\n/* harmony import */ var _Repositories_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../frontend-mv--lib-movies/lib/movie/Repositories/factory.js\");\nvar MovieUseCasesFactory=function MovieUseCasesFactory(){};MovieUseCasesFactory.getMovieListUseCase=function(_ref// En factory los métodos siempre estáticos\n){var config=_ref.config;return new _GetMovieListUseCase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({// Aqui podriamos usar un repo alterno, ambos repos tendrian q tener las mismas funciones\nrepository:_Repositories_factory__WEBPACK_IMPORTED_MODULE_1__[\"default\"].httpMovieRepository({config:config})});};\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/UseCases/factory.js?");

/***/ }),

/***/ "../../frontend-mv--lib-movies/lib/movie/ValueObjects/MovieListValueObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieListValueObject; });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _s_ui_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../frontend-mv--lib-movies/node_modules/@s-ui/domain/lib/index.js\");\nvar MovieListValueObject=/*#__PURE__*/function(_ValueObject){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(MovieListValueObject,_ValueObject);function MovieListValueObject(){return _ValueObject.apply(this,arguments)||this;}return MovieListValueObject;}(_s_ui_domain__WEBPACK_IMPORTED_MODULE_1__[\"ValueObject\"]);// No tienen ID, son iguales si es igual su contenido\n\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/ValueObjects/MovieListValueObject.js?");

/***/ }),

/***/ "../../frontend-mv--lib-movies/lib/movie/ValueObjects/factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieValueObjectFactory; });\n/* harmony import */ var _MovieListValueObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../../frontend-mv--lib-movies/lib/movie/ValueObjects/MovieListValueObject.js\");\nvar MovieValueObjectFactory=function MovieValueObjectFactory(){};MovieValueObjectFactory.movieListValueObject=function(data){return new _MovieListValueObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);};\n\n//# sourceURL=webpack:////Users/beatriziglesias/code/pet/frontend-mv--lib-movies/lib/movie/ValueObjects/factory.js?");

/***/ })

};;