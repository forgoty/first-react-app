import React from 'react';
import classes from './NewPost.module.css'

const NewPost = (props) => {
  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)

  }

  return (
      <div className={classes.postsBlock}>
        New Post
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
      </div>
  )
}

export default NewPost;
