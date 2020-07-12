import React from 'react';
import {AddPostActionCreatorType, PostType, ProfilePageType, UpdateNewPostTextActionCreatorType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


export type ActionType = {
    type: string
    // message: string
    newText: string
}

export const addPostActionCreator = ():AddPostActionCreatorType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text:string):UpdateNewPostTextActionCreatorType =>
    ({ type: UPDATE_NEW_POST_TEXT, newText:text,})

//создаем иницилищационное значение для Редюсера, берем его из старого стора
let initilState:ProfilePageType = {
    newPostText: "",
        posts: [
    {id: 1, message: "Hi, How are you?"},
    {id: 2, message: "It is my firs post"},
    {id: 3, message: "Adyn, Adyn, Adyn!!!"}
],
}


export const profileReducer = (state: ProfilePageType = initilState, action: ActionType): ProfilePageType => {

    switch (action.type) {

        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText
            }
            state.posts.push(newPost);
            state.newPostText = ""

            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state

        default:

            return state
    }

}