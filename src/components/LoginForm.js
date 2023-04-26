
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase_config';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginTop: "40px",

    '& .MuiTextField-root': {
      margin: 1,
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: 2,
    },
  },
}));

const LoginForm = () => {

  const classes = useStyles();
  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          sessionStorage.setItem('uid', response.user.uid)
          navigate('/')
        }).catch((error) => {
          console.log('Login Failed!')
          console.log(error)
        });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
