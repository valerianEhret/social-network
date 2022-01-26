import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {unFollow, follow, UserType, setCurrentPage, toggleIsFollowingProgress, getUsers} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";



//Types

export type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:any[]
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage:(pageNumber:number)=>void
    toggleIsFollowingProgress:(isFetching:boolean, userId:number)=>void
    getUsers:(currentPage:number, pageSize:number)=>void

}

type UsersDataStateType = MapStateToPropsType & MapDispatchToPropsType


//class component
class UsersAPIComponent extends React.Component<UsersDataStateType>{

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        debugger

        this.props.getUsers(pageNumber,this.props.pageSize )
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


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps,
        {follow, unFollow, setCurrentPage,
            toggleIsFollowingProgress, getUsers}),
    // withAuthRedirect
)(UsersAPIComponent)