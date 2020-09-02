import React, {Dispatch} from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {UserType} from "../../redux/users-reducer";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

//Types

//
//type whatever you expect in 'this.props.match.params.userId'
type PathParamsType = {
    userId:number | undefined
}

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType>&OwnPropsType



// Types Profile
export type ProfileType = {
    aboutMe:string
    contacts:ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    userId:number
    photos:PhotosType
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
    small:string
    large:string
}
//

//
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile:ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType)=>void
}
//




class ProfileContainer extends React.Component <PropsType> {


    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
    }
}

//mapStateToProps

    const mapStateToProps = (state: appStateType): MapStateToPropsType => {
        return {
            profile: state.profilePage.profile
        }
    }




//mapDispatchToProps
//     const
//     mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
//          {}
//     })


let WithUrlDataContainerComponent  = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);