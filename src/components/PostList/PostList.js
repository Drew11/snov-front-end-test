import React from 'react';
import {connect} from 'react-redux';
import Post from './Post/Post'

function PostList({visiblePosts}) {
    return (
        <ul className={"post-list"}>
            {
                visiblePosts.map(post =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.body}
                    />
                )
            }
        </ul>
    )
}

const mapStateProps = (state) => ({
    visiblePosts: state.visiblePosts
});
export default connect(mapStateProps)(PostList);