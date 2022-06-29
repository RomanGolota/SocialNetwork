import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogElements = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    const messagesElements = props.messagesData.map(item => <Message message={item.message} id={item.id}/>);
    
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
    )
}

export default Dialogs;