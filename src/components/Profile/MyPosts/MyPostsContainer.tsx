import React from 'react';
import {addPostActionCreator,
    // updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {appStateType} from "../../../redux/redux-store";

type PropsType = {}

let mapStateToProps = (state: appStateType) => {
    return {
        posts: state.profilePage.posts,
        newMessageBody: state.profilePage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newMessageBody: string) => {
            dispatch(addPostActionCreator(newMessageBody))
        },
        // updateNewPostText: (text: string) => {
        //     dispatch(updateNewPostTextActionCreator(text))
        // }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;