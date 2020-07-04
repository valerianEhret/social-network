import React from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";




const Dialogs = (props:DialogsPageType) => {

    let dialogsElements = props.dialogs.map( d => <Dialogitem name={d.name} id={d.id}/>   );

    let messagesElements = props.messages.map(m =>  <Message message={m.message} id={m.id}/> )

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <button onClick={ () => alert("add")  }>add</button>
            <textarea value={props.newMessage} />
        </div>
    )
}
export default Dialogs