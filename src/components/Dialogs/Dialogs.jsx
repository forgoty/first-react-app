import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map(i => (
    <DialogItem id={i.id} name={i.name}/>))

  let messagesElements = props.messagesPage.messages.map(i => (
    <Message message={i.message}/>))

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
