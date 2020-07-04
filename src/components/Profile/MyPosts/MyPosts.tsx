import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    // addPost: (postMessage:string) => void
    newPostText:string
    dispatch: Function
    // updateNewPostText: (newText:string) => void
}

const MyPosts = (props:PropsType) => {


    let postElements = props.posts.map( el => <Post message={el.message} />    );


    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

            props.dispatch({type: "ADD-POST"})

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        // props.updateNewPostText(e.currentTarget.value)
        let action = {type: "UPDATE-NEW-POST-TEXT", newText:text}
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