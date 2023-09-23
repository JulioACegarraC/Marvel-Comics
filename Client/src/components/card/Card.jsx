import { useState } from 'react'


function Card({comic}) {
  const [count, setCount] = useState(0)
  let id= '';
  let title= '';
  let image= '';

  if (comic){
    id = comic.id;
    let name =comic.title.split(" (");
    title = name[0];
    image = comic.thumbnail.path +"."+ comic.thumbnail.extension;
  }
  return (
    <>
        <div class="card" style={{width: '18vw',height:"70vh"}}>
            <img src={image} class="card-img-top" alt="..." style={{height:"45vh"}}/>
            <div class="card-body">
                <p class="fs-6" style={{height:"10vh"}}>{title}</p>
                <a href={`/comics/${id}`} class="btn btn-primary">Más Detalles</a>
            </div>
        </div>
    </>
  )
}

export default Card;