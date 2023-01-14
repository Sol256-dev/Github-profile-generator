import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";
import "./index.css";
import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home";
import Repos from "./routes/repos";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/repos",
            element: <Repos/>
        },
        {
            path: "/Card",
            element: <Card/>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
