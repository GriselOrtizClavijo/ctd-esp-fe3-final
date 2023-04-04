import React, { useReducer, useState } from "react";
import { reducerForm } from "../reducer";
import '../index.css'

const initialState = {users: []}


const Form = () => {

  const[state, dispatch]=useReducer(reducerForm, initialState)
  const[error, setError]=useState('')

  const[newUser, setNewUser] = useState({
      name: '',
      email: ''
    })

    const handleChange = (e) => {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
      })
  }

  const addUser = (e) => {
    e.preventDefault()
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const emailTest = emailRegex.test(newUser.email)
    
    if(newUser.name.length > 5 && emailTest) {
        dispatch({type:'addData', payload: newUser})
        setError(`Gracias  ${newUser.name}   te contactáremos cuanto antes vía mail`)
      } else {
        setError('Por favor verifique su información nuevamente')
      }
      console.log(state); 
}

  return (
    <div>
      <form  onSubmit={addUser}>
          <label>Nombre Completo
          <input type='text' name="name" onChange={handleChange}/>
          </label>
          <label>Email
          <input  name="email" onChange={handleChange}/>
          </label>
              <button className="favButton">Enviar</button>
              <br/>
              <p style={{textAlign : 'center'}}>{error}</p>
        </form>
    </div>
  );
};

export default Form;
