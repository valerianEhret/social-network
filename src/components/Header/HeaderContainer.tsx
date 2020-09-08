import React, {Dispatch} from 'react';
import {appStateType} from "../../redux/redux-store";
import {UserType} from "../../redux/users-reducer";
import Header from "./Header"
import axios from "axios";
import {connect} from "react-redux";
import {setAutUserData} from "../../redux/auth-reducer";


//Types

export type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}

export type MapDispatchToPropsType = {
    setAutUserData: (id:number | null, login: string | null, email:string | null) => void

}



//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})


//mapDispatchToProps
const mapDispatchToProps = (dispatch: any):MapDispatchToPropsType => {
    return {
        setAutUserData : (id:number | null, login: string | null, email:string | null) => {
            dispatch(setAutUserData(id, login,email))
        },
    }
}


type DataStateType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<DataStateType>{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
         if (response.data.resultCode === 0) {
             let {id, login, email} = response.data.data
             this.props.setAutUserData(id, login, email)
         }
        })
    }

    render() {
        return (
            <div><Header {...this.props}/></div>

            )

    }

}
export default connect(mapStateToProps,{setAutUserData})(HeaderContainer);