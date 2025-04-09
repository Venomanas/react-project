import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";
import Dashboard from "./dashboard.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import NotFoundPage from "./notFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout with <Outlet />
    children: [
      { index: true, element: <Home /> }, // default route for "/"
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/:id", element: <dashboardItems /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
