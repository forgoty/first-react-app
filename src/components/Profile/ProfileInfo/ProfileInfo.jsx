import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.item}>
        <img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spacetelescope.org%2Fstatic%2Farchives%2Ffitsimages%2Fscreen%2Fjames_long_11.jpg&f=1&nofb=1'/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo;
