import React from 'react'
import Card from '../Components/Card'
import { Link, Outlet } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const {stateDentist} = useContextGlobal()
  
  return (
    <main >
      <div className='card-grid'>
       
        {stateDentist?.length ? stateDentist.map((dentist) => ( 
            <Link key={dentist.id}  to={`/details/${dentist.id}`}  >
                <Card dentist={dentist}/>
            </Link> ))
            :null
          }

      </div>
      <Outlet/>
    </main>
  )
}

export default Home