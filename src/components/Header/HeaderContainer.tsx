import React from 'react';
import {appStateType} from "../../redux/redux-store";
import Header from "./Header"
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


//Types
export type MapStateToPropsType = {
    isAuth:boolean
    login:string | null

}

export type MapDispatchToPropsType = {
    logout:()=>void
}

//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

type DataStateType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<DataStateType>{


    render() {
        return (
            <div><Header {...this.props}/></div>
            )
    }

}
export default connect(mapStateToProps,{logout})(HeaderContainer);