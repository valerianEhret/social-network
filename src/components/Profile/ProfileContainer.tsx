import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatusTC, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from 'redux'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

//Types
type PathParamsType = {
    userId: number | undefined
}

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


// Types Profile
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
type PhotosType = {
    small: string
    large: string
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatusTC:(userId: number)=>void
    updateStatus:(title:string)=>void
}

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatusTC(userId);
    }



    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </>
    }
}



type MapStateToPropsType = {
    profile: ProfileType
    status:string
    authorizedUserId:number | null
    isAuth:boolean
}

//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth:state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatusTC, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)