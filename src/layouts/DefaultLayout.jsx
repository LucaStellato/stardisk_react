import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"


export default function DefaultLayout() {
    return (
        <>
            <Header>

            </Header>
            <Outlet />
            <Footer />

        </>
    )
}