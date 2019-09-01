import React from 'react';

function User({user, style, setActiveUser}) {

    return (
        <li className={style}
            onClick={() => setActiveUser(user)}
        >
        <div className="user-photo">
        </div>
       <span>
              {user.name}
       </span>
        </li>
    )
}

export default User;