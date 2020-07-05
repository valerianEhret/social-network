import React from 'react';
import {DialogsPageType} from "./state";


export type ActionType = {
    type: string
    body:string
}



const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export const dialogsReducer = (state:DialogsPageType, action:ActionType):DialogsPageType => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ""
        state.messages.push({id: 6, message: body})

    }


    return state
}