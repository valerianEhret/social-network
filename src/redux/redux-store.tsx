import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


//закидываем все редюсеры сюда, объединяем их для редакса
let reducers = combineReducers(   {
    profilePage:  profileReducer,
    dialogsPage:  dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
})

// отдаем reducers в store

export let store = createStore(reducers)

export type appStateType = ReturnType<typeof reducers >

export default store;




