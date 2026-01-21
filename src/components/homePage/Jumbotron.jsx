export default function Jumbotron() {
    return (
        <div className="jumbo">
            <div className="container d-flex align-items-center justify-content-center justify-content-sm-start h-100 p-3 p-sm-5">
                <div className="h-100 d-flex align-items-center justify-content-center" style={{ maxWidth: '100%' }}>
                    <img className="slogan img-fluid" src="/slogan.png" alt="slogan" style={{ width: 'auto', objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    )
}