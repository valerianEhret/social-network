import React from 'react';
import {profileAPI, usersAPI} from "../api/api";
import {AppThunkType} from "./redux-store";



//type
export type ProfileActionsType =
    | ReturnType<typeof addPostActionCreator>
    // | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type PostType = {
    id:number
    message:string
}

export type PostDataType = {
    id:number
    message:string
}

//создаем иницилищационное значение для Редюсера, берем его из старого стора
let initilState = {
    newMessageBody: "" as string,
        posts: [
    {id: 1, message: "Hi, How are you?"},
    {id: 2, message: "It is my firs post"},
    {id: 3, message: "Adyn, Adyn, Adyn!!!"}
] as Array<PostDataType>,
    profile:null,
    status: ''
}


type profileStateType = typeof initilState

export const profileReducer = (state: profileStateType = initilState, action: ProfileActionsType) => {

    switch (action.type) {

        case 'ADD_POST':
            return  {...state,
                posts: [...state.posts,{id: 5, message: action.newMessageBody} ]}

        // case 'UPDATE_NEW_POST_TEXT':
        //
        // return {...state,
        //     newPostText: action.newText}

        case 'SET_STATUS':
            return {...state, status: action.status}

        case 'SET_USER_PROFILE'   :
            return {...state, profile:action.profile}

        default:
            return state
    }
}

//action Creators

export const addPostActionCreator = (newMessageBody:string) => ({type: 'ADD_POST', newMessageBody} as const)

// export const updateNewPostTextActionCreator = (text:string) =>
//     ({ type: 'UPDATE_NEW_POST_TEXT', newText:text,} as const)

export const setStatus = (status:string) => ({type:'SET_STATUS', status} as const)

export const setUserProfile = (profile:any) => ({type:'SET_USER_PROFILE', profile} as const);

//Thunk
export const getUserProfile = (userId:number):AppThunkType => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getUserStatusTC = (userId:number):AppThunkType => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status:string):AppThunkType => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            debugger
            dispatch(setStatus(status))
        }

    })
}