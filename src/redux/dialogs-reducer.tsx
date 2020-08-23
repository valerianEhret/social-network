import React from 'react';


// создаем начальное значение для редюсера, берем его из старого стора
let initialState  = {
    newMessageBody: "" as string,
    dialogs: [
        {id: 1, name: "Valerian"},
        {id: 2, name: "Natalia"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Zoe"},
    ] as Array<dialogsDataType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I am fine"},
        {id: 4, message: "Yo!"},
    ] as Array<messageDataType>,
}

//action creators

export const sendMessageAC = () => ({type: 'SEND_MESSAGE'} as const)
export const updateNewMessageBodyCreator = (body:string) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body:body}as const)




export type dialogsStateType = typeof initialState

// reducer

export const dialogsReducer = (state:dialogsStateType = initialState,action:ActionsType) => {

    switch (action.type) {

        case 'UPDATE_NEW_MESSAGE_BODY':
            return  {
                ...state,
                newMessageBody: action.body
            }

        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            return  {...state,
                newMessageBody:'',
                messages: [...state.messages,{id: 6, message: body} ] }

        default:

            return state
    }

}

//type
type ActionsType =
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyCreator>

// type actionType = inferType<typeof action>
// type inferType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never
//
// export let action = {
//      sendMessageCreator : () => ({type: 'SEND_MESSAGE'} as const),
//      updateNewMessageBodyCreator : (body:string) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body:body}as const)
// }


export type dialogsDataType={
    id:number
    name:string
}

export type messageDataType={
    id:number
    message:string
}

