import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import AddCoffee from "./components/AddCoffee.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import AddCoffee from "./components/Addcoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("http://localhost:5000/coffees"),
    element: <App></App>,
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "update-coffee/:id",
    // loader: ({ params }) =>
    //   fetch(`http://localhost:5000/coffees/${params._id}`),
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
