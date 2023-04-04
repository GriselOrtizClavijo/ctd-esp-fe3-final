import  { React,useReducer, useState} from "react";
import { reducerAddFav } from "../reducer";

const initialState = [];

const Card = ({dentist, favs, setFavs}) => {
  let addFavImg = <img className="star" src='/images/star.png' alt="Imagen no disponible"/>
  const [state, dispatch] = useReducer(reducerAddFav, initialState);
  const [add, setAdd] = useState(addFavImg)

  const addFav = (e) => {
    e.preventDefault()
      const favs = localStorage.getItem('Favs')
      let favsDentist = []
      if(favs) {
        favsDentist = JSON.parse(favs)
      }
  

    const saveFavs = favsDentist.some(
      (f) => f.name === dentist.name && f.username === dentist.username 
      )
          if(saveFavs){
            setAdd('Added')
            return
          }
          dispatch({
            type: 'addFav',
            payload: { name: dentist.name, username: dentist.username },
          });
            localStorage.setItem(
              'Favs',
              JSON.stringify([...favsDentist, { 
                name: dentist.name, 
                username: dentist.username 
        }]) 
        
      )  
      alert(`The dentist ${dentist.name} has been added`)
      console.log(state);
  }
 

  return (
    <>
    <div className="card">
          <img className="avatar" src='/images/doctor.jpg' alt="Imagen no disponible"/>
          <h2 className="name">{dentist.name}</h2>
          <h4 className="name">{dentist.username}</h4>
          <button onClick= {addFav} className="favButton">{add}</button>
    </div>
      
    </>
  );
};

export default Card;
