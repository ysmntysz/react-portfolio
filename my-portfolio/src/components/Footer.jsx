import React from 'react'

function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="../../images/logo.png" alt="logo" className='img-fluid' />
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <h3>Linkler</h3>
                    <ul>
                        <li><a href="">Anasayfa</a></li>
                        <li><a href="">Hakkımda</a></li>
                        <li><a href="">Deneyim</a></li>
                        <li><a href="">İletişim</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <h3>İletişim</h3>
                    <ul>
                        <li>Yasemin Tüysüz</li>
                        <li>yasemintuysuz@gmail.com</li>
                        <li>053248874</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <h3>Takip et</h3>
                    <ul className='footer-social'>
                        <li><a href="http://" target="_blank" rel="nofollow" title='instagram'><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="http://" target="_blank" rel="nofollow" title='github'><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="http://" target="_blank" rel="nofollow" title='youtube'><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
