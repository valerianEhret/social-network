import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {
    // DialogsPageType,
    DialogType,
    MessageType, StorePropsType
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

    type DialogsPageType = {
        // store:StorePropsType
    // dialogs: Array<DialogType>
    // messages: Array<MessageType>
    // newMessageBody: string
    // dispatch: Function
}

const DialogsContainer = (props:DialogsPageType) => {

        // let state = props.store.getState().dialogsPage
    //
    // let dialogsElements = state.dialogs.map( d => <Dialogitem name={d.name} id={d.id}/>   );
    //
    // let messagesElements = state.messages.map(m =>  <Message message={m.message} id={m.id}/> )

    // let newMessageBody = props.newMessageBody

    // const onSendMessageClick =() => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    //
    // const onNewMessageChange = (body:string) => {
    //     // let body = e.target.value
    //     let action = updateNewMessageBodyCreator(body)
    //     // props.dispatch(action)
    //
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onSendMessageClick =() => {
                    let action = sendMessageCreator()
                    store.dispatch(action)
                }

                const onNewMessageChange = (body:string) => {
                    // let body = e.target.value
                    let action = updateNewMessageBodyCreator(body)
                    store.dispatch(action)

                }

               return       <Dialogs
                    // dialogs={}
                    // messages={}
                    // newMessageBody={}
                    dialogsPage = {state}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage = {onSendMessageClick}
                />


            }
        }
        </StoreContext.Consumer>
     // <Dialogs
     //     // dialogs={}
     //     // messages={}
     //     // newMessageBody={}
     //     dialogsPage = {state}
     //     updateNewMessageBody={onNewMessageChange}
     //     sendMessage = {onSendMessageClick}
     // />
    )
}
export default DialogsContainer