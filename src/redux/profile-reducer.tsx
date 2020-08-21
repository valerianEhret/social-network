import React from 'react';



//type

type ActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

export type PostType = {
    id:number
    message:string
}

export type PostDataType = {
    id:number
    message:string
}

//action Creators

export const addPostActionCreator = () => ({type: 'ADD_POST'} as const)

export const updateNewPostTextActionCreator = (text:string) =>
    ({ type: 'UPDATE_NEW_POST_TEXT', newText:text,} as const)

//создаем иницилищационное значение для Редюсера, берем его из старого стора
let initilState = {
    newPostText: "" as string,
        posts: [
    {id: 1, message: "Hi, How are you?"},
    {id: 2, message: "It is my firs post"},
    {id: 3, message: "Adyn, Adyn, Adyn!!!"}
] as Array<PostDataType>,
}


type profileStateType = typeof initilState

export const profileReducer = (state: profileStateType = initilState, action: ActionsType) => {

    switch (action.type) {

        case 'ADD_POST': {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ""

            return stateCopy
        }


        case 'UPDATE_NEW_POST_TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:

            return state
    }

}