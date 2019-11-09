import React from 'react';
import classes from './NewPost.module.css'

const NewPost = (props) => {
  const newPostElement = React.createRef()

  const addPost = () => {
    const text = newPostElement.current.value
    props.dispatch({
      type: 'ADD-POST',
      postMessage: text,
    })
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.dispatch({
      type: 'UPDATE-POST-TEXT',
      newText: text,
    })
  }
  return (
    <div className={classes.postsBlock}>
        New Post
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
      </div>
  )
}

export default NewPost
