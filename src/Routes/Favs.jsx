// import { useEffect, useReducer} from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
// import {deleteFav} from '../Components/utils/global.context'
// import { reducerFavs } from "../reducer";

// const initialState = { saveFavs: [] };

const Favs = () => {

  const {stateFavs, deleteFav} = useContextGlobal()

  // const [state, dispatch] = useReducer(reducerFavs, initialState);

  // useEffect(() => {
  //   const listFavs = localStorage.getItem('Favs')
  //   if(listFavs){
  //     dispatch({ type: "setFavs", payload: JSON.parse(listFavs) });
  //   }
  // }, [])

  // const deleteFav = (name, username) => {
  //   dispatch({ type: "deleteFavs", payload: { name, username } });
  // }

  return (
    <>
      <h1>Dentists Favs</h1>
        <div className="card-grid">
         {stateFavs.saveFavs.length > 0 ? stateFavs.saveFavs.map(fav => (
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
