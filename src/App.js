import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import firebase from 'firebase/compat/app';
import Todo from './components/Todo';
import { db } from './firebase_config';
import Header from './components/Header';

function App() {
    const [todos, setTodos] = useState([])    
    const [input, setInput] = useState('')
    useEffect(() => {
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()})
            ))
        })
    }, [input])

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
        <div className="app">
            <Header />
            <form>
                <FormControl>
                    <InputLabel>Write a To-Do</InputLabel>
                    <Input value={input} onChange={e => setInput(e.target.value)}/>
                </FormControl>
                <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add To-do</Button>
            </form>
            <ul>
                {todos.map(it => <Todo key={it.id} arr={it} />)}
            </ul>
        </div>
    );
}

export default App;