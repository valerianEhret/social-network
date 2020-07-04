import React from 'react';
import classes from '../Dialogs.module.css'


type PropsType = {
    message:string
    id?:number
}

export const Message = (props:PropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage =() => {
        let messageValue = newMessageElement.current?.value;
        alert("add message")
    }


    return ( <div>
        <div className={classes.message}>
            {props.message}</div>
    </div>


    )
}

