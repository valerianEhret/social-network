import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { Dispatch } from 'redux';
import {appStateType} from "../../../redux/redux-store";



type PropsType = {
    // posts: Array<PostType>
    // newPostText:string
    // store:StorePropsType
    // dispatch: Function
}



let mapStateToProps = (state:appStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }

    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;