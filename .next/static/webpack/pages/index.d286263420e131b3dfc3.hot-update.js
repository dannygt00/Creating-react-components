self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerContext */ "./src/contexts/SpeakerContext.js");
/* harmony import */ var _SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDelete */ "./src/components/SpeakerDelete.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\daramire\\OneDrive - Capgemini\\Documents\\Javascript proj\\pluralsight creating react components\\src\\components\\Speaker.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = Session;

function Sessions() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),
      eventYear = _useContext.eventYear;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext2.speaker;

  var sessions = speaker.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(Sessions, "Mbmdx4PcMD6cs0fOkUGItK70sHk=");

_c2 = Sessions;

function ImageWithFallback(_ref2) {
  _s2();

  var src = _ref2.src,
      props = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["src"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(src),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", _objectSpread(_objectSpread({
    src: imgSrc
  }, props), {}, {
    onError: onError
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 12
  }, this);
}

_s2(ImageWithFallback, "R4UhDpTis3V59uQlUhTj6vAWrfc=");

_c3 = ImageWithFallback;

function SpeakerImage() {
  _s3();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      _useContext3$speaker = _useContext3.speaker,
      id = _useContext3$speaker.id,
      first = _useContext3$speaker.first,
      last = _useContext3$speaker.last;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageWithFallback, {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, this);
}

_s3(SpeakerImage, "mQHCYqVWcKHmENzFV33CY3x+jrY=");

_c4 = SpeakerImage;

function SpeakerFavorite() {
  _s4();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext4.speaker,
      updateRecord = _useContext4.updateRecord;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inTransition = _useState3[0],
      setInTransition = _useState3[1];

  function doneCallback() {
    setInTransition(false);
    console.log("In SpeakerFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
          favorite: !speaker.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
        className: speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

_s4(SpeakerFavorite, "JYNF7jT9pd2MEJCpvqZnBM3xISU=");

_c5 = SpeakerFavorite;

function SpeakerDemographics() {
  _s5();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),
      speaker = _useContext5.speaker;

  var first = speaker.first,
      last = speaker.last,
      bio = speaker.bio,
      company = speaker.company,
      twitterHandle = speaker.twitterHandle,
      favorite = speaker.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 9
  }, this);
}

_s5(SpeakerDemographics, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c6 = SpeakerDemographics;

function Speaker(_ref3) {
  _s6();

  var speaker = _ref3.speaker,
      updateRecord = _ref3.updateRecord,
      insertRecord = _ref3.insertRecord,
      deleteRecord = _ref3.deleteRecord;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),
      showSessions = _useContext6.showSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {
    speaker: speaker,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sessions, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 42
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 9
  }, this);
}

_s6(Speaker, "TltPt07ZHCSa0bZmdBKJaXz9l1w=");

_c7 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "ImageWithFallback");
$RefreshReg$(_c4, "SpeakerImage");
$RefreshReg$(_c5, "SpeakerFavorite");
$RefreshReg$(_c6, "SpeakerDemographics");
$RefreshReg$(_c7, "Speaker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZXZlbnRZZWFyIiwiU3BlYWtlckNvbnRleHQiLCJzcGVha2VyIiwic2Vzc2lvbnMiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwib25FcnJvciIsIlNwZWFrZXJJbWFnZSIsImZpcnN0IiwibGFzdCIsIlNwZWFrZXJGYXZvcml0ZSIsInVwZGF0ZVJlY29yZCIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZmF2b3JpdGUiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJTcGVha2VyIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRztBQUNwRjtBQUNmO0FBQ0EsZUFBZSxnR0FBNEI7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtB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Z2VzL2luZGV4LmQyODYyNjM0MjBlMTMxYjNkZmMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyUHJvdmlkZXIsIFNwZWFrZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJDb250ZXh0XCI7XHJcbmltcG9ydCBTcGVha2VyRGVsZXRlIGZyb20gXCIuL1NwZWFrZXJEZWxldGVcIjtcclxuXHJcbmZ1bmN0aW9uIFNlc3Npb24oeyB0aXRsZSwgcm9vbSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbnMoKSB7XHJcbiAgICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xyXG4gICAgY29uc3Qgc2Vzc2lvbnMgPSBzcGVha2VyLnNlc3Npb25zO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICB7c2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbWFnZVdpdGhGYWxsYmFjayh7IHNyYywgLi4ucHJvcHMgfSkge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkVycm9yKCkge1xyXG4gICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0SW1nU3JjKFwiL2ltYWdlcy9zcGVha2VyLTk5OTk5LmpwZ1wiKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8aW1nIHNyYz17aW1nU3JjfSB7Li4ucHJvcHN9IG9uRXJyb3I9e29uRXJyb3J9IC8+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcclxuICAgIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgPEltYWdlV2l0aEZhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSgpIHtcclxuICAgIGNvbnN0IHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zcGVha2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmZhdm9yaXRlID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKCkge1xyXG4gICAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U3BlYWtlckZhdm9yaXRlIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkge1xyXG4gICAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BlYWtlclByb3ZpZGVyXHJcbiAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgIHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfVxyXG4gICAgICAgICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cclxuICAgICAgICAgICAgZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJEZWxldGUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TcGVha2VyUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJzb3VyY2VSb290IjoiIn0=