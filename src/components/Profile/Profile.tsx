import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";


type PropsType = {
    profile: ProfileType
    status:string
    updateStatus:(title:string)=>void
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;