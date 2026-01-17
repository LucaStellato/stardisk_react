import { Link } from "react-router-dom"
import Copyright from "./Copyright"
export default function Footer() {
    return (
        <>

            <footer className="bg-yellow">
                <div className="container-fluid">
                    <div className='row p-5'>

                        <div className='col-3 ps-5 d-flex flex-column'>
                            <h3 className="mb-1 ps-3 fw-bold text-red">Menu</h3>
                            <ul className='list-unstyled p-3 text-blue fw-bold'>
                                <li><Link to='/' className="mt-1">Home</Link></li>
                                <li><Link to='/vinyls' className="mt-1">Catalog</Link></li>
                                <li className="mt-1">About us</li>
                                <li className="mt-1">Contacts</li>
                            </ul>
                        </div>

                        <div className='col-3 ps-5 d-flex flex-column'>
                            <h3 className="mb-1 ps-3 fw-bold text-red">Social</h3>
                            <ul className='list-unstyled p-3 text-blue fw-bold'>
                                <li><a href="https://facebook.com"><i className="bi bi-facebook mt-1 pe-2"></i>Facebook</a></li>
                                <li><a href="https://www.instagram.com/"><i className="bi bi-instagram mt-1 pe-2"></i>Instagram</a></li>
                                <li><a href="https://www.tiktok.com/"><i className="bi bi-tiktok pe-2"></i>TikTok</a></li>

                            </ul>
                        </div>

                        <div className='col-6 mt-3 d-flex justify-content-end pe-5'>
                            <div className="pe-5">
                                <img style={{ width: '300px' }} src="/StarDISK-final-logo.png" />
                                <h5 className='pt-3 fw-bold text-center text-red'>
                                    Shoot for the stars, aim for the Moon
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Copyright />
            </footer>
        </>
    )
}