import React from 'react';
import {
    dialogsDataType,
    messageDataType,
    sendMessageAC,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

//type
export type MapStateToPropsType = {
    dialogsPage: Array<dialogsDataType>
    messagesPage: Array<messageDataType>
    newMessageBody: string
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
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
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

