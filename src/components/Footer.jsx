
export default function Footer() {
    return (
        <>

            <footer style={{ backgroundColor: '#fff3e2', height: '' }}>
                <div className="container-fluid">
                    <div className='row p-5'>

                        <div className='col-7 align-items-center ps-5 d-flex'>
                            <ul className='list-unstyled p-3'>
                                <li>features</li>
                                <li>features</li>
                                <li>features</li>
                                <li>features</li>
                                <li>features</li>
                                <li>features</li>
                            </ul>
                        </div>


                        <div className='col-5 mt-3 d-flex justify-content-end pe-5'>
                            <div>
                                <img style={{ width: '300px' }} src="/StarDISK-final-logo.png" />
                                <div className='pt-2'>
                                    sole,cuore,amore
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}