import {ERROR, GETCOMICS,COMIC} from "./actions.js";

  const initialState = {
    allComics : [],
    comic: [],
    errorMessage:""
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        case GETCOMICS:
            return {
                ...state,
                allComics: payload,
            };
        case COMIC:
            return {
                ...state,
                comic: payload
            }
        case ERROR:
            return {
                ...state,
                errorMessage:payload,
            }
        default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  