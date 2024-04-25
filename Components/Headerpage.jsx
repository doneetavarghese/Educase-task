import React from 'react'
import { Link } from 'react-router-dom'

function Headerpage() {
  return (
    <div>
      <div className="row my-5"></div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 my-5 mx-2">
          <h2 style={{fontWeight:'bold'}}>Welcome to PopX</h2>
          <p>We are an educational start-up with an aim to digitize and modernize education, particularly pre-school education. </p>
          
         <Link to={'/register'}> <button className='btn btn-primary btn-block my-2 ' style={{color:'white'}}>Create Account</button> </Link>

        <Link to={'/login'}><button className='btn btn-block' style={{backgroundColor:'Lavender'}}>Alredy Registered ? Login</button></Link>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}

export default Headerpage