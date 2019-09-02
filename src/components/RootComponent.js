import React from 'react';
import {connect} from 'react-redux';
import UserList from './UserList/UserList';
import PostList from './PostList/PostList';
import Search from './Search/Search';

class RootComponent extends React.Component {

    async componentDidMount() {
        const promisePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const promiseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        const posts = await promisePosts.json();
        const users = await promiseUsers.json();

        this.props.setUsers(users);
        this.props.setPosts(posts);
        this.props.setVisiblePosts(posts);
    }

    componentDidUpdate(nextProps) {

        if ((this.props.activeUser !== nextProps.activeUser) || (this.props.searchQuery !== nextProps.searchQuery)) {

            let filteredPost;

            if (this.props.activeUser) {
                filteredPost = this.props.posts
                    .filter(post => post.title.includes(this.props.searchQuery))
                    .filter(post => post.userId === this.props.activeUser.id);
            } else {
                filteredPost = this.props.posts.filter(post => post.title.includes(this.props.searchQuery))
            }
            this.props.setVisiblePosts(filteredPost);
        }
    }

    render() {
        return (
            <div className="App">
                <main>

                    <div className={"left-block"}>

                        <a href={"https://drew11.github.io/snov-front-end-test/"}>
                            <div className={"left-block-logo"}/>
                        </a>

                        <span className={"left-block-caption"}>
                            Subscriptions
                        </span>

                        <UserList/>

                    </div>

                    <div className={"right-block"}>

                        <Search/>

                        <PostList/>

                    </div>

                </main>
            </div>
        );
    }
}

const mapStateFromProps = (state) => ({
    activeUser: state.activeUser,
    posts: state.posts,
    searchQuery: state.searchQuery
});

const mapDispatchProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch({
            type: "SET_USERS",
            users: users
        }),
        setPosts: (posts) => dispatch({
            type: "SET_POSTS",
            posts: posts
        }),
        setVisiblePosts: (visiblePosts) => dispatch({
            type: "SET_VISIBLE_POSTS",
            visiblePosts: visiblePosts
        })
    }
};

export default connect(mapStateFromProps, mapDispatchProps)(RootComponent);