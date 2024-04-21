import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Help from "../components/Help";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
