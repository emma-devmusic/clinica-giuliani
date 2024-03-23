import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, Home, ServicesPage } from "../pages";
import { ClinicaGiulianiApp } from "../ClinicaGiulianiApp";
import { TeamPage } from "../pages/TeamPage";
import { ContactPage } from "../pages/ContactPage";

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
          path: "contact",
          element: <ContactPage />,  
        },
        {
          path: "services",
          element: <ServicesPage />,  
        },
        {
          path: "team",
          element: <TeamPage />,  
        },
        {
          path: "",
          element: <Home />,  
        },
      ]
    },
]);