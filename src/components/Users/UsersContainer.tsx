import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {appStateType} from "../../redux/redux-store";
import {unFollowAC, followAC, UsersType, setUserAC, UserType} from "../../redux/users-reducer";
import { Dispatch } from 'redux';


//Types


export type MapStateToPropsType = {
  usersPage:Array<UserType>
}

export type MapDispatchToPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UserType>)=>void
}

const mapStateToProps = (state:appStateType):MapStateToPropsType=> {
 return {
     usersPage:state.usersPage.users
 }
}



const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId:number) => {
            debugger
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:Array<UsersType>) => {
            dispatch(setUserAC(users))
        }
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps)(Users)