import React from 'react';
import "./Post.css";
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) =>{

    return <div className="post border">
    <FontAwesomeIcon className="postIcon" icon={faNewspaper} />
            <div>
                <h1>{props.title}</h1>
                <p>{props.postBody}</p>
            </div>
        </div>
           
}

export default Post;