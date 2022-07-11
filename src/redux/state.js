const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_POST';

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hello', likesCount: 7},
                {id: 3, message: 'Map works here too!', likesCount: 2},
                {id: 4, message: 'One more post', likesCount: 5},
            ],
            dialogsPage: '',
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dimuch'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
                {id: 7, name: 'Ivan'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT-Kamasutra?'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
                {id: 6, message: 'Hi'},
            ],
        },
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
         this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            this._state.profilePage.postData.push(
                {
                    id: 5, message: this._state.profilePage.dialogsPage, likesCount: 0  
                }
            )
            this._state.profilePage.dialogsPage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_POST') {
            this._state.profilePage.dialogsPage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

window.store = store;
export default store;
