import React from 'react';
import classes from './NewPost.module.css'

const NewPost = (props) => {
  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updatePostText(text)
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

export default NewPost;
