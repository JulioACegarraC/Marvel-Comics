import { useState } from 'react'
import ComicsButtom from '../comicsButtom/ComicsButtom'
import Searchbar from '../searchbar/Searchbar'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <header class="container justify-content-center"style={{height:"10vh",width:"85vw"}}>
      <div class="container" style={{height:"10vh",width:"85vw"}}>
        <section class="row justify-content-between">
          <div class="col-5">
            <ComicsButtom/>
          </div>
          <div class="col-5 align-self-center">
            <Searchbar/>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Navbar
