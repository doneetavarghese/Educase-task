import React from 'react'
import TextField from '@mui/material/TextField';
import { MDBRadio } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div>
  <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 col-md-8 col-sm-10 my-1 mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
          <h2 className='mt-2 '>Create your PopX Account</h2>
          <p>We are the best preschool management system in India.</p>
          <TextField id="outlined-basic" label="Full Name&#x22C6;" variant="outlined" className='w-5 my-3'  sx={{width:410,height:50} }/>
          <TextField id="outlined-basic" label="Phone number&#x22C6;" variant="outlined" className='w-5 mb-3'  sx={{width:410,height:50} }/>
          <TextField id="outlined-basic" label="Email address&#x22C6;" variant="outlined" className='w-5 mb-3'  sx={{width:410,height:50} }/>
          <TextField id="outlined-basic" label="Password&#x22C6;" variant="outlined" className='w-5 mb-3'  sx={{width:410,height:50} }/>
          <TextField id="outlined-basic" label="Company name&#x22C6;" variant="outlined" className='w-5 mb-3'  sx={{width:410,height:50} }/>
          <h6>Are you an Agency ?</h6>
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
          
          <Link to={'/account settings'}><button className=' btn btn-primary btn-block mb-5 my-5' style={{color:'white'}}>Create Account</button></Link>

        </div>
        <div className="col-lg-4"></div>
      </div>
      
    </div>
  )
}

export default Register