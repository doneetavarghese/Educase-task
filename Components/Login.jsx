import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 col-md-8 col-sm-10 my-5 mt-5 mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
          <h2 className='mt-5 '>Signin to your PopX Account</h2>
          <p>We are the best preschool management system in India.</p>
          <TextField id="outlined-basic" label="Email Adress" variant="outlined" className='w-5 my-3' placeholder='Enter email address' sx={{width:410,height:50} }/>
          <TextField id="outlined-basic" label="Password" variant="outlined" className='w-5 mb-3' placeholder='Enter password' sx={{width:410,height:50} }/>

         <Link to={'/account settings'}> <button className=' btn btn-dark btn-block mb-5' style={{backgroundColor:'DarkGray',color:'white'}}>Login</button></Link>

        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}
export default Login