// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Swal from 'sweetalert2'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
