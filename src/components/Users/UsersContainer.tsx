import React from "react";
import {connect} from "react-redux";
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
import axios from "axios";
import {Users} from "./Users";


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

type UsersDataStateType = MapStateToPropsType & MapDispatchToPropsType


//class component
class UsersAPIComponent extends React.Component<UsersDataStateType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <Users
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => {

    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
}

//mapDispatchToProps
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

//connect
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)