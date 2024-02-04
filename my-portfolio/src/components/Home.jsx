import React from 'react';
 
 
const Home = () => {
  return (
    <div className="container" id='home-page-container'>
        <div className="row">
          <div className="text-center">
            <div className="col-12">
                <img src="../../images/woman.png" alt="Profile" className='home-image' />
            </div>
            <div className="col-12">
              <h1 className='name mt-4'>Yasemin Tüysüz</h1>
            </div>
            <div className="col-12">
              <span className=''>Frontend Developer</span>
            </div>
            <div className="col-12">
              <div className="social-links">
                <ul className='d-flex'>
                  <li><a href="http://" target="_blank" rel="nofollow" title='instagram'><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="http://" target="_blank" rel="nofollow" title='github'><i className="fa-brands fa-github"></i></a></li>
                  <li><a href="http://" target="_blank" rel="nofollow" title='youtube'><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <a href="#" title='hire me' className='btn default-btn'>Hire me</a>
            </div>
            <div className="col-12">
              <div className="scroll-down">
                <a href="" className='mouse-wrapper'>
                  <span className='home-scroll-name'>Scroll</span>
                  <span className='mouse'>
                    <span className='wheel'></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="bg-shapes">
              <div className='shapes-one shapes'>
                <img data-src="./images/bg-ass.png" alt="image-lazy" className='lazyload' />
                </div>
                <div className='shapes-two shapes'>
                <img data-src="./images/bs-ass-two.png" alt="image-lazy" className='lazyload' />
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
