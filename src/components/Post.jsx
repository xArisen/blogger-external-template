import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import '../styles/Post.css';

const Post = ( {postId} ) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const postRequest = await axios.get(addPostIdToUrl(requests.fetchAllPosts, postId));
            setPost(
                postRequest.data
            );
            return postRequest.data;
        }
        fetchData();
    }, []);

    return (
        <div className = "post-custom-border-box">
            <div dangerouslySetInnerHTML={{ __html: post.title }} />
        </div>
    )
}

const addPostIdToUrl = (url, postId) => {
    let part = (url+'').split('?');
    part[0] = part[0].concat(`/${postId}?`);
    return part[0].concat(part[1]);
}

export default Post
