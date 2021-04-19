import React from 'react'
import '../styles/PostMiniature.css'

function PostMiniature({postId, postTitle, postContent, postPublishDate}) {

    const getPostFirstImg = (postContent) =>{
        let elem = document.createElement('div');
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.innerHTML = postContent;
        let bigImgSrc = changeImgSrcToOriginalSize(elem.querySelector('img').src);
        return <img src={bigImgSrc}
        className="postminiature-custom-photo"
        data-sizes="auto"/>;
    }

    const changeImgSrcToOriginalSize = (imgSrc) =>{
        return imgSrc.replace("s400", "s1600");
    }
    

    const getPostFirstLineOfText = (postContent) =>{
        let elem = document.createElement('div');
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.innerHTML = postContent;
        elem = elem.querySelector('div');
        let firstLine = elem.innerHTML.substr(0, elem.innerHTML.indexOf('<'));
        if(!firstLine){
            firstLine = elem.innerHTML;
        }
        return firstLine+"...";
    }

    const refactorPostPublishDate = (postPublishDate) => {
        return postPublishDate.substr(0, postPublishDate.indexOf('T'));
    }

    return (
        <div className="postminiature-custom-border-box border-bottom">
            {getPostFirstImg(postContent)}
            <div className = "h5 postminiature-custom-title" dangerouslySetInnerHTML={{ __html: postTitle }} />
            <div className = "postminiature-custom-text">{getPostFirstLineOfText(postContent)}</div>
            <br/><br/>
            <div className = "postminiature-custom-publishdate"><p class="">📅 {refactorPostPublishDate(postPublishDate)}</p></div>
            <button className="postminiature-custom-button">Czytaj dalej</button>
        </div>
    )
}

export default PostMiniature
