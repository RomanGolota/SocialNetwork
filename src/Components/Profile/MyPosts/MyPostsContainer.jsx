import { connect } from "react-redux";
import { updateNewPostText} from "../../../redux/profile-reducer";
import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);