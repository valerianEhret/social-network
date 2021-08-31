import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, PostType} from "../../../redux/profile-reducer";
import {AddMessageForm} from "../../Dialogs/AddMessageForm/AddMessageForm";

type PropsType = {
    posts: Array<PostType>
    newMessageBody:string
    addPost: (newMessageBody:string) => void
    // updateNewPostText: (text:string) => void
}


const MyPosts = (props:PropsType) => {

    let postElements = props.posts.map( el => <Post message={el.message} />    );

    return (
        <div className={classes.item}>
            <AddMessageForm buttonTitle='Add post' sendMessage={addPostActionCreator}/>
            <h3>My posts</h3>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;