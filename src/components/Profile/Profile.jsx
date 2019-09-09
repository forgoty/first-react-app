import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
      <div className={classes.profile}>
        <div>
          <img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spacetelescope.org%2Fstatic%2Farchives%2Ffitsimages%2Fscreen%2Fjames_long_11.jpg&f=1&nofb=1'/>
        </div>
        <div>
          ava + descr
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;
