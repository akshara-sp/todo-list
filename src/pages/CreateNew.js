
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';
import { db, auth } from '../firebase_config';
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginTop: '40px',

    '& .MuiTextField-root': {
      marginTop: "10px",
      margin: 1,
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: 2,
      marginTop: "20px",
    },
  },
}));

function loggedIn() {
  if (sessionStorage.getItem('uid')) {
    return true
  } else {
    return false
  }
}

const CreateNew = () => {

  const classes = useStyles();
  // create state variables for each input
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState(firebase.firestore.FieldValue.serverTimestamp());

  let navigate = useNavigate();

  const user = auth.currentUser;
  console.log("current user")
  console.log(user);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(email, password);
    console.log(due)
    if (todo.trim().length > 0) {
        db.collection('todos').add({
            todo: todo.trim(),
            description: description.trim(),
            due: due,
            userid: user.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'created'
        })
        setTodo('')
        setDescription('')
        setDue('')
        navigate('/')
    }
  };

  if (!loggedIn()) {
    return (<div></div>)
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant="h6">
            Write a To-Do
      </Typography>
      <TextField
        label="To-Do"
        variant="outlined"
        type="text"
        required
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextField
        label="Due"
        variant="outlined"
        type="datetime-local"
        value={due}
        required
        onChange={e => setDue(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Create New To-Do
        </Button>
      </div>
    </form>
  );
};

export default CreateNew;
