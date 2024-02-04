import React from 'react'
 
import Home from '../components/Home'
import About from '../components/About'
import Sidebar from '../components/Sidebar'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function MainPage() {
  return (
    <>
        <div className="side-nav">
          <Sidebar/>
        </div>
        <div className="content">
            <div className="home-page" id='home'>
              <Home/>
            </div>
            <div className="about-me" id='about'>
              <About/>
            </div>
            <div className="resume" id='resume'>
              <Resume/>
            </div>
            <div className="contact" id='contact-me'>
              <Contact/>
            </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
    </>
  )
}

export default MainPage
