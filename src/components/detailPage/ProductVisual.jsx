export default function ProductVisual({ product }) {

    const isVinyl = product.category === "vinyl";
    const isTurntable = product.category === "turntable";

    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-md-5">
            <div className="w-100 text-center p-5">
                {isVinyl ? (
                    <div className="vinyl-scene d-inline-block">
                        <img
                            className="vinyl-on-wall img-fluid"
                            src={product.img_url}
                            alt={product.name} />
                        <div className="vinyl-holder"></div>
                    </div>
                ) : isTurntable ? (
                    <div className="modern-white-frame shadow-frame-dark d-inline-block">
                        <div className="inner-dark-canvas p-3">
                            <img
                                className="img-fluid"
                                src={product.img_url}
                                alt={product.name}
                                style={{ maxHeight: '450px', objectFit: 'contain' }} />
                        </div>
                    </div>
                ) : (
                    <img
                        className="img-fluid rounded-3"
                        src={product.img_url}
                        alt={product.name}
                        style={{ maxHeight: '450px', objectFit: 'contain' }} />
                )}
            </div>
        </div>
    );
}