import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    // addPost: (postMessage:string) => void
    newPostText:string
    // updateNewPostText: (newText:string) => void
    dispatch: Function
}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                     posts={props.posts}
                     // addPost={props.addPost}
                     newPostText={props.newPostText}
                     dispatch = {props.dispatch}
            />

        </div>
    )
}
export default Profile;