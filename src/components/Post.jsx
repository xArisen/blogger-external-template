import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';

const Post = ( {postId} ) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const postRequest = await axios.get(addPostIdToUrl(requests.fetchAllPosts, postId));
            const blogRequest = await axios.get(requests.fetchBlog);
            setPost(
                postRequest.data
            );
            return postRequest.data;
        }
        fetchData();
    }, []);

    return (
        <div>
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
