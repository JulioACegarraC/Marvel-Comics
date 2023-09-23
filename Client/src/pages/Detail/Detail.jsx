import Cards from "../../components/cards/Cards"
import Pagination from '../../components/pagination/Pagination'
import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import { getComics } from "../../redux/actions";
import{useParams} from 'react-router-dom'
import { getComicById } from "../../redux/actions";



function Detail() {
    const [image, setImage] = useState([])
    const {id} = useParams();
    const dispatch = useDispatch();
    const comic = useSelector((state) => state.comic);
    let characters=[];
    let peticiones=[];
    if (comic[0]){
        characters = comic[0].characters.items;
        let resource = characters.map(character => character.resourceURI)
        peticiones = resource.map(link => link+"?ts=1&apikey=1cb57c351d4cdfcc76f4540d6e450c79&hash=eb63fdb5fcba1862e2d6d20cff9697ac")
    }
    useEffect(() => {
        dispatch(getComicById(id));
        // peticiones.map(async (ele) => {
        //     try {
        //         let response = await axios.get(ele)
        //         setImage([...image,response.data.data.results[0].thumbnail.path+"."+response.data.data.results[0].thumbnail.extension])
        //     } catch (error) {
                
        //     }
        // })
    }, []);

    // useEffect (()=>()=>{setImage([])})

  return (
    <main class= "container" style={{height:"80vh",width:"85vw"}}>
        {comic[0]?<h1>{comic[0].title.split(" (")[0]}</h1>:null}
        {comic[0]?<p>{comic[0].description}</p>:null}
        <h3>Characters</h3>
        <div class="accordion accordion-flush" id="accordionFlush">
        {characters?.map((character,index) => 
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+character.name.split(" ")[0]} aria-expanded="false" aria-controls={"#"+character.name.split(" ")[0]}>
                        {character.name}
                        </button>
                    </h2>
                    <div id={character.name.split(" ")[0]} class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">
                        <img src={image[index]} alt="Jacc" />
                    </div>
                    </div>
                </div>
        
        )}
        </div>
    </main>
  )
}

export default Detail