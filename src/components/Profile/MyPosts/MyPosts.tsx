import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";
import {strict} from "assert";

type PropsType = {
    posts: Array<PostType>
    newPostText:string
    dispatch: Function
}



const MyPosts = (props:PropsType) => {


    let postElements = props.posts.map( el => <Post message={el.message} />    );



    let addPost = () => {

            props.dispatch(addPostActionCreator())

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.item}>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange }/>
            </div>
           <div>
               <button onClick={ addPost}>Add post</button>
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