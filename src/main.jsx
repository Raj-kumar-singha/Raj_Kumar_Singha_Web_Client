import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <App />
    <ToastContainer position="top-center" />
    <Footer />
  </BrowserRouter>,
)
