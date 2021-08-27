import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux'

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
type MapStateToPropsType = {
    profile: ProfileType
    // isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to='/login'/>
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}


//mapStateToProps
const mapStateToProps = (state: appStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        // isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)