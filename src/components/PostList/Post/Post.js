import React, {useState} from 'react';
import {connect} from 'react-redux';
import CommentList from '../../CommentList/CommentList'

function Post({id, title, content, comments}) {

    const [editing, setEditing] = useState(false);
    const quantityComments = comments.filter(comment => comment.id === id).length;
    const style = editing ? "user-post-active" : "user-post";

    return (

        <li className={style}
        >
            <div>
                <span className={"user-post-title"}>
                        {title}
                </span>

                <span className={"user-post-content"}>
                         {content}
                </span>

                <div className={"user-post-comments-footer"}>

                    <div className={"user-post-open-comments"}
                         onClick={() => {
                             setEditing(!editing)
                         }}
                    >
                    </div>

                    <div className={"user-post-quantity-comments"}>
                        {quantityComments ? quantityComments : null}
                    </div>

                </div>

            </div>
            {
                editing ? <CommentList id={id}/> : null
            }
        </li>
    )
}


const mapStateProps = (state) => ({
    comments: state.comments
});
export default connect(mapStateProps)(Post);