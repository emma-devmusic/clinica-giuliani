import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, Home, ServicesPage, TeamPage, ProfilePage, ServicePage, Dashboard, Login } from "../pages";
import { AdminUsers, Receipts, UserProfile, Users, Welcome } from "../pages/dashboardContent";
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
        },
        {
          path: "/dashboard/staff",
          element: <Users />
        },
        {
          path: "/dashboard/admin-users",
          element: <AdminUsers />
        },
        {
          path: "/dashboard/profile",
          element: <UserProfile />
        },
      ]
    },
]);