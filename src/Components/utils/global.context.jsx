import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducer";

export const initialState = {theme: "light", isDark : false}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState);

    const[dentists, setDentist] = useState([])

    const changeTheme = () =>{
      dispatch({ type: "change_theme", payload: !state.isDark })
      console.log(state);
    
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
          {dentists, setDentist, state, dispatch, changeTheme }}>
            {children}
           
        </ContextGlobal.Provider>
      );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)