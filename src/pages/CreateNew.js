import { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import firebase from 'firebase/compat/app';
import { db } from '../firebase_config';
import './CreateNew.css';

function CreateNew() {
    const [input, setInput] = useState('')

    const addTodo = e => {
        e.preventDefault()
        if (input.trim().length > 0) {
            db.collection('todos').add({
                todo: input.trim(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setInput('')
    }

    return (
        <div className="create_new">
            <form className='todo_form'>
                <FormControl>
                    <InputLabel>Write a To-Do</InputLabel>
                    <Input value={input} onChange={e => setInput(e.target.value)}/>
                </FormControl>
                <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add To-do</Button>
            </form>
        </div>
    );
}

export default CreateNew;