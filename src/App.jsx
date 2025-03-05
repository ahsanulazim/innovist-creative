import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Getintouch from './components/Getintouch'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="getintouch" element={<Getintouch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
