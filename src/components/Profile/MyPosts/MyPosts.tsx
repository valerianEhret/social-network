import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
// import {strict} from "assert";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type PropsType = {
    posts: Array<PostType>
    newPostText:string
    addPost: () => void
    updateNewPostText: (text:string) => void
    // dispatch: Function
}


const MyPosts = (props:PropsType) => {

    let postElements = props.posts.map( el => <Post message={el.message} />    );

    const onAddPost = () => {
            props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.item}>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange }/>
            </div>
           <div>
               <button onClick={ onAddPost}>Add post</button>
           </div>

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