import Jumbotron from "../components/jumbotron"
import SaleSection from "../components/SaleSection"
import TurntablesSection from "../components/TurntablesSection"
import BannerShowCatalog from "../components/BannerShowCatalog"

export default function HomePage() {

    return (
        <>
            <section className="bg-graffiti">
                <Jumbotron />
                <SaleSection />
                <BannerShowCatalog />
                <TurntablesSection />
            </section>
        </>
    )
}