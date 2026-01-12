import { Outlet, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function DefaultLayout() {
    return (
        <>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/price">Pricing</Link>
                    <Link to="/vinyls">Catalog</Link>
                </nav>
            </Header>
            <Outlet />
            <Footer />

        </>
    )
}