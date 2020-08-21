import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


//закидываем все редюсеры сюда, объединяем их для редакса
let reducers = combineReducers(   {
    profilePage:  profileReducer,
    dialogsPage:  dialogsReducer,
    sidebar: sidebarReducer,
})

// отдаем reducers в store

export let store = createStore(reducers)

export type appStateType = ReturnType<typeof reducers >

export default store;




