const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello', likesCount: 7},
        {id: 3, message: 'Map works here too!', likesCount: 2},
        {id: 4, message: 'One more post', likesCount: 5},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
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
