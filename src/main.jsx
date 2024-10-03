import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AddCoffee from "./components/AddCoffee.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>Hello world!</App>,
  },
  {
    path: "/add-coffee",
    element: <AddCoffee>Hello world!</AddCoffee>,
  },
  {
    path: "/update-coffee",
    element: <UpdateCoffee>Hello world!</UpdateCoffee>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
