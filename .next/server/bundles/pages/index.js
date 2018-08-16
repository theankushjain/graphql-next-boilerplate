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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Queries/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAuthorsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getBooksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBookMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBookQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_boost__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  {\n    authors {\n      id\n      name\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  {\n    books {\n      id\n      name\n      genre\n    }\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authorId: $authorId) {\n      name\n      id\n    }\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query($id: ID) {\n    book(id: $id) {\n      id\n      name\n      genre\n      author {\n        id\n        name\n        age\n        books {\n          name\n          id\n        }\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var getAuthorsQuery = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_boost__["gql"])(_templateObject);
var getBooksQuery = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_boost__["gql"])(_templateObject2);
var addBookMutation = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_boost__["gql"])(_templateObject3);
var getBookQuery = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_boost__["gql"])(_templateObject4);


/***/ }),

/***/ "./components/AddBook.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Queries_queries__ = __webpack_require__("./Queries/queries.js");
var _jsxFileName = "/Users/ankushjain/Desktop/graphql boilerplate/components/AddBook.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default.a;
}

var AddBook =
/*#__PURE__*/
function (_Component) {
  _inherits(AddBook, _Component);

  function AddBook(props) {
    var _this;

    _classCallCheck(this, AddBook);

    _this = _possibleConstructorReturn(this, (AddBook.__proto__ || Object.getPrototypeOf(AddBook)).call(this, props));
    _this.state = {
      name: "",
      genre: "",
      authorId: " "
    };
    return _this;
  }

  _createClass(AddBook, [{
    key: "displayAuthors",
    value: function displayAuthors() {
      var data = this.props.getAuthorsQuery;

      if (data.loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, "Loding Authors...");
      } else {
        return data.authors.map(function (author) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
            key: author.id,
            value: author.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, author.name);
        });
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
      this.props.addBookMutation({
        variables: {
          name: this.state.name,
          genre: this.state.genre,
          authorId: this.state.authorId
        },
        refetchQueries: [{
          query: __WEBPACK_IMPORTED_MODULE_3__Queries_queries__["d" /* getBooksQuery */]
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        id: "add-book",
        onSubmit: this.submitForm.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Book Name:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Genre:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          return _this2.setState({
            genre: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Author:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            authorId: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "select author"), this.displayAuthors())), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "+"));
    }
  }]);

  return AddBook;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // export default graphql(getAuthorsQuery)(AddBook);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3__Queries_queries__["b" /* getAuthorsQuery */], {
  name: "getAuthorsQuery"
}), Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3__Queries_queries__["a" /* addBookMutation */], {
  name: "addBookMutation"
}))(AddBook));

/***/ }),

/***/ "./components/BookDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Queries_queries__ = __webpack_require__("./Queries/queries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BookList__ = __webpack_require__("./components/BookList.js");
var _jsxFileName = "/Users/ankushjain/Desktop/graphql boilerplate/components/BookDetails.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

var BookDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(BookDetails, _Component);

  function BookDetails() {
    _classCallCheck(this, BookDetails);

    return _possibleConstructorReturn(this, (BookDetails.__proto__ || Object.getPrototypeOf(BookDetails)).apply(this, arguments));
  }

  _createClass(BookDetails, [{
    key: "displayBookDetails",
    value: function displayBookDetails() {
      var book = this.props.data.book;

      if (book) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, book.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, book.genre), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, book.author.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, "All books by this author:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "other-books",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, book.author.books.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }, item.name);
        })));
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, "No book selected...");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "book-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.displayBookDetails());
    }
  }]);

  return BookDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4__Queries_queries__["c" /* getBookQuery */], {
  options: function options(props) {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails));

/***/ }),

/***/ "./components/BookList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Queries_queries__ = __webpack_require__("./Queries/queries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BookDetails__ = __webpack_require__("./components/BookDetails.js");
var _jsxFileName = "/Users/ankushjain/Desktop/graphql boilerplate/components/BookList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

var BookList =
/*#__PURE__*/
function (_Component) {
  _inherits(BookList, _Component);

  function BookList(props) {
    var _this;

    _classCallCheck(this, BookList);

    _this = _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).call(this, props));
    _this.state = {
      selected: null
    };
    return _this;
  }

  _createClass(BookList, [{
    key: "displayBooks",
    value: function displayBooks() {
      var _this2 = this;

      console.log(this.props);

      if (this.props.data.loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, "loading books...");
      } else {
        return this.props.data.books.map(function (book) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: book.id,
            onClick: function onClick(e) {
              _this2.setState({
                selected: book.id
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, book.name);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        id: "book-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.displayBooks())), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "item2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__BookDetails__["a" /* default */], {
        bookId: this.state.selected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })));
    }
  }]);

  return BookList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4__Queries_queries__["d" /* getBooksQuery */])(BookList));

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navbar__ = __webpack_require__("./components/Navbar.js");
var _jsxFileName = "/Users/ankushjain/Desktop/graphql boilerplate/components/Layout.js";





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-49966666"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-49966666"
  }, "My Next GraphQl App"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.scss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-49966666"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    "http-equiv": "Content-Type",
    content: "text/html;charset=UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-49966666"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-49966666"
  }, props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "49966666",
    css: "body{background:#eee;font-family:\"Nunito SemiBold\";}#main h1{color:#444;text-align:center;}#main{padding:0px;box-sizing:border-box;width:60%;height:100%;}#book-list{padding:0;}#book-list li{display:inline-block;margin:12px;padding:10px;border-radius:4px;border:1px solid #880e4f;box-shadow:1px 2px 3px rgba(0,0,0,0.3);cursor:pointer;color:#880e4f;}form{background:#fff;padding:20px;position:fixed;left:0;bottom:0;width:400px;}form .field{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;}form label{text-align:right;padding:6px;}form input,form select{margin:4px 0;padding:6px;box-sizing:border-box;}form button{color:#fff;font-size:2em;background:#ad1457;border:0;padding:0 10px;border-radius:50%;cursor:pointer;position:absolute;bottom:10px;left:10px;}#book-details{position:fixed;top:0;right:0;width:40%;height:100%;background:#ad1457;padding:30px;overflow:auto;box-shadow:-2px -3px 5px rgba(0,0,0,0.3);box-sizing:border-box;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl1QixBQUd5QixBQUtMLEFBS0MsQUFPRixBQUlXLEFBV0wsQUFTSCxBQU1JLEFBTUosQUFNRixBQWFJLFVBdERqQixDQVpvQixBQXNESixDQWpEUSxDQStCUSxBQVlsQixFQW1CTixDQXhFd0IsQUFnQ2pCLENBZUQsSUExQkEsQUFvREosSUFuQmMsQUFNSCxJQXREckIsQUEyQmlCLEFBZWpCLEFBMEJZLElBcERHLENBWEgsS0FnRUUsSUFqQ0UsQ0E5QkYsQUFzQkwsQUEyQkUsRUE1RFgsQUFzQm9CLENBZ0NwQixJQXBCVyxBQXlDVSxFQWRKLEdBakRqQixDQThCQSxHQVBjLElBWmEsSUF1Q1AsRUFjTCxFQXhDZixXQXlDZ0IsR0FkQyxHQXZDMkIsUUFzREUsSUFkMUIsa0JBQ04sU0F4Q0csR0F5Q0wsT0FhWSxHQVp4QixFQXpDZ0IsY0FDaEIsR0FxRGEsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5rdXNoamFpbi9EZXNrdG9wL2dyYXBocWwgYm9pbGVycGxhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TXkgTmV4dCBHcmFwaFFsIEFwcDwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9fbmV4dC9zdGF0aWMvc3R5bGUuc2Nzc1wiIC8+XG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDtjaGFyc2V0PVVURi04XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPE5hdmJhciAvPlxuICAgIDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNlbWlCb2xkXCI7XG4gICAgICB9XG5cbiAgICAgICNtYWluIGgxIHtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgI21haW4ge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI2Jvb2stbGlzdCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgICNib29rLWxpc3QgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODgwZTRmO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICM4ODBlNGY7XG4gICAgICB9XG5cbiAgICAgIGZvcm0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgfVxuXG4gICAgICBmb3JtIC5maWVsZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGZvcm0gbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgfVxuXG4gICAgICBmb3JtIGlucHV0LFxuICAgICAgZm9ybSBzZWxlY3Qge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIGZvcm0gYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYWQxNDU3O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAjYm9vay1kZXRhaWxzIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhZDE0NTc7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiAtMnB4IC0zcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/ankushjain/Desktop/graphql boilerplate/components/Navbar.js";



var Navbar = function Navbar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "My Next GraphQL App"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "About")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BookList__ = __webpack_require__("./components/BookList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AddBook__ = __webpack_require__("./components/AddBook.js");
var _jsxFileName = "/Users/ankushjain/Desktop/graphql boilerplate/pages/index.js";





 //Apollo Client Setup

var client = new __WEBPACK_IMPORTED_MODULE_2_apollo_boost___default.a({
  uri: "http://localhost:4000/graphql"
});

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Welcome to GraphQL Next.js Boilerplate"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Reading List"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BookList__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_AddBook__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "apollo-boost":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map