import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import MainPage from './page/MainPage';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
 
  return (
    <>
 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact-me" element={<Contact/>} />
      </Routes>
 
   
    </>
  )
}

export default App
