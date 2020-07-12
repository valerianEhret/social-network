import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


//закидываем все редюсеры сюда, объединяем их для редакса
let reducers = combineReducers(   {
    profileReducer:  profileReducer,
    dialogsReducer:  dialogsReducer,
    sidebarReducer: sidebarReducer,
})

// отдаем reducers в store

export let store = createStore(reducers)

export default store;