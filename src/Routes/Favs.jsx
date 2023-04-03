import { useEffect, useReducer} from "react";
import Card from "../Components/Card";
import { reducerFavs } from "../reducer";

const initialState = { saveFavs: [] };

const Favs = () => {

  const [state, dispatch] = useReducer(reducerFavs, initialState);



  useEffect(() => {
    const listFavs = localStorage.getItem('Favs')
    if(listFavs){
      dispatch({ type: "setFavs", payload: JSON.parse(listFavs) });
    }
  }, [])

  const deleteFav = (name, username) => {
    dispatch({ type: "deleteFavs", payload: { name, username } });
  }

  return (
    <>
      <h1>Dentists Favs</h1>
        <div className="card-grid">
         {state.saveFavs.length > 0 ? state.saveFavs.map(fav => (
            <div key={fav.name + fav.username}>
                <Card dentist={fav}/> 
                <button onClick={()=> deleteFav(fav.name, fav.username) } 
                className="buttonBack">Delete Favorite
                </button>
            </div>
         )) : <p>No favorites yet</p>
        }
      </div>
    </>
  );
};

export default Favs;
