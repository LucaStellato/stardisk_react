export default function CheckoutForm({ formData, handleChange, termsAccepted, setTermsAccepted, loading }) {
    return (
        <div className={`bg-white p-4 p-md-5 rounded shadow-sm border border-light ${loading ? 'opacity-75' : ''}`}
            style={{ transition: 'opacity 0.3s ease' }}>

            <h5 className="fw-bold text-blue text-uppercase mb-4">Shipping Information</h5>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label small fw-bold text-blue">NAME*</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control border-light shadow-sm py-2"
                        style={{ backgroundColor: '#f8f9fa' }}
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading} // Disabilita durante il loading
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label small fw-bold text-blue">SURNAME*</label>
                    <input
                        type="text"
                        name="surname"
                        className="form-control border-light shadow-sm py-2"
                        style={{ backgroundColor: '#f8f9fa' }}
                        required
                        value={formData.surname}
                        onChange={handleChange}
                        disabled={loading} // Disabilita durante il loading
                    />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label small fw-bold text-blue">EMAIL*</label>
                <input
                    type="email"
                    name="mail"
                    className="form-control border-light shadow-sm py-2"
                    style={{ backgroundColor: '#f8f9fa' }}
                    required
                    value={formData.mail}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-5">
                <label className="form-label small fw-bold text-blue">ADDRESS*</label>
                <input
                    type="text"
                    name="address"
                    className="form-control border-light shadow-sm py-2"
                    style={{ backgroundColor: '#f8f9fa' }}
                    placeholder="Street, City, Zip Code..."
                    required
                    value={formData.address}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <h5 className="fw-bold text-blue text-uppercase mb-4">Payment Details</h5>

            <div className="mb-3">
                <label className="form-label small fw-bold text-blue">CARD NUMBER*</label>
                <input
                    type="text"
                    name="cardNumber"
                    className="form-control border-light shadow-sm py-2"
                    style={{ backgroundColor: '#f8f9fa' }}
                    placeholder="0000 0000 0000 0000"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="row">
                <div className="col-7 mb-3">
                    <label className="form-label small fw-bold text-blue">EXPIRY DATE*</label>
                    <input
                        type="text"
                        name="expDate"
                        className="form-control border-light shadow-sm py-2"
                        style={{ backgroundColor: '#f8f9fa' }}
                        placeholder="MM/YY"
                        required
                        value={formData.expDate}
                        onChange={handleChange}
                        disabled={loading}
                    />
                </div>
                <div className="col-5 mb-3">
                    <label className="form-label small fw-bold text-blue">CVV*</label>
                    <input
                        type="text"
                        name="cvv"
                        className="form-control border-light shadow-sm py-2"
                        style={{ backgroundColor: '#f8f9fa' }}
                        placeholder="123"
                        required
                        value={formData.cvv}
                        onChange={handleChange}
                        disabled={loading}
                    />
                </div>
            </div>

            <div className="form-check mt-4">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    required
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                    disabled={loading}
                />
                <label className="form-check-label small text-blue fw-semibold" htmlFor="terms" style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
                    I accept the Terms of Service and Privacy Policy
                </label>
            </div>
        </div>
    );
}