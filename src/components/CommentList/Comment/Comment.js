import React from 'react';

function Comment({comment}) {
    return (
        <li className={"user-post-added-comment"}>
            {comment}
        </li>
    )
}

export default Comment;