import React from "react";
import ReactDOM from "react-dom/client"; // React 18 uses ReactDOM.createRoot
import App from "./App"; // Importing the main App component

// Find the root DOM element in the HTML file
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found in the HTML!");
}

// Create a React root using the ReactDOM.createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
