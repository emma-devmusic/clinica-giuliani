import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer, Navbar, Topbar } from "./components"

export const ClinicaGiulianiApp = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </>
    )
}
