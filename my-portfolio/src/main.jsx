import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/default.css'
import lazySizes from 'lazysizes'
import MainPage from './page/MainPage'
import { BrowserRouter } from 'react-router-dom'
import App from './App'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
)
