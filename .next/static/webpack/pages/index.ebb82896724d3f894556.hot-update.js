self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestRest.js":
/*!*************************************!*\
  !*** ./src/hooks/useRequestRest.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();



var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};
var restUrl = "api/speakers";

function useRequestRest() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var result;
        return C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get(restUrl);

              case 3:
                result = _context.sent;
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                setData(newRecords);
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().put("".concat(restUrl, "/").concat(record.id), record);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("error thrown inside delayFunction", _context2.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return _delayFunction.apply(this, arguments);
    }

    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.filter(function (rec) {
      return rec.id != record.id;
    });

    function delayFunction() {
      return _delayFunction2.apply(this, arguments);
    }

    function _delayFunction2() {
      _delayFunction2 = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        return C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                setData(newRecords);
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().delete("".concat(restUrl, "/").concat(record.id), record);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log("error thrown inside delayFunction", _context3.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));
      return _delayFunction2.apply(this, arguments);
    }

    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = [record].concat((0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data));

    function delayFunction() {
      return _delayFunction3.apply(this, arguments);
    }

    function _delayFunction3() {
      _delayFunction3 = (0,C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
        return C_Users_daramire_OneDrive_Capgemini_Documents_Javascript_proj_pluralsight_creating_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                setData(newRecords);
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post("".concat(restUrl, "/99999"), record);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log("error thrown inside delayFunction", _context4.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      return _delayFunction3.apply(this, arguments);
    }

    delayFunction();
  }

  return {
    data: data,
    requestStatus: requestStatus,
    error: error,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord
  };
}

_s(useRequestRest, "uvvVBilWoUeFPXc52bF5AHAvR6Y=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestRest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RSZXN0LmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwicmVzdFVybCIsInVzZVJlcXVlc3RSZXN0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJheGlvcyIsInJlc3VsdCIsInVwZGF0ZVJlY29yZCIsInJlY29yZCIsImRvbmVDYWxsYmFjayIsIm9yaWdpbmFsUmVjb3JkcyIsIm5ld1JlY29yZHMiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlUmVjb3JkIiwiZmlsdGVyIiwiaW5zZXJ0UmVjb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBRztBQUMxQkMsU0FBTyxFQUFFLFNBRGlCO0FBRTFCQyxTQUFPLEVBQUUsU0FGaUI7QUFHMUJDLFNBQU8sRUFBRTtBQUhpQixDQUF2QjtBQU1QLElBQU1DLE9BQU8sR0FBRyxjQUFoQjs7QUFFQSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBQUEsbUJBRW9CRiwrQ0FBUSxDQUFDTixjQUFjLENBQUNDLE9BQWhCLENBRjVCO0FBQUEsTUFFZlEsYUFGZTtBQUFBLE1BRUFDLGdCQUZBOztBQUFBLG1CQUdJSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIWjtBQUFBLE1BR2ZLLEtBSGU7QUFBQSxNQUdSQyxRQUhROztB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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBGQUlMVVJFOiBcImZhaWx1cmVcIixcclxufTtcclxuXHJcbmNvbnN0IHJlc3RVcmwgPSBcImFwaS9zcGVha2Vyc1wiO1xyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdFJlc3QoKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHJlc3RVcmwpO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZC5pZCA/IHJlY29yZCA6IHJlYztcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtyZXN0VXJsfS8ke3JlY29yZC5pZH1gLCByZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICAgICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCAhPSByZWNvcmQuaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7cmVzdFVybH0vJHtyZWNvcmQuaWR9YCwgcmVjb3JkKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zZXJ0UmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgICAgIGNvbnN0IG5ld1JlY29yZHMgPSBbcmVjb3JkLCAuLi5kYXRhXTtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7cmVzdFVybH0vOTk5OTlgLCByZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICAgICAgaW5zZXJ0UmVjb3JkLFxyXG4gICAgICAgIGRlbGV0ZVJlY29yZCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RSZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=