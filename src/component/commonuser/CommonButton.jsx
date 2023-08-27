import React,{useState} from 'react';
import { Button } from '@mui/material';

export default function CommonButton({handleButtonClick}){

    return(
        <>
        <Button variant="contained" style={{backgroundColor:'#947A39',marginRight:'6px'}} onClick={() => handleButtonClick('commonpage')}>
Home
  </Button>
  <Button variant="contained" style={{backgroundColor:'#947A39',marginRight:'6px'}} onClick={() => handleButtonClick('signUp')}>
SignUp
  </Button>
  <Button variant="contained" marg style={{backgroundColor:'#947A39',marginRight:'6px' }} onClick={() => handleButtonClick('signIn')}>
Login
  </Button>
  <Button variant="contained" marg style={{backgroundColor:'#947A39',marginRight:'6px' }} onClick={() => handleButtonClick('leetsolve')}>
Pages
  </Button>
        </>
    )
}