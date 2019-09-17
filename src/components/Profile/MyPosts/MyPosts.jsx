import React from 'react';
import Post from './Post/Post.jsx'
import NewPost from './NewPost/NewPost.jsx'
import classes from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <NewPost />
      <Post message='Hi, how are you?'/>
      <Post message="It's my first post"/>
      <Post message="idiiiiiiiiiii"/>
      <Post message="Ahaha"/>
    </div>
  )
}

export default MyPosts;
