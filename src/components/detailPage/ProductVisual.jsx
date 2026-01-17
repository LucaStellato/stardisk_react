export default function ProductVisual({ product }) {
    return (
        <div className="col-12 col-md-6 p-5">
            {product.category === "vinyl" ? (
                <div className="vinyl-scene">
                    <div className="vinyl-holder"></div>
                    <img className="vinyl-on-wall" src={product.img_url} alt={product.name} />
                </div>
            ) : (
                <img className="card-img-top shadow-lg" src={product.img_url} alt={product.name} />
            )}
        </div>
    );
}