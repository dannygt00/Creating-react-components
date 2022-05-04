self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\daramire\\OneDrive - Capgemini\\Documents\\Javascript proj\\pluralsight creating react components\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return delay(2000);

              case 2:
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  });

  function _onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id;
    });

    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: speakersData.map(function (speaker) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_4__.default, {
          speaker: speaker,
          showSessions: showSessions,
          onFavoriteToggle: function onFavoriteToggle() {
            _onFavoriteToggle(speaker.id);
          }
        }, speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

_s(SpeakersList, "Zlrz+J4Z0zDc4Jcoslr5YWQllw0=");

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInVzZVN0YXRlIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBRUlDLCtDQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFN0JDLFlBRjZCO0FBQUEsTUFFZkMsZUFGZTs7QUFJcEMsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBRUdDLFNBRkg7QUFBQTtBQUFBOztBQUFBO0FBQUEsNlpBRVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1VOLEtBQUssQ0FBQyxJQUFELENBRGY7O0FBQUE7QUFFSUQsK0JBQWUsQ0FBQ1EsOENBQUQsQ0FBZjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZZO0FBQUE7QUFBQTs7QUFPWkQsYUFBUztBQUVaLEdBVFEsQ0FBVDs7QUFXQSxXQUFTRSxpQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUIsUUFBTUMsbUJBQW1CLEdBQUdaLFlBQVksQ0FBQ2EsSUFBYixDQUFrQixVQUFVQyxHQUFWLEVBQWU7QUFDekQsYUFBT0EsR0FBRyxDQUFDSCxFQUFYO0FBQ0gsS0FGMkIsQ0FBNUI7O0FBR0EsUUFBTUksaUJBQWlCLG1DQUNoQkgsbUJBRGdCO0FBRW5CSSxjQUFRLEVBQUUsQ0FBQ0osbUJBQW1CLENBQUNJO0FBRlosTUFBdkI7O0FBSUEsUUFBTUMsZUFBZSxHQUFHakIsWUFBWSxDQUFDa0IsR0FBYixDQUFpQixVQUFVSixHQUFWLEVBQWU7QUFDcEQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGlCQUFoQixHQUFvQ0QsR0FBM0M7QUFDSCxLQUZ1QixDQUF4QjtBQUlBYixtQkFBZSxDQUFDZ0IsZUFBRCxDQUFmO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0tqQixZQUFZLENBQUNrQixHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDakMsNEJBQ0ksOERBQUMsNkNBQUQ7QUFFSSxpQkFBTyxFQUFFQSxPQUZiO0FBR0ksc0JBQVksRUFBRXJCLFlBSGxCO0FBSUksMEJBQWdCLEVBQUUsNEJBQU07QUFDcEJZLDZCQUFnQixDQUFDUyxPQUFPLENBQUNSLEVBQVQsQ0FBaEI7QUFDSDtBQU5MLFdBQ1NRLE9BQU8sQ0FBQ1IsRUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESjtBQVVILE9BWEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztHQWxEUWQsWTs7S0FBQUEsWTtBQW9EVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMmI4NzNlYjZmZjkzYmEzZjUxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcclxuXHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDAwKVxyXG4gICAgICAgICAgICBzZXRTcGVha2Vyc0RhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxheUZ1bmMoKTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcclxuICAgICAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=