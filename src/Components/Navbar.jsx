import { routes } from '../routes'
import { Link } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const{changeTheme, state} = useContextGlobal()
 
 
  return (
    <nav className={`header ${state.isDark ? 'dark' : 'light'}`}>
      <img className='imageDh' src={window.location.origin + '/images/DH.png'} alt="Imagen no disponible"/>
        <div className='links'>
          <Link to={routes.home}><h4> Home </h4></Link> 
          <Link to={routes.contact}><h4> Contact</h4></Link> 
          <Link to={routes.favs}><h4> Favs </h4></Link>
        </div>
      {/* <button className='buttoNav' onClick = {changeTheme}>Change theme</button> */}
      <img className='buttoNav' onClick = {changeTheme} src={window.location.origin + '/images/sunMoon.png'} alt="" />
    </nav>
  )
}

export default Navbar