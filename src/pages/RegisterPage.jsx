import React from 'react'
import { FormControl, TextField, Button} from '@mui/material'


const RegisterPage = () => {
  return (
    <div className='register-page'>
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <FormControl fullWidth>
            <TextField id="filled-basic" label="Full Name" variant="filled" />
            <TextField id="filled-basic" label="Phone" variant="filled" type='number' />
            <TextField id="filled-basic" label="email" variant="filled" />
            <TextField id="filled-basic" label="User Name" variant="filled" />
            <TextField id="filled-basic" label="password" variant="filled" type='password' />
            <Button variant="contained" sx={{marginTop: '20px'}}>Sign Up</Button>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
