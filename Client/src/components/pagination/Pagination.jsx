import { useState } from 'react'


function Pagination({paginas,handlePage}) {
  let arr = [];
  for (let i = 0; i < paginas; i++) {
      arr[i]=i+1;
  }
  const [count, setCount] = useState(0)

  return (
        <nav aria-label="...">
            <ul class="pagination pagination-sm">
            {arr.length!==0?arr.map(ele => <li class="page-link" key={ele} value={ele} onClick={handlePage} >{ele}</li>):null}
            </ul>
        </nav>
  )
}

export default Pagination;