import React from 'react';
import {appStateType} from "../../redux/redux-store";
import Header from "./Header"
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


//Types
export type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}

export type MapDispatchToPropsType = {
    // setAutUserData: (id:number | null, login: string | null, email:string | null) => void
    getAuthUserData:()=>void

}

//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

type DataStateType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<DataStateType>{
    componentDidMount() {
         this.props.getAuthUserData()
    }

    render() {
        return (
            <div><Header {...this.props}/></div>
            )
    }

}
export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);