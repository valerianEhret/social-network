import React from 'react';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";



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
            newMessage: "sdfs",
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

    dispatch(action:ActionPropsType) { // {type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

type ActionPropsType = {
    type: string
    message?: string
    newText:string
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
    newMessage: string

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


export type addPostActionCreatorType = {
    type: typeof ADD_POST
}

export type updateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText:string
}

export const addPostActionCreator = ():addPostActionCreatorType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text:string):updateNewPostTextActionCreatorType => ({
        type: UPDATE_NEW_POST_TEXT,
        newText:text,
})

// window.store = store;
export default store;