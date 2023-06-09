import  { React,useReducer, useState} from "react";
import Swal from "sweetalert2";
import { reducerAddFav } from "../reducer";

const initialState = [];

const Card = ({dentist}) => {
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
      Swal.fire('¡Muy bien!', `The dentist ${dentist.name} has been added`)
      // alert(`The dentist ${dentist.name} has been added`)
      setAdd('Added')
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
