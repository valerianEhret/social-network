import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {
    unFollow,
    follow,
    setUsers,
    UserType,
    setCurrentPage,
    setTotalUsersCount, toggleIsFetching
} from "../../redux/users-reducer";
import { Dispatch } from 'redux';
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


//Types

export type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void

}

type UsersDataStateType = MapStateToPropsType & MapDispatchToPropsType


//class component
class UsersAPIComponent extends React.Component<UsersDataStateType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <>
            {this.props.isFetching? <Preloader/>:null}
            <Users
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unFollow}
        />
        </>
    }
}

//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => {

    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

//mapDispatchToProps
// const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
//     return {
//         follow: (userId:number) => {
//             debugger
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId:number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers:(users:Array<UserType>) => {
//             debugger
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage:(pageNumber:number)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount:(totalUsersCount:number)=>{
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching:(isFetching:boolean)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }







//connect
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent)