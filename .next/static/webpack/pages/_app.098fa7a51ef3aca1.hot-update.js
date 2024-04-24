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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer/index.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _components_Metatags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Metatags */ \"./components/Metatags/index.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3modal/ethereum */ \"./node_modules/@web3modal/ethereum/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n\n\n\n\n\n\n\n\n\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygon\n];\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__.walletConnectProvider)({\n        projectId: \"2e603b4827e59dd1a715066175aee2e8\"\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__.modalConnectors)({\n        projectId: \"2e603b4827e59dd1a715066175aee2e8\",\n        version: \"1\",\n        appName: \"web3Modal\",\n        chains\n    }),\n    provider\n});\n// Web3Modal Ethereum Client\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_6__.EthereumClient(wagmiClient, chains);\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {\n            client: wagmiClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Metatags__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                    fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/_app.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFDSTtBQUNmO0FBRVk7QUFTYjtBQUlzQztBQUVUO0FBQzFELE1BQU1hLFNBQVM7SUFBQ0gsa0RBQVFBO0lBQUVDLGlEQUFPQTtJQUFFQyxpREFBT0E7Q0FBQztBQUMzQyxNQUFNLEVBQUVFLFNBQVEsRUFBRSxHQUFHUCxzREFBZUEsQ0FBQ00sUUFBUTtJQUMzQ1AsMEVBQXFCQSxDQUFDO1FBQUVTLFdBQVc7SUFBbUM7Q0FDdkU7QUFFRCxNQUFNQyxjQUFjUixtREFBWUEsQ0FBQztJQUMvQlMsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZYixvRUFBZUEsQ0FBQztRQUMxQlUsV0FBVztRQUNYSSxTQUFTO1FBQ1RDLFNBQVM7UUFDVFA7SUFDRjtJQUNBQztBQUNGO0FBRUEsNEJBQTRCO0FBQzVCLE1BQU1PLGlCQUFpQixJQUFJakIsK0RBQWNBLENBQUNZLGFBQWFIO0FBQ3hDLFNBQVNTLElBQUksS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFsQztJQUMxQixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ2pCLDhDQUFXQTtZQUFDa0IsUUFBUVg7OzhCQUNuQiw4REFBQ2YsMERBQU1BOzs7Ozs4QkFDUCw4REFBQ0MsNERBQVFBOzs7Ozs4QkFDVCw4REFBQ3FCO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs4QkFDeEIsOERBQUNyQixvREFBT0E7Ozs7OzhCQUNSLDhEQUFDSCwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZixDQUFDO0tBWnVCc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTWV0YXRhZ3MgZnJvbSBcIkAvY29tcG9uZW50cy9NZXRhdGFnc1wiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5cblxuXG5pbXBvcnQge1xuICBFdGhlcmV1bUNsaWVudCxcbiAgbW9kYWxDb25uZWN0b3JzLFxuICB3YWxsZXRDb25uZWN0UHJvdmlkZXIsXG59IGZyb20gXCJAd2ViM21vZGFsL2V0aGVyZXVtXCI7XG5cbmltcG9ydCB7IFdlYjNNb2RhbCB9IGZyb20gXCJAd2ViM21vZGFsL3JlYWN0XCI7XG5cbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuXG5pbXBvcnQgeyBhcmJpdHJ1bSwgbWFpbm5ldCwgcG9seWdvbiB9IGZyb20gXCJ3YWdtaS9jaGFpbnNcIjtcbmNvbnN0IGNoYWlucyA9IFthcmJpdHJ1bSwgbWFpbm5ldCwgcG9seWdvbl07XG5jb25zdCB7IHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoY2hhaW5zLCBbXG4gIHdhbGxldENvbm5lY3RQcm92aWRlcih7IHByb2plY3RJZDogXCIyZTYwM2I0ODI3ZTU5ZGQxYTcxNTA2NjE3NWFlZTJlOFwiIH0pLFxuXSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnM6IG1vZGFsQ29ubmVjdG9ycyh7XG4gICAgcHJvamVjdElkOiBcIjJlNjAzYjQ4MjdlNTlkZDFhNzE1MDY2MTc1YWVlMmU4XCIsXG4gICAgdmVyc2lvbjogXCIxXCIsIC8vIG9yIFwiMlwiXG4gICAgYXBwTmFtZTogXCJ3ZWIzTW9kYWxcIixcbiAgICBjaGFpbnMsXG4gIH0pLFxuICBwcm92aWRlcixcbn0pO1xuXG4vLyBXZWIzTW9kYWwgRXRoZXJldW0gQ2xpZW50XG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNsaWVudCwgY2hhaW5zKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TWV0YXRhZ3MgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L1dhZ21pQ29uZmlnPiAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZvb3RlciIsIkhlYWRlciIsIk1ldGF0YWdzIiwiVG9hc3RlciIsIkV0aGVyZXVtQ2xpZW50IiwibW9kYWxDb25uZWN0b3JzIiwid2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJhcmJpdHJ1bSIsIm1haW5uZXQiLCJwb2x5Z29uIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJwcm9qZWN0SWQiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsInZlcnNpb24iLCJhcHBOYW1lIiwiZXRoZXJldW1DbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});