import React, {Dispatch} from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {UserType} from "../../redux/users-reducer";
import {setUserProfile} from "../../redux/profile-reducer";


//Types

export type MapStateToPropsType = {
    profile:any
}

export type MapDispatchToPropsType = {
    setUserProfile:(profile:any)=>void
}



type ProfileDataStateType = MapStateToPropsType & MapDispatchToPropsType



class ProfileContainer extends React.Component <ProfileDataStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, appStateType>(mapStateToProps, {setUserProfile})(ProfileContainer);