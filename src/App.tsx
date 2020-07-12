import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
import store, {ActionPropsType, RootStateType, StorePropsType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    // store:StorePropsType
    // state: RootStateType
    // dispatch: Function
}


function App(props: PropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs"
                           render={() => <DialogsContainer
                               // store={props.store}
                               // messages={props.state.dialogsPage.messages}
                               // dialogs={props.state.dialogsPage.dialogs}
                               // newMessageBody={props.state.dialogsPage.newMessageBody}
                               // dispatch = {props.dispatch}
                           />
                           }/>
                    <Route path="/Profile"
                           render={() => <Profile
                               // store={props.store}
                               // posts={props.state.profilePage.posts}
                               // dispatch={props.dispatch}
                               // newPostText ={props.state.profilePage.newPostText}
                           />
                           }/>
                </div>
            </div>

    );
}

export default App;
