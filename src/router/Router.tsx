import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, Home } from "../pages";
import { ClinicaGiulianiApp } from "../ClinicaGiulianiApp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <ClinicaGiulianiApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "about",
          element: <AboutPage />,  
        },
        {
          path: "",
          element: <Home />,  
        },
      ]
    },
]);