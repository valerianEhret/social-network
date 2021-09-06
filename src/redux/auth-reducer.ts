import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {InferActionsType} from "./ActionsType";

//state type
export type DataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    error:string
}

//initial state
let initialState: DataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    error:'',
}

//reducer
export const authReducer = (state: DataType = initialState, action: AuthActionsType) => {
    debugger
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state, ...action.payload
            }
        case "SET_ERROR":
            return {
                ...state, error:action.error
            }


        default:
            return state
    }
}

//action Creators

export const authActions = {
    setAutUserData: (id: number | null, login: string | null, email: string | null, isAuth:boolean) => {
        return {
            type: "SET_USER_DATA",
            payload: {id, login, email, isAuth}
        } as const
    },
    setError: (error:string) => {
        return {
            type: "SET_ERROR",
            error
        } as const
    }
}

// export const setAutUserData = (id: number | null, login: string | null, email: string | null, isAuth:boolean) => {
//     return {type: "SET_USER_DATA", payload: {id, login, email, isAuth}} as const
// }

//actions type
export type AuthActionsType = InferActionsType<typeof authActions>
    // | ReturnType<typeof setAutUserData>


//Thunk

export const getAuthUserData = (): AppThunkType => async dispatch => {
    try {
       const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            debugger
            let {id, login, email} = response.data.data
            dispatch(authActions.setAutUserData(id, login, email, true))
        } else {
            // let action = stopSubmit();
        }
    } catch (e) {

    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    debugger
    try {
        const data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
            console.log('getAuthUserData')
        }
        if (data.resultCode === 10 || data.resultCode === 1  ) {
            let message = data.messages.length > 0? data.messages[0] : 'Some error'
            dispatch(authActions.setError(message))
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
            dispatch(authActions.setAutUserData(null, null, null, false))
        } else {
            //dispatch(error)
        }
        console.log(JSON.stringify(data))

    } catch (e) {

    }
}