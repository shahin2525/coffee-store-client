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
import Users from "./components/Users.jsx";
import Users2 from "./components/Users2.jsx";
//

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//
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
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/users2",
    element: <Users2></Users2>,
  },
  {
    path: "update-coffee/:id",
    // loader: ({ params }) =>
    //   fetch(`http://localhost:5000/coffees/${params._id}`),
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
]);
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {" "}
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
