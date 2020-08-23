import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {appStateType} from "../../redux/redux-store";
import {unFollowAC, followAC, UsersType, setUserAC} from "../../redux/users-reducer";


//Types


export type MapStateToPropsType = {
  usersPage:Array<UsersType>
}

export type MapDispatchToPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void
}

const mapStateToProps = (state:appStateType):MapStateToPropsType=> {
 return {
     usersPage:state.usersPage.users
 }
}



const mapDispatchToProps = (dispatch: Dispatch<any>):MapDispatchToPropsType => {
    return {
        follow: (userId:number) => {
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