export default function Alert({ message, type }) {
    if (!message) return null;

    const config = {
        success: {
            bg: 'bg-yellow',
            icon: 'bi-check-circle-fill',
            label: 'SUCCESS'
        },
        error: {
            bg: 'bg-red',
            icon: 'bi-x-circle-fill',
            label: 'ERROR'
        },
        info: {
            bg: 'bg-yellow',
            icon: 'bi-info-circle-fill',
            label: 'INFO'
        }
    };

    const current = config[type] || config.info;

    return (
        <>
            <div className={`position-fixed d-flex align-items-center alert-minimal ${current.bg}`}
                style={{
                    zIndex: 10001,
                    bottom: '30px',
                    right: '30px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    minWidth: '250px',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>

                <i className={`bi ${current.icon} text-dark fs-5 me-3`}></i>

                <div className="d-flex flex-column">
                    <span className="text-dark fw-bold" style={{ fontSize: '0.9rem' }}>
                        {message}
                    </span>
                </div>
            </div>
        </>
    );
}