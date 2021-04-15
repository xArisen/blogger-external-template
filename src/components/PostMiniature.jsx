import React from 'react'
import '../styles/PostMiniature.css'

function PostMiniature({postId, postTitle, postContent}) {
    return (
        <div className="postMiniature">
            <div dangerouslySetInnerHTML={{ __html: postTitle }} />
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </div>
    )
}

export default PostMiniature
