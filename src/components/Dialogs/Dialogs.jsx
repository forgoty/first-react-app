import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem id="1" name="Nikita"/>
        <DialogItem id="2" name="Viktor"/>
        <DialogItem id="3" name="Sveta"/>
        <DialogItem id="4" name="Sasha"/>
        <DialogItem id="5" name="Pasha"/>
      </div>
      <div className={classes.messages}>
        <Message message="Ahahaha"/>
        <Message message="Privet"/>
        <Message message="Poka"/>
        <Message message="Post"/>
      </div>
    </div>
  )
}

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}> {props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message}
    </div>
  )

}

export default Dialogs;
