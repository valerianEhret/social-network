import React from 'react';
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export let store = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, How are you?"},
                {id: 2, message: "It is my firs post"},
                {id: 3, message: "Adyn, Adyn, Adyn!!!"}
            ]
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log("state is changed")
    },

    getState() {
        return this._state
    },
    subsсribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer

    },

    dispatch(action: ActionPropsType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}

export type ActionPropsType = {
    type: string
    message?: string
    newText:string
    body:string
}

export type StorePropsType = {
    _state: RootStateType
    _callSubscriber: (state:RootStateType) => void
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subsсribe: (observer: (state: RootStateType)=> void) =>  void
    getState: () => RootStateType
    dispatch: (action:"string") => void
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string


}
export type SiderbarType = {}

export type Observertype = {
    observer: (state: RootStateType) => void
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SiderbarType
}


export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}

export type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText:string
}

export type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
}

export type UpdateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body :string
}

export type ProfileActionType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType

export const addPostActionCreator = ():AddPostActionCreatorType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text:string):UpdateNewPostTextActionCreatorType =>
    ({ type: UPDATE_NEW_POST_TEXT, newText:text,})

export const sendMessageCreator = ():SendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string):UpdateNewMessageBodyCreatorType =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:body})

// window.store = store;
export default store;