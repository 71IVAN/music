import React from 'react'
import ReactDOM from 'react-dom/client'
import  'bootstrap/dist/js/bootstrap.min.js'
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter } from 'react-router-dom'
import {Rutas} from './Routes/Rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
      <Rutas/>
      </BrowserRouter>
    </React.StrictMode>
  </React.StrictMode>
)
