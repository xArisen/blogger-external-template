import './styles/App.css';
import axios from './axios';
import Post from './components/Post'
import PostMiniature from './components/PostMiniature'
import requests from './requests';
import React, { useEffect, useState } from 'react';

let postsNumber = 0;

function App() {
  const [allPosts, setPosts] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const [reload, setReload] = useState(false);
  const reRender = () => setReload(!reload);

  
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(nextPageToken){
        reRender();
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
        const allPostsRequest = nextPageToken.length>0 ? await axios.get(requests.fetchAllPosts +`&pageToken=${nextPageToken}`) : await axios.get(requests.fetchAllPosts);
        setPosts(
          [...allPosts, ...allPostsRequest.data.items]
        );
        setNextPageToken(
            allPostsRequest.data.nextPageToken
        );
        postsNumber += allPosts.length;
        return allPostsRequest.data;
    }
    fetchData();
}, [reload]);

  return (
    <div className="App">

      <div>
      {
        allPosts.length? (
          createAllPosts(allPosts)
        ) : (
          <Post postId="1662686373753401005"/>
        )
      }
      </div>
    </div>
  );
}

const createAllPosts = (allPosts) =>{
    let result =
    <div>
      {allPosts.map((item, index) => <PostMiniature key={index+postsNumber} postId={item.id} postTitle={item.title} postContent={item.content}/>)}
    </div>;
  return (
    result
  );
} 

export default App;
