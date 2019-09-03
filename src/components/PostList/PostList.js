import React,{useState} from 'react';
import {connect} from 'react-redux';
import Post from './Post/Post'

function PostList({visiblePosts}) {

  const [activePost, setActivePost] = useState(null);


  function setStyle(post, activePost) {
    if(activePost && (post.id === activePost.id)){
      return "user-post-active"
    }
    return"user-post";
  }

    return (
        <ul className={"post-list"}>
            {
                visiblePosts.map(post =>


                    <Post
                        key={post.id}
                        post={post}
                        style={setStyle(post, activePost)}
                        setActivePost={setActivePost}
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