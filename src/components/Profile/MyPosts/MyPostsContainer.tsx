import React from 'react';
import {PostType, StorePropsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {
    // posts: Array<PostType>
    // newPostText:string
    // store:StorePropsType
    // dispatch: Function
}

const MyPostsContainer = (props: PropsType) => {

    // let state = props.store.getState()

    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    //
    // const onPostChange = (text: string) => {
    //     let action = updateNewPostTextActionCreator(text)
    //     props.store.dispatch(action)
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                  store.dispatch(action)
                }

                return  <MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                />
            }




                // <MyPosts
                //     posts={state.profilePage.posts}
                //     newPostText={state.profilePage.newPostText}
                //     addPost={addPost}
                //     updateNewPostText={onPostChange}
                // />


        }

        </StoreContext.Consumer>

    )
}
export default MyPostsContainer;