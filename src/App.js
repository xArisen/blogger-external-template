import './styles/App.css';
import axios from './axios';
import Post from './components/Post'
import requests from './requests';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'

let postsNumber = 0;

function App() {
  const [allPosts, setPosts] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  useEffect(() => {
    async function fetchData() {
        const allPostsRequest = nextPageToken.length>0 ? await axios.get(requests.fetchAllPosts +`&pageToken=${nextPageToken}`) : await axios.get(requests.fetchAllPosts);
        const blogRequest = await axios.get(requests.fetchBlog);
        setPosts(
            allPostsRequest.data.items
        );
        setNextPageToken(
            allPostsRequest.data.nextPageToken
        );
        postsNumber = allPosts.length;
        return allPostsRequest.data;
    }
    fetchData();
}, []);

  return (
    <div className="App">
      {
        allPosts.length? (
          createAllPosts(allPosts)
        ) : (
          <Post postId="1662686373753401005"/>
        )
      }
    </div>
  );
}



const createAllPosts = (allPosts) =>{
    let result =
    <div>
      {allPosts.map(item => <Post postId={item.id}/>)}
    </div>;
  return (
    result
  );
} 

export default App;
