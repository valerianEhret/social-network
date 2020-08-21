import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {dialogsDataType, dialogsStateType} from "../../redux/dialogs-reducer";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";


// type DialogsType = {
//     dialogsPage:dialogsStateType
//     updateNewMessageBody: (body: string) => void
//     sendMessage: () => void
// }

type DialogDataStateType = MapStateToPropsType & MapDispatchToPropsType



const Dialogs = (props:DialogDataStateType) => {

    // let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.map( d => <Dialogitem name={d.name} id={d.id}/>   );

    let messagesElements = props.messagesPage.map(m =>  <Message message={m.message} id={m.id}/> )

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