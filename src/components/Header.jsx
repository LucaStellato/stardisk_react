

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#fff3e2' }}>
                <div className="container-fluid d-flex">
                    <a className="navbar-brand p-3 " href="#"><img src="/StarDISK-final-logo.png" style={{ height: '75px' }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 d-flex justify-content-end pe-3" id="navbarNav">
                        <ul className="navbar-nav text-blue">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catalog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}