import React,{useState} from 'react';
import {connect} from 'react-redux';

function Comment({comment, comments, setEditingComment, removeComment}) {

   const [edit, setEdit]= useState(false);
   const [string, setString] = useState('');
   const index = comments.indexOf(comment);
   const currentComment = comments[index];


   function setComment (str) {
     if(str===''){
       setEdit(!edit);
       return;
     }
     setEditingComment(str, index);
     setString('');
     setEdit(!edit);
   }

   function cancelComment () {
    setString('');
    setEdit(!edit);
   }

    return (
        <li className={"user-post-added-comment"}>
            {comment.text}

          <div
            className={"remove-comment"}
            onClick={()=>removeComment(index)}
          >
          </div>


          <div className={"post-comment-edit"}
          >

            {edit?
              <div className={"editing-comment"}>

                <input
                  className={"editing-comment-input"}
                  type={"text"}
                  defaultValue={currentComment.text}
                  onChange={(event)=>{setString(event.target.value)}}
                />

                <div>

                  <button
                    onClick={()=>setComment(string, index)}
                  >Save
                  </button>

                  <button
                    onClick={cancelComment}
                  >
                    Cancel
                  </button>

                </div>

              </div>
              :
              <span
                className={"comment-edit"}
                onClick={()=>setEdit(!edit)}
              >
                Edit
              </span>

            }
          </div>
        </li>
    )
}

const mapStateProps = (state)=>({
  comments: state.comments
});


const mapDispatchPprops = (dispatch)=>{
  return {
    setEditingComment:(editComment, indexComment)=>dispatch({
      type: "SET_EDIT_COMMENT",
      editingComment: editComment,
      indexComment: indexComment,
    }),

    removeComment:(indexComment)=> dispatch({
      type: "REMOVE_COMMENT",
      indexComment: indexComment
    })
  }
};
export default connect(mapStateProps, mapDispatchPprops)(Comment);