import React from "react";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    
    // console.log(`MyPostsContainer`)
    // console.log(props.store.posts)
    const state = props.store.getState();

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <MyPosts updateNewPostText={onPostChange} 
                 addPost={addPost}
                 posts={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;