"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client")); // React 18 uses ReactDOM.createRoot
var App_1 = __importDefault(require("./App")); // Importing the main App component
// Find the root DOM element in the HTML file
var rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found in the HTML!");
}
// Create a React root using the ReactDOM.createRoot API
var root = client_1.default.createRoot(rootElement);
// Render the App component
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
