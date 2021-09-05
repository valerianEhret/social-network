// import React from 'react';
// // import {SiderbarType} from "./store";
//
//
// type SiderbarType = {}
//
// let initialState:SiderbarType  = {
//
// }
//
//
// export const sidebarReducer = (state:SiderbarType=initialState, action:any):SiderbarType => {
//     return state
// }


export type FriendType = {
    id: number
    name: string
}

export type SidebarType = {
    friends: Array<FriendType>
}


const initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Natalia'},
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Zoe'}
    ]
}
type ActionsType = {}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType) => {

    return state
}