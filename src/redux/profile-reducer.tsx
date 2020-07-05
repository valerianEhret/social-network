import React from 'react';
import {PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";



export type ActionType = {
    type: string
    // message: string
    newText:string
}


export const profileReducer = (state:ProfilePageType, action:ActionType):ProfilePageType => {


    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: 5,
            message: state.newPostText
        }
        state.posts.push(newPost);
        state.newPostText = ""

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;

    }


    return state
}