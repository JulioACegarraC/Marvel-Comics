import { useState } from 'react'
import "./Landing.Modules.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Landing() {
  const [count, setCount] = useState(0)

  return (
      <main class= "container" style={{height:"80vh",width:"85vw"}}>
        <h1 class="display-1 position-absolute top-40" style={{height:"20vh",width:"85vw"}} >Disfruta de todos los comics de Marvel</h1> 
        <img src="https://d1bw7m1d3mp6hv.cloudfront.net/marvel-desktop-720.png" alt=""class="h-100 w-100"/>
      </main>
)
}

export default Landing