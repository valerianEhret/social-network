import {AppThunkType} from "./redux-store";
import {InferActionsType} from "./ActionsType";
import {authActions, getAuthUserData} from "./auth-reducer";
import {authAPI} from "../api/api";


export enum AppEvents {
    INITIALIZED_SUCCEEDED = 'SOCIAL-NETWORK/APP/INITIALIZED-SUCCEEDED'
}


//state type
type StateType = {
    initialized: boolean
}

//initial state
let initialState: StateType = {
    initialized: false
}

//reducer
export const appReducer = (state: StateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case AppEvents.INITIALIZED_SUCCEEDED:
            debugger
            return {
                ...state, initialized:true
            }
        default:
            return state
    }
}

//action Creators

export const appActions = {
    InitializedSucceededAC: () => ({type: AppEvents.INITIALIZED_SUCCEEDED} as const),
}

//actions type
export type AppActionsType = InferActionsType<typeof appActions>



//Thunk

export const initializingTC = (): AppThunkType => async dispatch => {
    debugger
    try {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(authActions.setAutUserData(id, login, email, true))
        }
        dispatch(appActions.InitializedSucceededAC())
    } catch(e) {

    } finally {

    }
}
