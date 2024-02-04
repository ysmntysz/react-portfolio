import React from 'react'



const Sidebar = () => {
  return (
    <>
        <div className='left-sidebar'>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#" title='MyLogo'><img src="../../images/logo.png" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home" title='Home'>
                                <i className='icon-home'></i>
                            </a>                     
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me" >
                                <i className='icon-user-following'></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">
                                <i className='icon-briefcase'></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-me">
                                <i className='icon-phone'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="mobile-nav">
        <nav className="navbar ">
                <a className="navbar-brand" href="#" title='MyLogo'><img src="../../images/logo.png" alt="Logo" className='img-fluid' /></a>
                <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home" title='Home'>
                                <i className='icon-home'></i>
                            </a>                     
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me" title='hakkımda' >
                                <i className='icon-user-following'></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume" title='deneyim'>
                                <i className='icon-briefcase'></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-me" title='iletişim'>
                                <i className='icon-phone'></i>
                            </a>
                        </li>
                    </ul>
            </nav>
        </div>
    </>
  )
}

export default Sidebar
