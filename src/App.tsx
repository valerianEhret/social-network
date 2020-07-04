import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type PropsType = {
    state: RootStateType
    dispatch: Function
    // addPost: (postMessage:string) => void
    // updateNewPostText: (newText:string) => void
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs"
                           render={() => <Dialogs
                               messages={props.state.dialogsPage.messages}
                               dialogs={props.state.dialogsPage.dialogs}
                               newMessage={props.state.dialogsPage.newMessage}
                           />
                           }/>
                    <Route path="/Profile"
                           render={() => <Profile
                               posts={props.state.profilePage.posts}
                               dispatch={props.dispatch}
                               newPostText ={props.state.profilePage.newPostText}
                           />
                           }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
