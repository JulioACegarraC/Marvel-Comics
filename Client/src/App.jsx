import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import Comics from './pages/Comics/Comics'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Detail from './pages/Detail/Detail';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<Detail/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
