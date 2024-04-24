"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer/index.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _components_Metatags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Metatags */ \"./components/Metatags/index.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3modal/ethereum */ \"./node_modules/@web3modal/ethereum/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n\n\n\n\n\n\n\n\n\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygon\n];\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__.walletConnectProvider)({\n        projectId: \"2e603b4827e59dd1a715066175aee2e8\"\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__.modalConnectors)({\n        projectId: \"2e603b4827e59dd1a715066175aee2e8\",\n        version: \"1\",\n        appName: \"web3Modal\",\n        chains\n    }),\n    provider\n});\n// Web3Modal Ethereum Client\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__.EthereumClient(wagmiClient, chains);\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-100\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {\n                client: wagmiClient,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Metatags__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFDSTtBQUNmO0FBRVk7QUFTYjtBQUlzQztBQUVUO0FBQzFELE1BQU1hLFNBQVM7SUFBQ0gsa0RBQVFBO0lBQUVDLGlEQUFPQTtJQUFFQyxpREFBT0E7Q0FBQztBQUMzQyxNQUFNLEVBQUVFLFNBQVEsRUFBRSxHQUFHUCxzREFBZUEsQ0FBQ00sUUFBUTtJQUMzQ1AsMEVBQXFCQSxDQUFDO1FBQUVTLFdBQVc7SUFBbUM7Q0FDdkU7QUFFRCxNQUFNQyxjQUFjUixtREFBWUEsQ0FBQztJQUMvQlMsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZYixvRUFBZUEsQ0FBQztRQUMxQlUsV0FBVztRQUNYSSxTQUFTO1FBQ1RDLFNBQVM7UUFDVFA7SUFDRjtJQUNBQztBQUNGO0FBRUEsNEJBQTRCO0FBQzVCLE1BQU1PLGlCQUFpQixJQUFJakIsK0RBQWNBLENBQUNZLGFBQWFIO0FBQ3hDLFNBQVNTLElBQUksS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFsQztJQUMxQixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNsQiw4Q0FBV0E7Z0JBQUNtQixRQUFRWjs7a0NBQ25CLDhEQUFDZiwwREFBTUE7Ozs7O2tDQUNQLDhEQUFDQyw0REFBUUE7Ozs7O2tDQUNULDhEQUFDcUI7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O2tDQUN4Qiw4REFBQ3JCLG9EQUFPQTs7Ozs7a0NBQ1IsOERBQUNILDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2YsQ0FBQztLQWR1QnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE1ldGF0YWdzIGZyb20gXCJAL2NvbXBvbmVudHMvTWV0YXRhZ3NcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJ1xuXG5cblxuaW1wb3J0IHtcbiAgRXRoZXJldW1DbGllbnQsXG4gIG1vZGFsQ29ubmVjdG9ycyxcbiAgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLFxufSBmcm9tIFwiQHdlYjNtb2RhbC9ldGhlcmV1bVwiO1xuXG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tIFwiQHdlYjNtb2RhbC9yZWFjdFwiO1xuXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcblxuaW1wb3J0IHsgYXJiaXRydW0sIG1haW5uZXQsIHBvbHlnb24gfSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5jb25zdCBjaGFpbnMgPSBbYXJiaXRydW0sIG1haW5uZXQsIHBvbHlnb25dO1xuY29uc3QgeyBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKGNoYWlucywgW1xuICB3YWxsZXRDb25uZWN0UHJvdmlkZXIoeyBwcm9qZWN0SWQ6IFwiMmU2MDNiNDgyN2U1OWRkMWE3MTUwNjYxNzVhZWUyZThcIiB9KSxcbl0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiBtb2RhbENvbm5lY3RvcnMoe1xuICAgIHByb2plY3RJZDogXCIyZTYwM2I0ODI3ZTU5ZGQxYTcxNTA2NjE3NWFlZTJlOFwiLFxuICAgIHZlcnNpb246IFwiMVwiLCAvLyBvciBcIjJcIlxuICAgIGFwcE5hbWU6IFwid2ViM01vZGFsXCIsXG4gICAgY2hhaW5zLFxuICB9KSxcbiAgcHJvdmlkZXIsXG59KTtcblxuLy8gV2ViM01vZGFsIEV0aGVyZXVtIENsaWVudFxuY29uc3QgZXRoZXJldW1DbGllbnQgPSBuZXcgRXRoZXJldW1DbGllbnQod2FnbWlDbGllbnQsIGNoYWlucyk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxtYWluID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTEwMFwiPlxuICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxNZXRhdGFncyAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxUb2FzdGVyIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvV2FnbWlDb25maWc+ICBcbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJNZXRhdGFncyIsIlRvYXN0ZXIiLCJFdGhlcmV1bUNsaWVudCIsIm1vZGFsQ29ubmVjdG9ycyIsIndhbGxldENvbm5lY3RQcm92aWRlciIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYXJiaXRydW0iLCJtYWlubmV0IiwicG9seWdvbiIsImNoYWlucyIsInByb3ZpZGVyIiwicHJvamVjdElkIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJ2ZXJzaW9uIiwiYXBwTmFtZSIsImV0aGVyZXVtQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});