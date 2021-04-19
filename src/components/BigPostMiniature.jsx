import React from 'react'
import '../styles/BigPostMiniature.css'

function BigPostMiniature({postId, postTitle, postContent, postPublishDate}) {

    const getPostFirstImg = (postContent) =>{
        let elem = document.createElement('div');
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.innerHTML = postContent;
        let bigImgSrc = changeImgSrcToOriginalSize(elem.querySelector('img').src);
        return <img src={bigImgSrc}
        className="bigpostminiature-custom-photo"/>;
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
        <div className="bigpostminiature-custom-border-box border-bottom">
            <p className="bigpostminiature-custom-mainpost-hint">Najnowszy post!</p>
            {getPostFirstImg(postContent)}
            <div className = "h5 bigpostminiature-custom-title" dangerouslySetInnerHTML={{ __html: postTitle }} />
            <div className = "bigpostminiature-custom-text">{getPostFirstLineOfText(postContent)}</div>
            <br/><br/>
            <div className = "bigpostminiature-custom-publishdate"><p class="">📅 {refactorPostPublishDate(postPublishDate)}</p></div>
            <button className="bigpostminiature-custom-button">Czytaj dalej</button>
        </div>
    )
}

export default BigPostMiniature
