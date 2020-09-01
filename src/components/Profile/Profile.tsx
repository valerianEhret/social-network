import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {

}

const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />

        </div>
    )
}
export default Profile;