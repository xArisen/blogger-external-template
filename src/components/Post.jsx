import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';

const Post = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const postRequest = await axios.get(requests.fetchPosts);
            const blogRequest = await axios.get(requests.fetchBlog);
            console.log(blogRequest);
            console.log(postRequest);
            console.log(blogRequest.data.posts.totalItems-1);
            setContent(
                //TODO 10 per site 
                //postRequest.data.items[Math.floor(Math.random()*blogRequest.data.posts.totalItems-1)].content
                postRequest.data.items[Math.floor(Math.random()*10)].content
            );
            return postRequest;
        }
        fetchData();
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default Post
