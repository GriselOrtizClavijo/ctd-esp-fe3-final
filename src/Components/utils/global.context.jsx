import { createContext, useContext, useEffect, useReducer} from "react";
import { reducerTheme, reducerDentist, reducerFavs } from "../../reducer";

export const initialState = {theme: "light", isDark : false}
export const initialStateDentist={}
export const initialStateFavs = { saveFavs: [] }

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {

    const[stateDentist, dispatchDentist] = useReducer(reducerDentist, initialStateDentist)
    const [stateTheme, dispatchTheme] = useReducer(reducerTheme, initialState);
    const [stateFavs, dispatch] = useReducer(reducerFavs, initialStateFavs)


    const url = 'https://jsonplaceholder.typicode.com/users'
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => dispatchDentist({type: 'getDentist', payload: data}))
        }, [])
    console.log(stateDentist);


    const changeTheme = () =>{
      dispatchTheme({ type: "change_theme", payload: !stateTheme.isDark })
      console.log(stateTheme);
    }

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
        <ContextGlobal.Provider value={
          {stateDentist, stateTheme, stateFavs, deleteFav, dispatchTheme, changeTheme }}>
            {children}   
        </ContextGlobal.Provider>
      );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)