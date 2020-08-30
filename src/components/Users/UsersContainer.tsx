import React from "react";
import {connect} from "react-redux";
import Users from "./UsersC";
import {appStateType} from "../../redux/redux-store";
import {
    unFollowAC,
    followAC,
    setUserAC,
    UserType,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../../redux/users-reducer";
import { Dispatch } from 'redux';


//Types


export type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}

const mapStateToProps = (state: appStateType): MapStateToPropsType => {

    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

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
        setUsers:(users:Array<UserType>) => {
            debugger
            dispatch(setUserAC(users))
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps)(Users)