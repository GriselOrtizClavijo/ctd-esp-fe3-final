import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const {stateDentist} = useContextGlobal()

  const navigate = useNavigate();
  const params = useParams();
  const dentistSelect = stateDentist.find((dentist) => parseInt(params.id) === dentist.id)

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='divTable'>
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
                <td><img className="avatar imgTable" src='/images/doctor.jpg' alt="Imagen no disponible"/></td>
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