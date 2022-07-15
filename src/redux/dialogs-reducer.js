const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
        
    } else if (action.type === SEND_MESSAGE) {
        const body = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 6, message: body})
        
    }
    return state
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;
