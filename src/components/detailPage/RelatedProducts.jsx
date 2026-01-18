import HomeCard from "../homePage/HomeCard";

export default function RelatedProducts({ products }) {
    if (!products || products.length === 0) return null;

    return (
        <section className="container py-5 mt-3">
            <div className="row">
                <div className="col-12">
                    <h2 className="fw-bold text-red pb-4 text-center text-uppercase">Related Products</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
                {products.map(prod => (
                    <div key={prod.product_id} className="col">
                        <HomeCard item={prod} />
                    </div>
                ))}
            </div>
        </section>
    );
}