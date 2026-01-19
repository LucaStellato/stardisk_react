export default function Alert({ message, type }) {
    if (!message) return null;

    const accentClass = type === 'error' ? 'bg-red' : 'bg-yellow';

    return (
        <>
            <div className={`position-fixed d-flex align-items-center alert-minimal ${accentClass}`}
                style={{
                    zIndex: 10001,
                    bottom: '30px',
                    right: '30px',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    fontFamily: 'sans-serif'
                }}>

                <i className={`bi ${type === 'error' ? 'bi-x' : 'bi-bell-fill'} text-blue fs-5 me-2`}></i>

                <span className="text-blue fw-bold fs-6 text-uppercase"
                    style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                    {message}
                </span>

            </div>

            <style>{`
                .alert-minimal {
                    animation: slideUp 0.4s ease-out forwards;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                    border: 1px solid rgba(0,0,0,0.05);
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </>
    );
}