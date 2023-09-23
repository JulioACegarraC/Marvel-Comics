import Cards from "../../components/cards/Cards"
import Pagination from '../../components/pagination/Pagination'
import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import { getComics } from "../../redux/actions";



function Comics() {
  const dispatch = useDispatch();
  //! Estado Global***************************************************************
    const allComics = useSelector((state) => state.allComics);
    //! Acciones cuando se monta el componente**********************************
    useEffect(() => {
      dispatch (getComics());
    }, []);
    //! Variables Locales***********************************************************
      let paginas = 0;
      if (allComics){
        paginas = Math.ceil(allComics.length /3);
      }
      //! Estado Local****************************************************************
        let [grupoComics,setGrupoComics] = useState(1);
  const handlePage = (evento) => {
    console.log(evento.target);
    setGrupoComics(evento.target.value);
  }

  return (
    <main class= "container" style={{height:"80vh",width:"85vw"}}>
      <div class="container row align-items-center" style={{height:"75vh"}}>
        <Cards grupoComics={grupoComics}/>
      </div>
      <div  class="container row align-items-center" style={{height:"5vh"}}>
        <Pagination handlePage={handlePage} paginas={paginas}/>
      </div>
    </main>
  )
}

export default Comics