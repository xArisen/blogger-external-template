import './styles/App.css';
import axios from './axios';
import Post from './components/Post'
import requests from './requests';
import React, { useEffect, useState } from 'react';

function App() {
  const [allPosts, setPosts] = useState([]);

  let postsNumber = 0;
  useEffect(() => {
    async function fetchData() {
        const allPostsRequest = await axios.get(requests.fetchAllPosts);
        const blogRequest = await axios.get(requests.fetchBlog);
        postsNumber = blogRequest.data.posts.totalItems-1;
        console.log(allPostsRequest.data);
        setPosts(
            allPostsRequest.data
        );
        return allPostsRequest.data;
    }
    fetchData();
}, []);

const createAllPosts = (allPosts) =>{
  return (
    <div>
      {allPosts.items.map(item => <Post postId={item.id}/>)}
    </div>
  );
} 


  return (
    <div className="App">
      {createAllPosts(allPosts)}
      <Post postId="1662686373753401005"/>
    </div>
  );
}


export default App;
