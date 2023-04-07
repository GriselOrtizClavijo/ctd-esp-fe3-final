import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContextGlobal } from "./Components/utils/global.context";



function App() {
  const { changeTheme, stateTheme} = useContextGlobal()

  return (
      <div className={`App ${stateTheme.isDark ? 'dark' : 'light'}`} changeTheme = {changeTheme}>
        <Navbar/>
        {/* <div className="main-container"> */}
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.details} element={<Detail/>}/>
          </Routes>
          {/* </div> */}
        <Footer/>
      </div>
  );
}

export default App;
