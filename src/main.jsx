import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import MainView from "./component/MainView.jsx";
import About from "./component/pages/About.jsx";
import Contact from "./component/pages/Contact.jsx";
import Experience from "./component/pages/Experience.jsx";
import Footer from "./component/pages/Footer.jsx";
import Projects from "./component/pages/Projects.jsx";
import Skills from "./component/pages/Skills.jsx";
import Layout from "./component/layout/Layout.jsx";
import CoverPage from "./component/CoverPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CoverPage />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/mainview",
        element: <MainView />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
