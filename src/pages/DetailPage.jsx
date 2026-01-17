import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import ProductVisual from "../components/detailPage/ProductVisual";
import ProductInfo from "../components/detailPage/ProductInfo";
import ProductExtras from "../components/detailPage/ProductExtras";
import RelatedProducts from "../components/detailPage/RelatedProducts";

export default function DetailPage() {
    const { slug } = useParams();
    const { currentProduct, relatedProducts, fetchProductBySlug, loading } = useProducts();

    useEffect(() => {
        fetchProductBySlug(slug);
    }, [slug]);

    if (loading || !currentProduct) {
        return (
            <div className="detail-wall text-center py-5">
                <h1 className="text-blue pt-5">Loading Data...</h1>
            </div>
        );
    }

    return (
        <div className="detail-wall schizzi pb-5">
            <div className="container">
                <div className="pt-3 mb-3 text-start">
                    <Link to="/" className="btn btn-lg bg-blue text-yellow fw-bold shadow">
                        <i className="bi bi-arrow-left me-2"></i> Back to home
                    </Link>
                </div>

                <div className="row">
                    <ProductVisual product={currentProduct} />
                    <ProductInfo product={currentProduct} />
                </div>

                <ProductExtras product={currentProduct} />

                <RelatedProducts products={relatedProducts} />
            </div>
        </div>
    );
}