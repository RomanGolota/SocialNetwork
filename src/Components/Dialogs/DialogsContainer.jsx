import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    const state = props.store.getState().messagesPage;
    
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return(
        <Dialogs updateNewMessageBody={onNewMessageChange} 
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;
