import React from 'react';
import {DialogsPageType, SendMessageCreatorType, UpdateNewMessageBodyCreatorType} from "./state";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export type ActionType = {
    type: string
    body:string
}

export const sendMessageCreator = ():SendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string):UpdateNewMessageBodyCreatorType =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:body})



export const dialogsReducer = (state:DialogsPageType, action:ActionType):DialogsPageType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body

            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})

            return state

        default:

            return state
    }



}