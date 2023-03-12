import { useState } from 'react';
import { db } from '../firebase_config';
import Todo from '../components/Todo';
import './Home.css';

function Home() {
    const [todos, setTodos] = useState([])    
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({
            id: doc.id,
            item: doc.data()})
        ))
    })

    return (
        <div className="home">
            <div className='todos'>
                <ul>
                    {todos.map(it => <Todo key={it.id} arr={it} />)}
                </ul>
            </div>
        </div>
    );
}

export default Home;