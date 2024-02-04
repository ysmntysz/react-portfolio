import React from 'react'

const About = () => {
  return (
    <div className="container">
        <div className="row gy-4 gy-md-0">
          <div className="col-12">
            <h2 className='text-center'>HAKKIMDA</h2>
          </div>
          <div className="col-12 col-md-3 col-lg-3">
          <img src="../../images/woman.png" alt="Profile" className='img-fluid home-image' />
          </div>
          <div className="col-12 col-md-9 col-lg-9">
            <div className="about-info">
              <p>Merhaba ben Yasemin, Rize'de yaşıyorum. Staj yaptığım yerlerde frontend developer olarak projelerde yer aldım. Bu alanda kendimi daha fazla geliştirerek yoluma devam ediyorum.</p>
              <a href="#" title='cv' className='btn default-btn'>CV'mi indir</a>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="about-skils">
                <div className="skils-box">
                  <div className="icon"><i className='icon-fire'></i></div>
                  <div className="text">
                    <span>8</span>
                    <h3>Projeler</h3>
                  </div>
                </div>
                <div className="skils-box">
                  <div className="icon"><i className='icon-cup'></i></div>
                  <div className="text">
                    <span>442</span>
                    <h3>Bir fincan kahve</h3>
                  </div>
                </div>
                <div className="skils-box">
                  <div className="icon"><i className='icon-clock'></i></div>
                  <div className="text">
                    <span>15648</span>
                    <h3>Harcanan zaman</h3>
                  </div>
                </div>
                <div className="skils-box">
                  <div className="icon"><i className='icon-people'></i></div>
                  <div className="text">
                    <span>158</span>
                    <h3>Memnuniyet</h3>
                  </div>
                </div>
            </div>
          </div>
   
        </div>
      </div>
  )
}

export default About
