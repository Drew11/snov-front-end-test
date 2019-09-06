import React, {useState} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment/Comment'

function CommentList({id, comments, addComment}) {

    const [str, addString] = useState('');
    const currentPostComments = comments.filter(comment => comment.id === id);
    let textInput;

    function checkComment(event, string) {

      event.preventDefault();

      if (string === '') {
        return;
      }
      const comment = {
        id: id,
        text: str
      };

      addComment(comment);
      addString('');
      textInput.value='';
    }

    return (
        <React.Fragment>

            <div className={"user-post-comment-caption"}>Comments</div>

            <ul className="user-post-comments">
                {
                    currentPostComments.map((comment, index) =>
                        <Comment
                            key={index}
                            comment={comment}
                        />
                    )
                }
            </ul>


            <form className={"user-post-set-comment"}>
                <input
                    ref={(input) => textInput = input}
                    placeholder={"Type your message"}
                    onChange={(event)=> {

                        addString(event.target.value);
                        event.preventDefault();
                    }}

                />
                <button
                    onClick={(event) => checkComment(event, str)}
                >
                    Add
                </button>
            </form>

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