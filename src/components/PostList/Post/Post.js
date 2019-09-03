import React, {useState} from 'react';
import {connect} from 'react-redux';
import CommentList from '../../CommentList/CommentList'

function Post({post, comments, style, activePost, setActivePost}) {


    const quantityComments = comments.filter(comment => comment.id === post.id).length;

    return (

        <li className={style}
        >
            <div>
                <span className={"user-post-title"}>
                        {post.title}
                </span>

                <span className={"user-post-content"}>
                         {post.body}
                </span>

                <div className={"user-post-comments-footer"}>

                    <div className={"user-post-open-comments"}
                         onClick={() => {
                           if(style==='user-post-active'){
                             setActivePost(null)
                           }else
                           setActivePost(post);

                         }}
                    >
                    </div>

                    <div className={"user-post-quantity-comments"}>
                        {quantityComments ? quantityComments : null}
                    </div>

                </div>

            </div>
            {
              style==='user-post-active' ? <CommentList id={post.id}/> : null
            }
        </li>
    )
}


const mapStateProps = (state) => ({
    comments: state.comments
});
export default connect(mapStateProps)(Post);