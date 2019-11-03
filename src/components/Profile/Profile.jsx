import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
  return (
    <div>
        <ProfileInfo />
        <MyPosts addPost={props.addPost} updatePostText={props.updatePostText} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}/>
      </div>
  )
}

export default Profile;
