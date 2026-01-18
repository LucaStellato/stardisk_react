export default function ProductVisual({ product }) {

    const isVinyl = product.category === "vinyl";

    return (
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-4 p-md-5">
            <div className="w-100 text-center">
                {isVinyl ? (
                    <div className="vinyl-scene d-inline-block">
                        <img className="vinyl-on-wall img-fluid" src={product.img_url} alt={product.name} />
                        <div className="vinyl-holder"></div>
                    </div>
                ) : (
                    <img className="img-fluid rounded-3" src={product.img_url} alt={product.name} style={{ maxHeight: '450px', objectFit: 'contain' }} />
                )}
            </div>
        </div>
    )
}