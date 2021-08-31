import React from 'react';
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialogitem} from "./DialogItem/DialogItem";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {sendMessageAC} from "../../redux/dialogs-reducer";

type DialogDataStateType = MapStateToPropsType & MapDispatchToPropsType

const Dialogs: React.FC<DialogDataStateType> = (
    {
        dialogsPage, messagesPage
    }) => {

    let dialogsElements = dialogsPage.map(d => <Dialogitem name={d.name} id={d.id}/>);
    let messagesElements = messagesPage.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm buttonTitle={'Send'} sendMessage={sendMessageAC}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs






