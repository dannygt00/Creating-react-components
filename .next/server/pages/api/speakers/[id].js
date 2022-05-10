(function() {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import speakerData from '../../../src/SpeakerData';



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(speakerData,null,2));
  const method = req === null || req === void 0 ? void 0 : req.method;
  const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);
  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");

  switch (method) {
    case "POST":
      await postMethod();
      break;

    case "PUT":
      await putMethod();
      break;

    case "DELETE":
      await deleteMethod();
      break;

    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newSpeakersArray = speakers.map(function (rec) {
          return rec.id == id ? recordFromBody : rec;
        });
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`PUT /api/speakers/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`PUT /api/speakers/${id}  status: 500 unexpected error`);
      console.log(`PUT /api/speakers/${id}  status: 200`, e);
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newSpeakersArray = speakers.filter(function (rec) {
          return rec.id != id;
        });
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(speakers.find(rec => rec.id == id), null, 2));
        console.log(`DELETE /api/speakers/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`DELETE /api/speakers/${id}  status: 500 unexpected error`);
      console.log(`DELETE /api/speakers/${id}  status: 200`, e);
    }
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const idNew = speakers.reduce((accumulator, currentValue) => {
          const idCurrent = parseInt(currentValue.id);
          return idCurrent > accumulator ? idCurrent : accumulator;
        }, 0) + 1;

        const newSpeakerRec = _objectSpread(_objectSpread({}, recordFromBody), {}, {
          id: idNew.toString()
        });

        const newSpeakersArray = [newSpeakerRec, ...speakers];
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newSpeakerRec, null, 2));
        console.log(`POST /api/speakers/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`POST /api/speakers/${id}  status: 500 unexpected error`);
      console.log(`POST /api/speakers/${id}  status: 200`, e);
    }
  }
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50cy1wbHVyYWxzaWdodC1jb3Vyc2UvLi9wYWdlcy9hcGkvc3BlYWtlcnMvW2lkXS5qcyIsIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50cy1wbHVyYWxzaWdodC1jb3Vyc2UvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2Rlc2lnbmluZy1yZWFjdC1jb21wb25lbnRzLXBsdXJhbHNpZ2h0LWNvdXJzZS9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50cy1wbHVyYWxzaWdodC1jb3Vyc2UvZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJ3cml0ZUZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsInJlY29yZEZyb21Cb2R5IiwiYm9keSIsImpzb25GaWxlIiwicGF0aCIsInBvc3RNZXRob2QiLCJwdXRNZXRob2QiLCJkZWxldGVNZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInJlYWRGaWxlRGF0YSIsInNwZWFrZXJzIiwiSlNPTiIsInBhcnNlIiwibmV3U3BlYWtlcnNBcnJheSIsIm1hcCIsInJlYyIsInN0cmluZ2lmeSIsInNldEhlYWRlciIsImUiLCJmaWx0ZXIiLCJmaW5kIiwiaWROZXciLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsImlkQ3VycmVudCIsIm5ld1NwZWFrZXJSZWMiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFnQkMsbUJB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QUFSLENBQWEsc0JBQXFCYixFQUFHLGVBQXJDO0FBQ0g7QUFDSixLQXhCRCxDQXdCRSxPQUFPdUIsQ0FBUCxFQUFVO0FBQ1J6QixTQUFHLENBQ0VZLE1BREwsQ0FDWSxHQURaLEVBRUtDLElBRkwsQ0FFVyxzQkFBcUJYLEVBQUcsZ0NBRm5DO0FBR0FZLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLHNCQUFxQmIsRUFBRyxlQUFyQyxFQUFxRHVCLENBQXJEO0FBQ0g7QUFDSjtBQUNKLEM7Ozs7Ozs7Ozs7O0FDN0hELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9zcGVha2Vycy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vLi4vLi4vc3JjL1NwZWFrZXJEYXRhJztcclxuXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCB3cml0ZUZpbGUgPSBwcm9taXNpZnkoZnMud3JpdGVGaWxlKTtcclxuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJEYXRhLG51bGwsMikpO1xyXG5cclxuICAgIGNvbnN0IG1ldGhvZCA9IHJlcT8ubWV0aG9kO1xyXG4gICAgY29uc3QgaWQgPSBwYXJzZUludChyZXE/LnF1ZXJ5LmlkKTtcclxuICAgIGNvbnN0IHJlY29yZEZyb21Cb2R5ID0gcmVxPy5ib2R5O1xyXG4gICAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XHJcblxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICBhd2FpdCBwb3N0TWV0aG9kKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgYXdhaXQgcHV0TWV0aG9kKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgYXdhaXQgZGVsZXRlTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAxKS5zZW5kKGBNZXRob2QgJHttZXRob2R9IG5vdCBpbXBsZW1lbnRlZGApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTWV0aG9kICR7bWV0aG9kfSBub3QgaW1wbGVtZW50ZWRgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBwdXRNZXRob2QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICAgICAgICAgIGlmICghc3BlYWtlcnMpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDA0XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IHNwZWFrZXJzLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PSBpZCA/IHJlY29yZEZyb21Cb2R5IDogcmVjO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAganNvbkZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzcGVha2VyczogbmV3U3BlYWtlcnNBcnJheSB9LCBudWxsLCAyKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkocmVjb3JkRnJvbUJvZHksIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQVVQgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiAyMDBgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAgICAgICAgIC5zZW5kKGBQVVQgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiA1MDAgdW5leHBlY3RlZCBlcnJvcmApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUFVUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1ldGhvZCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVha2VycyA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICAgICAgICAgICAgaWYgKCFzcGVha2Vycykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcGVha2Vyc0FycmF5ID0gc3BlYWtlcnMuZmlsdGVyKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjLmlkICE9IGlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAganNvbkZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzcGVha2VyczogbmV3U3BlYWtlcnNBcnJheSB9LCBudWxsLCAyKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJzLmZpbmQoKHJlYykgPT4gcmVjLmlkID09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgREVMRVRFIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg1MDApXHJcbiAgICAgICAgICAgICAgICAuc2VuZChgREVMRVRFIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogNTAwIHVuZXhwZWN0ZWQgZXJyb3JgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERFTEVURSAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDIwMGAsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBwb3N0TWV0aG9kKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgICAgICAgICBpZiAoIXNwZWFrZXJzKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkTmV3ID1cclxuICAgICAgICAgICAgICAgICAgICBzcGVha2Vycy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWRDdXJyZW50ID0gcGFyc2VJbnQoY3VycmVudFZhbHVlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkQ3VycmVudCA+IGFjY3VtdWxhdG9yID8gaWRDdXJyZW50IDogYWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCkgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NwZWFrZXJSZWMgPSB7IC4uLnJlY29yZEZyb21Cb2R5LCBpZDogaWROZXcudG9TdHJpbmcoKSB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NwZWFrZXJzQXJyYXkgPSBbbmV3U3BlYWtlclJlYywgLi4uc3BlYWtlcnNdO1xyXG4gICAgICAgICAgICAgICAgd3JpdGVGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25GaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXkgfSwgbnVsbCwgMilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KG5ld1NwZWFrZXJSZWMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQT1NUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg1MDApXHJcbiAgICAgICAgICAgICAgICAuc2VuZChgUE9TVCAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDUwMCB1bmV4cGVjdGVkIGVycm9yYCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQT1NUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=