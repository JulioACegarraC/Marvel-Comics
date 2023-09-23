import axios from "axios";
export const GETCOMICS = "GETCOMICS";
export const COMIC = "COMIC";
export const ERROR = "ERROR";

export const getComics = () => {
    let endpoint = "https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&ts=1&apikey=1cb57c351d4cdfcc76f4540d6e450c79&hash=eb63fdb5fcba1862e2d6d20cff9697ac";
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GETCOMICS,
                payload: data.data.results,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.response.data.message,
            });
            
        }
    };
  };

  export const getComicById = (id) => {
    let endpoint = "https://gateway.marvel.com:443/v1/public/comics/1590?ts=1&apikey=1cb57c351d4cdfcc76f4540d6e450c79&hash=eb63fdb5fcba1862e2d6d20cff9697ac";
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: COMIC,
                payload: data.data.results,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.response.data.message,
            });
            
        }
    };
  };