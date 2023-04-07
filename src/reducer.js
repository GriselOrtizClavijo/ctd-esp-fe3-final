
export const reducerTheme = (state, action) => {
    switch (action.type) {
        case "change_theme":
            return { ...state,
                theme: state.theme === "dark" ? "light" : "dark",
                isDark: !state.isDark};
          default:
            return state; 
      } 
  
}

export const reducerForm = (state, action) => {
    switch (action.type) {
        case "addData":
            return {user: [...state.users, action.payload ]}
          default:
            return state; 
      } 
  
}

export const reducerFavs = (state, action) => {
    switch (action.type) {
        case "setFavs":
            return { saveFavs: action.payload };
        case "deleteFavs":
                const newFav = state.saveFavs.filter(
                    (f) => !(f.name === action.payload.name && 
                            f.username === action.payload.username)
                );
                localStorage.setItem("Favs", JSON.stringify(newFav));
            return { saveFavs: newFav };
        default:
            throw new Error();
      } 
  
}

export const reducerAddFav= (state, action) => {
    switch (action.type) {
        case "addFav":
            return [...state, action.payload]
        case "deleteFav":
            return state.filter((fav) => fav.username !== action.payload.username);
        default:
            throw new Error();
      } 
  
}

