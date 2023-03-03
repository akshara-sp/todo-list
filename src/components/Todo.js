import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

const Todo = ({ todo }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={todo} secondary={todo} />
            </ListItem>
        </List>
    )
}
export default Todo