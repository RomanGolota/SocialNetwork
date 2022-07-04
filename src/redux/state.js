let rerenderEntireTree = () => {
    console.log('State changed');
}

const state = {
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
};

window.state = state;

export const addPost = (postMessage) => {
    // console.log(`postMessage ${postMessage}`)
    state.profilePage.postData.push(
        {
            id: 5, message: state.profilePage.dialogsPage, likesCount: 0  
        }
    )
    state.profilePage.dialogsPage = '';
    // console.log(state.profilePage.postData);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.dialogsPage = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // observer
}

export default state;
