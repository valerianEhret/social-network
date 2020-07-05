import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {
    // DialogsPageType,
    DialogType,
    MessageType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/state";

    type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: Function


}


const Dialogs = (props:DialogsPageType) => {

    // let state = props.store.getState().dialogsPage

    let dialogsElements = props.dialogs.map( d => <Dialogitem name={d.name} id={d.id}/>   );

    let messagesElements = props.messages.map(m =>  <Message message={m.message} id={m.id}/> )

    let newMessageBody = props.newMessageBody

    const onSendMessageClick =() => {
        let action = sendMessageCreator()
        props.dispatch(action)
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        let action = updateNewMessageBodyCreator(body)
        props.dispatch(action)

    }

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