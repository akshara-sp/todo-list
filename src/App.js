import { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './components/Todo';

function App() {
    const [todos, setTodos] = useState([
        'Make a react-based todo list project',
        'Deploy it on firebase'
    ])
    const [input, setInput] = useState('')
    const addTodo = e => {
        e.preventDefault()
        setTodos([...todos, input])
        setInput('')
    }

    return (
        <div className="app">
            <h1>ToDo List</h1>
            <form>
                <FormControl>
                    <InputLabel>Write a TODO</InputLabel>
                    <Input value={input} onChange={e => setInput(e.target.value)}/>
                </FormControl>
                <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
            </form>
            <ul>
                {todos.map(todo => <Todo todo={todo} />)}
            </ul>
        </div>
    );
}

export default App;