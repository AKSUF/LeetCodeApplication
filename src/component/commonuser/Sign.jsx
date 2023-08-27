import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,

  createTheme,
  ThemeProvider,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
marginTop:'8px'
  },
  form: {
    width: '100%',
  },
 
}));

export default function SignIn(){
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your login logic here
    };
    return(
        <>


<Container component="main">
      <div className={classes.container}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} style={{marginTop:'12px'}}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} style={{marginTop:'12px'}}
          />
          <Button
            className={classes.submitButton}
            type="submit"
            fullWidth
            variant="contained"
            color="primary" style={{marginTop:'10px'}}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>


       
        </>
    )
}