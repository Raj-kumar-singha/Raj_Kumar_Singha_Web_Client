import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './utils/protectedRoutes';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import BuyCoffePage from './pages/BuyCoffePage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/buy-me-a-coffee" element={<BuyCoffePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
