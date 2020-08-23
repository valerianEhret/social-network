import React from 'react';


import {
    dialogsDataType,
    messageDataType,
    sendMessageAC,
    updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';


//type

export type MapStateToPropsType = {
        dialogsPage:Array<dialogsDataType>
    messagesPage:Array<messageDataType>
    newMessageBody:string
}

export type MapDispatchToPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}

// const DialogsContainer = (props:DialogsPageType) => {
//
//         // let state = props.store.getState().dialogsPage
//     //
//     // let dialogsElements = state.dialogs.map( d => <Dialogitem name={d.name} id={d.id}/>   );
//     //
//     // let messagesElements = state.messages.map(m =>  <Message message={m.message} id={m.id}/> )
//
//     // let newMessageBody = props.newMessageBody
//
//     // const onSendMessageClick =() => {
//     //     props.store.dispatch(sendMessageCreator())
//     // }
//     //
//     // const onNewMessageChange = (body:string) => {
//     //     // let body = e.target.value
//     //     let action = updateNewMessageBodyCreator(body)
//     //     // props.dispatch(action)
//     //
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage
//
//                 const onSendMessageClick =() => {
//                     let action = sendMessageCreator()
//                     store.dispatch(action)
//                 }
//
//                 const onNewMessageChange = (body:string) => {
//                     // let body = e.target.value
//                     let action = updateNewMessageBodyCreator(body)
//                     store.dispatch(action)
//
//                 }
//
//                return       <Dialogs
//                     // dialogs={}
//                     // messages={}
//                     // newMessageBody={}
//                     dialogsPage = {state}
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage = {onSendMessageClick}
//                 />
//
//
//             }
//         }
//         </StoreContext.Consumer>
//      // <Dialogs
//      //     // dialogs={}
//      //     // messages={}
//      //     // newMessageBody={}
//      //     dialogsPage = {state}
//      //     updateNewMessageBody={onNewMessageChange}
//      //     sendMessage = {onSendMessageClick}
//      // />
//     )
// }

let mapStateToProps = (state:appStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage.dialogs,
        messagesPage:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody

    }
}



let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }

    }
}

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer