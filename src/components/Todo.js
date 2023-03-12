import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { db } from '../firebase_config'
import './Todo.css'

const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            <DeleteForeverIcon fontSize='large'
                onClick={() => {db.collection('todos').doc(arr.id).delete()}}
            />
        </List>
    )
}
export default Todo