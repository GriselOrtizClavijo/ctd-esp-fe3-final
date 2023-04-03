import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentists} = useContextGlobal()

  const navigate = useNavigate();
  const params = useParams();
  const dentistSelect = dentists.find((dentist) => parseInt(params.id) === dentist.id)

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='divTable'>
        
      {/* <h2 className='name'>Name: {dentistSelect.name}</h2>
        <img className="avatar" src={window.location.origin + '/images/doctor.jpg'} alt="Imagen no disponible"/>
        <h4 className='name'>Email: {dentistSelect.email}</h4>
        <h4 className='name'>Phone: {dentistSelect.phone}</h4>
        <h4 className='name'>Website: {dentistSelect.website}</h4> */}
        <table>
            <thead>
              <tr>
                <th>Photo:</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Phone:</th>
                <th>Website:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img className="avatar imgTable" src={window.location.origin + '/images/doctor.jpg'} alt="Imagen no disponible"/></td>
                <td>{dentistSelect.name}</td>
                <td>{dentistSelect.email}</td>
                <td>{dentistSelect.phone}</td>
                <td>{dentistSelect.website}</td>
              </tr>
            </tbody>
          </table>
          <button className='buttonBack' onClick={() => navigate('/')}>Go back Home</button>
    </div>
   
    </>
  )
}

export default Detail