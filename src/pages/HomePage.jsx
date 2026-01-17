import { useEffect } from "react";
import { useProducts } from "../contexts/ProductContext";
import Jumbotron from "../components/homePage/jumbotron"
import SaleSection from "../components/homePage/SaleSection"
import TurntablesSection from "../components/homePage/TurntablesSection"
import BannerShowCatalog from "../components/homePage/BannerShowCatalog"

export default function HomePage() {
    const { fetchAllProducts } = useProducts();

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <section className="bg-graffiti">
            <Jumbotron />
            <SaleSection />
            <BannerShowCatalog />
            <TurntablesSection />
        </section>
    )
}