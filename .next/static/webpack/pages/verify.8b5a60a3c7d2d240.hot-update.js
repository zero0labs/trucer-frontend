"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verify",{

/***/ "./pages/verify.tsx":
/*!**************************!*\
  !*** ./pages/verify.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"josefinSans\": function() { return /* reexport default from dynamic */ _next_font_google_target_css_path_pages_verify_tsx_import_Josefin_Sans_arguments_weight_300_400_700_style_normal_italic_subsets_latin_variableName_josefinSans___WEBPACK_IMPORTED_MODULE_7___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_verify_tsx_import_Josefin_Sans_arguments_weight_300_400_700_style_normal_italic_subsets_latin_variableName_josefinSans___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/verify.tsx\",\"import\":\"Josefin_Sans\",\"arguments\":[{\"weight\":[\"300\",\"400\",\"700\"],\"style\":[\"normal\",\"italic\"],\"subsets\":[\"latin\"]}],\"variableName\":\"josefinSans\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/verify.tsx\\\",\\\"import\\\":\\\"Josefin_Sans\\\",\\\"arguments\\\":[{\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"700\\\"],\\\"style\\\":[\\\"normal\\\",\\\"italic\\\"],\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"josefinSans\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_verify_tsx_import_Josefin_Sans_arguments_weight_300_400_700_style_normal_italic_subsets_latin_variableName_josefinSans___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_verify_tsx_import_Josefin_Sans_arguments_weight_300_400_700_style_normal_italic_subsets_latin_variableName_josefinSans___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abi_contract_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/abi/contract.json */ \"./abi/contract.json\");\n/* harmony import */ var _functions_utils_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/functions/utils/classnames */ \"./functions/utils/classnames.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _zero_forgery_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zero-forgery/common */ \"./node_modules/@zero-forgery/common/build/index.js\");\n/* harmony import */ var _zero_forgery_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_zero_forgery_common__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Verify() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [school, setSchool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [department, setDepartment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ID, setID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        // 0x27a922Ebc818e3c50D6F59fCe655c722c4e6cB43\n        if (window.ethereum !== undefined) {\n            e.preventDefault();\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n            const signer = provider.getSigner();\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(\"0x27a922Ebc818e3c50D6F59fCe655c722c4e6cB43\", _abi_contract_json__WEBPACK_IMPORTED_MODULE_2__, signer);\n            // hash = keccak256(name + school + date + department + registrar + ID)\n            const formatted = (0,_zero_forgery_common__WEBPACK_IMPORTED_MODULE_5__.format)(name + school + date + department + ID);\n            const hash = (0,_zero_forgery_common__WEBPACK_IMPORTED_MODULE_5__.getHash)(formatted);\n            const tx = await contract.certificates(hash);\n            if (tx.hash === hash) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Certificate is valid\");\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Certificate is not valid or not found!\");\n            }\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please install metamask\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_functions_utils_classnames__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex items-center justify-center\", (_next_font_google_target_css_path_pages_verify_tsx_import_Josefin_Sans_arguments_weight_300_400_700_style_normal_italic_subsets_latin_variableName_josefinSans___WEBPACK_IMPORTED_MODULE_7___default().className)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[23rem]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full px-12 py-6 flex flex-col space-y-4\",\n                onSubmit: handleSubmit,\n                onChange: (e)=>{\n                    const { name , value  } = e.target;\n                    switch(name){\n                        case \"name\":\n                            setName(value);\n                            break;\n                        case \"school\":\n                            setSchool(value);\n                            break;\n                        case \"date\":\n                            setDate(value);\n                            break;\n                        case \"department\":\n                            setDepartment(value);\n                            break;\n                        case \"ID\":\n                            setID(value);\n                            break;\n                        default:\n                            break;\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"form-header text-center\",\n                                children: \"NAME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-input bg-black\",\n                                required: true,\n                                placeholder: \"ENTER THE FULL NAME\",\n                                type: \"text\",\n                                name: \"name\",\n                                id: \"name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"form-header text-center\",\n                                children: \"SCHOOL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-input bg-black\",\n                                required: true,\n                                placeholder: \"ENTER THE SCHOOL\",\n                                type: \"text\",\n                                name: \"school\",\n                                id: \"school\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"form-header text-center\",\n                                children: \"DATE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-input bg-black\",\n                                required: true,\n                                placeholder: \"ENTER THE DATE\",\n                                type: \"date\",\n                                name: \"date\",\n                                id: \"date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"form-header text-center\",\n                                children: \"DEPARTMENT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-input bg-black text-center\",\n                                required: true,\n                                placeholder: \"ENTER THE DEPARTMENT\",\n                                type: \"text\",\n                                name: \"department\",\n                                id: \"department\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"form-header text-center\",\n                                children: \"ID\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-input\",\n                                required: true,\n                                placeholder: \"ENTER THE ID\",\n                                type: \"text\",\n                                name: \"ID\",\n                                id: \"ID\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"text-xl font-bold hover:bg-gray-200 transition ease-in-out duration-300 !mt-8 bg-[#f7c655] border-[#f7c655] rounded-full text-black border w-48 mx-auto\",\n                        children: \"VERIFY\"\n                    }, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/boraoz/Desktop/trucer-frontend/pages/verify.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Verify, \"kCHWvqehJsaVhZSaUvZNCR059bU=\");\n_c = Verify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Verify);\n\nvar _c;\n$RefreshReg$(_c, \"Verify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7MENBQ3hDLDhEQUFDTztnQ0FDQ1AsV0FBVTtnQ0FDVlEsUUFBUTtnQ0FDUkMsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTHhDLE1BQUs7Z0NBQ0x5QyxJQUFHOzs7Ozs7Ozs7Ozs7a0NBSVAsOERBQUNaOzswQ0FDQyw4REFBQ087Z0NBQUdOLFdBQVU7MENBQTBCOzs7Ozs7MENBQ3hDLDhEQUFDTztnQ0FDQ1AsV0FBVTtnQ0FDVlEsUUFBUTtnQ0FDUkMsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTHhDLE1BQUs7Z0NBQ0x5QyxJQUFHOzs7Ozs7Ozs7Ozs7a0NBR1AsOERBQUNDO3dCQUNDRixNQUFLO3dCQUNMVixXQUFVO2tDQUE0Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sTDtHQXBJUy9CO0tBQUFBO0FBc0lULCtEQUFlQSxNQUFNQSxFQUFDO0FBNUlUVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJpZnkudHN4PzNhMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYWJpIGZyb20gXCJAL2FiaS9jb250cmFjdC5qc29uXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiQC9mdW5jdGlvbnMvdXRpbHMvY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgWmVyb0ZvcmdlcnkgfSBmcm9tIFwiQC90eXBlY2hhaW4tdHlwZXNcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBKb3NlZmluX1NhbnMgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IGZvcm1hdCwgZ2V0SGFzaCB9IGZyb20gXCJAemVyby1mb3JnZXJ5L2NvbW1vblwiO1xuXG5leHBvcnQgY29uc3Qgam9zZWZpblNhbnMgPSBKb3NlZmluX1NhbnMoe1xuICB3ZWlnaHQ6IFtcIjMwMFwiLCBcIjQwMFwiLCBcIjcwMFwiXSxcbiAgc3R5bGU6IFtcIm5vcm1hbFwiLCBcIml0YWxpY1wiXSxcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG59KTtcblxuZnVuY3Rpb24gVmVyaWZ5KCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NjaG9vbCwgc2V0U2Nob29sXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RlcGFydG1lbnQsIHNldERlcGFydG1lbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtJRCwgc2V0SURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICAvLyAweDI3YTkyMkViYzgxOGUzYzUwRDZGNTlmQ2U2NTVjNzIyYzRlNmNCNDNcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKFxuICAgICAgICB3aW5kb3cuZXRoZXJldW0gYXMgYW55XG4gICAgICApO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIFwiMHgyN2E5MjJFYmM4MThlM2M1MEQ2RjU5ZkNlNjU1YzcyMmM0ZTZjQjQzXCIsXG4gICAgICAgIGFiaSxcbiAgICAgICAgc2lnbmVyXG4gICAgICApIGFzIFplcm9Gb3JnZXJ5O1xuICAgICAgLy8gaGFzaCA9IGtlY2NhazI1NihuYW1lICsgc2Nob29sICsgZGF0ZSArIGRlcGFydG1lbnQgKyByZWdpc3RyYXIgKyBJRClcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdChuYW1lICsgc2Nob29sICsgZGF0ZSArIGRlcGFydG1lbnQgKyBJRCk7XG4gICAgICBjb25zdCBoYXNoID0gZ2V0SGFzaChmb3JtYXR0ZWQpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5jZXJ0aWZpY2F0ZXMoaGFzaCk7XG5cbiAgICAgIGlmICh0eC5oYXNoID09PSBoYXNoKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDZXJ0aWZpY2F0ZSBpcyB2YWxpZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiQ2VydGlmaWNhdGUgaXMgbm90IHZhbGlkIG9yIG5vdCBmb3VuZCFcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LmVycm9yKFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICBqb3NlZmluU2Fucy5jbGFzc05hbWVcbiAgICAgICl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyM3JlbV1cIj5cbiAgICAgICAgey8qKiBHRVQgVENLTiwgR0VUIE5BTUUsIEdFVCBTQ0hPT0wgTkFNRSwgR0VUIERBVEUsIEdFVCBERVBBUlRNRU5ULCBSRUdJU1RSQVIgKFdJTEwgQkUgU0lHTkFUVVJFKSAqL31cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTIgcHktNiBmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIGFueTtcbiAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2Nob29sXCI6XG4gICAgICAgICAgICAgICAgc2V0U2Nob29sKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICBzZXREYXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImRlcGFydG1lbnRcIjpcbiAgICAgICAgICAgICAgICBzZXREZXBhcnRtZW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFwiSURcIjpcbiAgICAgICAgICAgICAgICBzZXRJRCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb3JtLWhlYWRlciB0ZXh0LWNlbnRlclwiPk5BTUU8L2gxPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXQgYmctYmxhY2tcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVOVEVSIFRIRSBGVUxMIE5BTUVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb3JtLWhlYWRlciB0ZXh0LWNlbnRlclwiPlNDSE9PTDwvaDE+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBiZy1ibGFja1wiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRU5URVIgVEhFIFNDSE9PTFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFwiXG4gICAgICAgICAgICAgIGlkPVwic2Nob29sXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb3JtLWhlYWRlciB0ZXh0LWNlbnRlclwiPkRBVEU8L2gxPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXQgYmctYmxhY2tcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVOVEVSIFRIRSBEQVRFXCJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5ERVBBUlRNRU5UPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0IGJnLWJsYWNrIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFTlRFUiBUSEUgREVQQVJUTUVOVFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlcGFydG1lbnRcIlxuICAgICAgICAgICAgICBpZD1cImRlcGFydG1lbnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5JRDwvaDE+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRU5URVIgVEhFIElEXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiSURcIlxuICAgICAgICAgICAgICBpZD1cIklEXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTIwMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCAgIW10LTggYmctWyNmN2M2NTVdIGJvcmRlci1bI2Y3YzY1NV0gcm91bmRlZC1mdWxsIHRleHQtYmxhY2sgYm9yZGVyIHctNDggIG14LWF1dG9cIj5cbiAgICAgICAgICAgIFZFUklGWVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5O1xuIl0sIm5hbWVzIjpbImpvc2VmaW5TYW5zIiwiZXRoZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFiaSIsImNsYXNzbmFtZXMiLCJ0b2FzdCIsImZvcm1hdCIsImdldEhhc2giLCJWZXJpZnkiLCJuYW1lIiwic2V0TmFtZSIsInNjaG9vbCIsInNldFNjaG9vbCIsImRhdGUiLCJzZXREYXRlIiwiZGVwYXJ0bWVudCIsInNldERlcGFydG1lbnQiLCJJRCIsInNldElEIiwiaGFuZGxlU3VibWl0IiwiZSIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwicHJldmVudERlZmF1bHQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJmb3JtYXR0ZWQiLCJoYXNoIiwidHgiLCJjZXJ0aWZpY2F0ZXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJvbkNoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwiaDEiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verify.tsx\n"));

/***/ })

});