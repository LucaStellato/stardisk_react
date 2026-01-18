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
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading || !currentProduct) {
        return (
            <div className="detail-wall text-center py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="spinner-border text-blue me-3" role="status"></div>
                <h1 className="text-blue mb-0 fw-bold">Loading Data...</h1>
            </div>
        );
    }

    return (
        <div className="detail-wall schizzi pb-5">
            <div className="container">
                <div className="pt-4 mb-4 text-start">
                    <Link to="/vinyls" className="btn btn-lg bg-blue text-yellow fw-bold shadow-sm px-4">
                        <i className="bi bi-arrow-left me-2"></i> Back to home
                    </Link>
                </div>

                <div className="row g-5 d-flex align-items-center">
                    <ProductVisual product={currentProduct} />
                    <ProductInfo product={currentProduct} />
                </div>
                <ProductExtras product={currentProduct} />
                <RelatedProducts products={relatedProducts} />
            </div>
        </div>
    );
}