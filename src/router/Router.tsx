import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, Home, ServicesPage, TeamPage, ProfilePage, ServicePage, Dashboard, Login } from "../pages";
import { AdminUsers, Assets, UserProfile, Users, Welcome } from "../pages/dashboardContent";
import { ClinicaGiulianiApp } from "../ClinicaGiulianiApp";
import { UserInfo } from "../pages/dashboardContent/adminUsers/userInfo/UserInfo";
import { SelectingUser } from "../pages/dashboardContent/assets/modules/SelectingUser";
import { AssetsPage } from "../pages/dashboardContent/assets/modules/AssetsPage";


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
          path: "/dashboard/assets",
          element: <Assets />,
          children: [
            {
              path: "/dashboard/assets/select-user",
              element: <SelectingUser />
            },
            {
              path: "/dashboard/assets/:userId",
              element: <AssetsPage />
            }
          ]
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
          path: "/dashboard/admin-users/:userId",
          element: <UserInfo />
        },
        {
          path: "/dashboard/profile",
          element: <UserProfile />
        },
      ]
    },
]);