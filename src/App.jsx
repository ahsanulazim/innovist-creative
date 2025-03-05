import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="innovist-creative" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
