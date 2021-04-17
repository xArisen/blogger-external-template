import React from 'react'
import '../styles/PostMiniature.css'

function PostMiniature({postId, postTitle, postContent}) {

    const getPostFirstImg = (postContent) =>{
        let elem = document.createElement('div');
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.innerHTML = postContent;
        return <img src={elem.querySelector('img').src}
        className="postminiature-custom-photo"
        data-sizes="auto"/>;
    }

    const getPostFirstLineOfText = (postContent) =>{
        let elem = document.createElement('div');
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.innerHTML = postContent;
        elem = elem.querySelector('div');
        let cutDown = true;
        let firstLine = elem.innerHTML.substr(0, elem.innerHTML.indexOf('<'));
        if(!firstLine){
            firstLine = elem.innerHTML;
        }
        return firstLine+"...";
    }

    return (
        <div className="postminiature-custom-border-box">
            {getPostFirstImg(postContent)}
            <div className = "h5 postminiature-custom-title" dangerouslySetInnerHTML={{ __html: postTitle }} />
            <div className = "postminiature-custom-text">{getPostFirstLineOfText(postContent)}</div>
            <br/><br/>
            <button className="postminiature-custom-button">Czytaj dalej</button>
        </div>
    )
}

export default PostMiniature
