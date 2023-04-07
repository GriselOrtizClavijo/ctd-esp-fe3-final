import { routes } from '../routes'
import { Link } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'

const Navbar = () => {

  const{changeTheme, stateTheme} = useContextGlobal()
 
 
  return (
    <nav className={`header ${stateTheme.isDark ? 'dark' : 'light'}`}>
      <img className='imageDh' src= '/images/dhOdonto.png' alt="Imagen no disponible"/>
        <div className='links'>
          <Link to={routes.home}><h4> Home </h4></Link> 
          <Link to={routes.contact}><h4> Contact</h4></Link> 
          <Link to={routes.favs}><h4> Favs </h4></Link>
        </div>

      <img className='buttoNav' onClick = {changeTheme} src='/images/sunMoon.png' alt="" />
    </nav>
  )
}

export default Navbar