import React from 'react';
import classes from './NewPost.module.css'

const NewPost = () => {
  return (
      <div className={classes.postsBlock}>
        New Post
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add Post</button>
          </div>
        </div>
      </div>
  )
}

export default NewPost;
