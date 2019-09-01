import React, {useState} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment/Comment'


function CommentList({id, comments, addComment}) {

    const [str, addString] = useState('');
    const comment = {
        id: id,
        text: str
    };

    const currentPostComments = comments.filter(comment => comment.id === id);

    function checkComment(comm) {
        if (comm.text === '') {
            return;
        }
        addComment(comm);
    }

    return (
        <React.Fragment>

            <div className={"user-post-comment-caption"}>Comments</div>

            <ul className="user-post-comments">
                {
                    currentPostComments.map((comment, index) =>
                        <Comment
                            key={index}
                            comment={comment.text}
                        />
                    )
                }
            </ul>


            <div className={"user-post-set-comment"}>
                <input
                    onChange={(event) => addString(event.target.value)}
                />
                <button
                    onClick={() => checkComment(comment)}
                >
                    Add
                </button>
            </div>

        </React.Fragment>
    )
}

const mapStateProps = (state) => ({
    comments: state.comments
});
const mapDispatchProps = (dispatch) => {
    return {
        addComment: (comment) => dispatch({
            type: "ADD_COMMENT",
            comment: comment
        })
    }
};
export default connect(mapStateProps, mapDispatchProps)(CommentList);