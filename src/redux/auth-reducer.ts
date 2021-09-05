import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

//state type
export type DataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

//initial state
let initialState: DataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

//reducer
export const authReducer = (state: DataType = initialState, action: AuthActionsType) => {
    debugger
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

//action Creators
export const setAutUserData = (id: number | null, login: string | null, email: string | null, isAuth:boolean) => {
    return {type: "SET_USER_DATA", payload: {id, login, email, isAuth}} as const
}

//actions type
export type AuthActionsType =
    | ReturnType<typeof setAutUserData>


//Thunk

// export const getAuthUserData = (): AppThunkType => dispatch => {
//     debugger
//     authAPI.me()
//         .then(response => {
//         if (response.data.resultCode === 0) {
//             debugger
//             let {id, login, email} = response.data.data
//             dispatch(setAutUserData(id, login, email, true))
//         }
//     })
// }


export const getAuthUserData = (): AppThunkType => async dispatch => {
    debugger
    try {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            debugger
            let {id, login, email} = response.data.data
            dispatch(setAutUserData(id, login, email, true))

        }
    } catch (e) {

    }

}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    debugger
    try {
        const data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            debugger
            dispatch(getAuthUserData)
            console.log('getAuthUserData')
        }
    } catch (e) {
        throw new Error(e)
    }
}

export const logout = (): AppThunkType => async dispatch => {
    debugger
    try {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAutUserData(null, null, null, false))
        } else {
            //dispatch(error)
        }
        console.log(JSON.stringify(data))

    } catch (e) {

    }
}