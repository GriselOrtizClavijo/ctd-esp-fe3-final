import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducerTheme } from "../../reducer";

export const initialState = {theme: "light", isDark : false}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
 
    const [stateTheme, dispatch] = useReducer(reducerTheme, initialState);
    const[dentists, setDentist] = useState([])

    const changeTheme = () =>{
      dispatch({ type: "change_theme", payload: !stateTheme.isDark })
      console.log(stateTheme);
    }

    const url = 'https://jsonplaceholder.typicode.com/users'
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setDentist(data))
        }, [])
    console.log(dentists);

      return (
        <ContextGlobal.Provider value={
          {dentists, setDentist, stateTheme, dispatch, changeTheme }}>
            {children}   
        </ContextGlobal.Provider>
      );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)