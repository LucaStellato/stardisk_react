import { Link } from "react-router-dom"
import Copyright from "./Copyright"

export default function Footer() {
    return (
        <footer className="bg-black-custom">
            <div className="container-fluid">
                <div className='row p-md-5 p-4'>
                    <div className='col-6 col-md-3 mb-4 mb-md-0 d-flex flex-column'>
                        <h3 className="mb-1 fw-bold text-yellow">Menu</h3>
                        <ul className='list-unstyled pt-2 text-light fw-bold'>
                            <li className="mb-2"><Link to='/'>Home</Link></li>
                            <li className="mb-2"><Link to='/vinyls'>Vinyls</Link></li>
                            <li className="mb-2"><Link to='/aboutus'>About Us</Link></li>
                        </ul>
                    </div>
                    <div className='col-6 col-md-3 mb-4 mb-md-0 d-flex flex-column'>
                        <h3 className="mb-1 fw-bold text-yellow">Social</h3>
                        <ul className='list-unstyled pt-2 text-light fw-bold'>
                            <li className="mb-2"><a href="https://facebook.com"><i className="bi bi-facebook pe-2"></i>Facebook</a></li>
                            <li className="mb-2"><a href="https://www.instagram.com/"><i className="bi bi-instagram pe-2"></i>Instagram</a></li>
                            <li><a href="https://www.tiktok.com/"><i className="bi bi-tiktok pe-2"></i>TikTok</a></li>
                        </ul>
                    </div>

                    <div className='col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center'>
                        <div className="text-center" style={{ maxWidth: '300px' }}>
                            <img className="img-fluid" src="/logo-stardisk-white.png" alt="StarDisk Logo" />
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}