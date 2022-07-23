import { connect } from "react-redux";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;