import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {
    DialogsPageType,
    // DialogsPageType,
    DialogType,
    MessageType
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsType = {
    // dialogs: Array<DialogType>
    // messages: Array<MessageType>
    // newMessageBody: string
    // dispatch: Function
    dialogsPage:DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const Dialogs = (props:DialogsType) => {

    // let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map( d => <Dialogitem name={d.name} id={d.id}/>   );

    let messagesElements = props.dialogsPage.messages.map(m =>  <Message message={m.message} id={m.id}/> )

    // let newMessageBody = props.newMessageBody

    const onSendMessageClick =() => {
        props.sendMessage()
        // let action = sendMessageCreator()
        // props.dispatch(action)
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        // let action = updateNewMessageBodyCreator(body)
        // props.dispatch(action)

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
                        value={props.dialogsPage.newMessageBody}
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