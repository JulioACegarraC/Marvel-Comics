import { useState } from 'react'


function Searchbar() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div class="container">
            <form class="d-flex " role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </>
  )
}

export default Searchbar;