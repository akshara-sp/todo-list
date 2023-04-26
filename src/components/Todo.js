import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { db } from '../firebase_config'
import './Todo.css'

const Todo = ({ arr, status }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            {(status==='created') && 
            <CheckCircle fontSize='large' onClick={() => {db.collection('todos').doc(arr.id).update({'status': 'done'})}}
            />}
            <DeleteForeverIcon fontSize='large'
                onClick={() => {db.collection('todos').doc(arr.id).delete()}}
            />
        </List>
    )
}
export default Todo