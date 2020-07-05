import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText:string
    dispatch: Function
}

const Profile = (props:PropsType) => { // PropsType
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                     posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch = {props.dispatch}
            />

        </div>
    )
}
export default Profile;