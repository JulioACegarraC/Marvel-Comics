import { useState } from 'react'


function Footer() {
  const [count, setCount] = useState(0)

  return (
    <footer class="container justify-content-center" style={{height:"10vh",width:"85vw"}}>
      <div class="container  justify-content-center" style={{height:"10vh",width:"85vw"}}>
        <h5>Julio Cegarra</h5>
      </div>
    </footer>
  )
}

export default Footer