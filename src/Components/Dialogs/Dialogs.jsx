import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    // const dialogElements = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    // const messagesElements = props.messagesData.map(item => <Message message={item.message} id={item.id}/>);

    const state = props.store.getState().messagesPage;

    const dialogsElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />  );
    const messagesElements = state.messagesData.map( m => <Message message={m.message} /> );
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {/* {messagesElements} */}
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
        </div>
    </div>
    )
}

export default Dialogs;