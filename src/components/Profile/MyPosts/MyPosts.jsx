import React from 'react';
import Post from './Post/Post.jsx'
import NewPost from './NewPost/NewPost.jsx'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
  console.log(props)
  let postsElements = props.posts.map(i => (
    <Post message={i.name} id={i.id} likesCount={i.likesCount} />))

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <NewPost addPost={props.addPost} updatePostText={props.updatePostText} newPostText={props.newPostText}/>
        {postsElements}
    </div>
  )
}

export default MyPosts;
