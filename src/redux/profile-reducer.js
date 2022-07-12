const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        state.postData.push(
            {
                id: 5, message: state.dialogsPage, likesCount: 0  
            }
        )
        state.dialogsPage = '';
        
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.dialogsPage = action.newText;
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
