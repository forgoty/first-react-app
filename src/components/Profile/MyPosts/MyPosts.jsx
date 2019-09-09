import React from 'react';
import Post from './Post/Post.jsx'
import NewPost from './NewPost/NewPost.jsx'
import classes from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      My Posts
      <NewPost />
      <Post />
    </div>
  )
}

export default MyPosts;
