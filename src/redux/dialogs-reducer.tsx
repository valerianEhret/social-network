import React from 'react';
import {DialogsPageType, SendMessageCreatorType, UpdateNewMessageBodyCreatorType} from "./store";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export type ActionType = {
    type: string
    body:string
}

export const sendMessageCreator = ():SendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string):UpdateNewMessageBodyCreatorType =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:body})
// создаем начальное значение для редюсера, берем его из старого стора
let initialState:DialogsPageType  = {
    newMessageBody: "",
    dialogs: [
        {id: 1, name: "Valerian"},
        {id: 2, name: "Natalia"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Zoe"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I am fine"},
        {id: 4, message: "Yo!"},
    ],
}

export const dialogsReducer = (state:DialogsPageType = initialState, action:ActionType):DialogsPageType => {

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