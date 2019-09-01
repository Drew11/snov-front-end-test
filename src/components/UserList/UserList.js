import React from 'react';
import {connect} from 'react-redux';
import User from './User/User';

function UserList({users, posts, activeUser, setVisiblePosts, setActiveUser}) {

    const styleFirstLi = !activeUser ? 'active_user' : '';

    function resetVisiblePosts() {
        setVisiblePosts(posts);
        setActiveUser(null);
    }

    return (
        <ul className={"app-users-list"}
        >
            <li className={styleFirstLi}
                onClick={resetVisiblePosts}
            >
            <div className="user-photo ilex">
            </div>

                All Subscriptions
            </li>
            {
                users.map((user, index) =>
                    <User
                        style={activeUser === user ? 'active_user' : ''}
                        key={index}
                        user={user}
                        setActiveUser={setActiveUser}
                    />
                )
            }
        </ul>
    )

}

const mapStateFromProps = (state) => ({
    users: state.users,
    posts: state.posts,
    activeUser: state.activeUser
});

const mapDispatchProps = (dispatch) => {
    return {
        setActiveUser: (user) => dispatch({
            type: "SET_ACTIVE_USER",
            activeUser: user
        }),

        setVisiblePosts: (visiblePosts) => dispatch({
            type: "SET_VISIBLE_POSTS",
            visiblePosts: visiblePosts
        }),
    }
};

export default connect(mapStateFromProps, mapDispatchProps)(UserList);