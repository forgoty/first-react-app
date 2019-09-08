import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div className={classes.profile}>
        <div>
          <img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spacetelescope.org%2Fstatic%2Farchives%2Ffitsimages%2Fscreen%2Fjames_long_11.jpg&f=1&nofb=1'/>
        </div>
        <div>
          ava + descr
        </div>
        <div>
          New post
        </div>
          <div className='posts'>
            my posts
            <div className={classes.item}>
              post1
            </div>
            <div className={classes.item}>
              post2
            </div>
          </div>
        Main Content
      </div>
    )
}

export default Profile;
