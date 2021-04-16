import React from 'react'
import '../styles/PostMiniature.css'

function PostMiniature({postId, postTitle, postContent}) {
    return (
        <div className="postminiature-custom-border-box">
            <div dangerouslySetInnerHTML={{ __html: postTitle }} />
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </div>
    )
}

export default PostMiniature
