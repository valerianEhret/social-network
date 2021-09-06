import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializingTC} from "./redux/app-reducer";
import {appStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


export type MapDispatchToPropsType = {
    initializingTC:()=>void
}



class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.initializingTC()
    }

    render() {
        debugger
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div>
                <HeaderContainer/>
                <div className="app-wrapper">

                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route path="/Dialogs"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login"
                               render={() => <Login/>}/>
                    </div>

                </div>

            </div>

        );
    }
}

type MapStateToPropsType = {
    initialized:boolean
}


const mapStateToProps = (state:appStateType):MapStateToPropsType => ({
    initialized: state.app.initialized
})


export default compose<React.ComponentType>(
    withRouter,
    (connect(mapStateToProps, {initializingTC}))
)(App);
