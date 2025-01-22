"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var FileUploader = function () {
    var handleFileUpload = function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                var data = reader_1.result;
                console.log("Uploaded Data:", data);
            };
            reader_1.readAsText(file);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "file-upload", children: "Upload Dataset:" }), (0, jsx_runtime_1.jsx)("input", { id: "file-upload", type: "file", accept: ".json", onChange: handleFileUpload })] }));
};
exports.default = FileUploader;
