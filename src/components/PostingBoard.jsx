import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import Post from './Post'
import PostMiniature from './PostMiniature'
import '../styles/PostingBoard.css';

let postsNumber = 0;
function MainContent() {

    
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
        <div className="postingboard-custom-border-box">
            {
                allPosts.length? (
                createAllPosts(allPosts)
                ) : (
                <Post postId="1662686373753401005"/>
                )
            }
        </div>
    )
}


const createAllPosts = (allPosts) =>{
    let result =
    <div className="posts-chunk-10">
      {allPosts.map((item, index) => <PostMiniature key={index+postsNumber} postId={item.id} postTitle={item.title} postContent={item.content}/>)}
    </div>;
  return (
    result
  );
} 


export default MainContent
