import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

//закидываем все редюсеры сюда, объединяем их для редакса
let reducers = combineReducers(   {
    profilePage:  profileReducer,
    dialogsPage:  dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
})

// отдаем reducers в store

//type of all action creators
export  type AppActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType

//type of all Thunk creators
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, appStateType, unknown, AppActionsType>


export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type appStateType = ReturnType<typeof reducers >

export default store;




