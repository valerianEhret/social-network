import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";
import { Redirect } from 'react-router-dom';


type DialogDataStateType = MapStateToPropsType & MapDispatchToPropsType



const Dialogs = (props:DialogDataStateType) => {


    let dialogsElements = props.dialogsPage.map( d => <Dialogitem name={d.name} id={d.id}/>   );

    let messagesElements = props.messagesPage.map(m =>  <Message message={m.message} id={m.id}/> )


    const onSendMessageClick =() => {
        props.sendMessage()
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

   // if (!props.isAuth) return <Redirect to={'/login'}/>



    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={props.newMessageBody}
                        placeholder="Enter your message"
                        onChange={onNewMessageChange}
                    />
                    </div>
                    <div><button onClick={ onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs