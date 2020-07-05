import React from 'react';
import {AddPostActionCreatorType, PostType, ProfilePageType, UpdateNewPostTextActionCreatorType} from "./state";

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


export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {

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