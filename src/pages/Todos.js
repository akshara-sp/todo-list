import { useEffect, useState } from 'react';
import { db } from '../firebase_config';
import Todo from '../components/Todo';
import './Todos.css';
import { collection, query, where, getDocs } from "firebase/firestore";

function Todos({status}) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const q = query(collection(db, "todos"), 
            where("userid", "==", sessionStorage.getItem('uid')),
            where("status", "==", status));
            const querySnapshot = await getDocs(q);
            setTodos(querySnapshot.docs.map(doc => ({id: doc.id, item: doc.data()})))
        }
        fetchData();
    }, [])

    return (
        <div className='todos'>
            <ul>
                {todos.map(it => <Todo key={it.id} arr={it} status={status} />)}
            </ul>
        </div>
    );
}

export default Todos;