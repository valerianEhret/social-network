import React from 'react';
import classes from '../Message/Message';




type MessagePropsType = {
    text: string
}




export const Message = (props:MessagePropsType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}

