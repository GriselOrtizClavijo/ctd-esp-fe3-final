

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import Form from '../Components/Form'



const Contact = () => {


  return (
    <>
      <div className='contact'>
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
      </div>
      <div>
        <Form/>
      </div>
    </>
  )
}

export default Contact