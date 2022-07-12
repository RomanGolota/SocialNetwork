import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hello', likesCount: 7},
                {id: 3, message: 'Map works here too!', likesCount: 2},
                {id: 4, message: 'One more post', likesCount: 5},
            ],
            newPostText: '',
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
            newMessageBody: ""
        },
        sideBar : {}
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
         this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
