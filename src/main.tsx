import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import "./index.css";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root node not found!");
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
