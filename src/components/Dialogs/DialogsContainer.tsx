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
import {Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


//type

export type MapStateToPropsType = {
    dialogsPage: Array<dialogsDataType>
    messagesPage: Array<messageDataType>
    newMessageBody: string
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}


let mapStateToProps = (state: appStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage.dialogs,
        messagesPage: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth

    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

export const DialogsContainer = withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer

