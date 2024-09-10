import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, Home, ServicesPage, TeamPage, ProfilePage, ServicePage } from "../pages";
import { ClinicaGiulianiApp } from "../ClinicaGiulianiApp";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Receipts } from "../pages/dashboardContent/Receipts";
import { Welcome } from "../pages/dashboardContent/Welcome";

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
        // {
        //   path: "contact",
        //   element: <ContactPage />,  
        // },
        {
          path: "services",
          element: <ServicesPage />,  
        },
        {
          path: "services/:idService",
          element: <ServicePage />,  
        },
        {
          path: "team",
          element: <TeamPage />,
        },
        {
          path: "profile/:idProfile",
          element: <ProfilePage />
        },
        {
          path: "",
          element: <Home />,  
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Welcome />
        },
        {
          path: "/dashboard/receipts",
          element: <Receipts />
        }
      ]
    },
]);