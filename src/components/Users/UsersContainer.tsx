import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {
    unFollow,
    follow,
    setUsers,
    UserType,
    setCurrentPage,
    setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";
// import {getUsers} from "../../api/api";

//Types

export type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    // followingInProgress:boolean
    followingInProgress:any[]
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
    toggleIsFollowingProgress:(isFetching:boolean, userId:number)=>void

}

type UsersDataStateType = MapStateToPropsType & MapDispatchToPropsType


//class component
class UsersAPIComponent extends React.Component<UsersDataStateType>{

    componentDidMount() {

        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         debugger
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {

            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress:state.usersPage.followingInProgress,

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
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress})(UsersAPIComponent)