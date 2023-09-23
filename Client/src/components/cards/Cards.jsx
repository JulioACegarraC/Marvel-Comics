import { useState } from 'react'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination';
import {useDispatch,useSelector} from 'react-redux'


function Cards({grupoComics}) {
  const allComics = useSelector((state) => state.allComics);
  let comicsList = [];
  let comicsPorPagina=3;
  let pagEnteras = Math.trunc(allComics.length/3);
  if (allComics.length<comicsPorPagina) {
    comicsPorPagina=allComics.length;
    for(let i=0 ; i< comicsPorPagina ; i++){
      comicsList.push(allComics[i]);
    }
  } else if (grupoComics>pagEnteras){
    for(let i=pagEnteras*3 ; i< allComics.length ; i++){
      comicsList.push(allComics[i]);
    }
  }else{
    for(let i=((grupoComics*3)-comicsPorPagina) ; i< (grupoComics*3) ; i++){
      comicsList.push(allComics[i]);
    }
  }
  const [count, setCount] = useState(0)

  return (
      <div class="row align-items-center justify-content-between">
        {comicsList?.map(comic => <Card key={comic.id} comic = {comic} />)}
      </div>
  )
}

export default Cards;