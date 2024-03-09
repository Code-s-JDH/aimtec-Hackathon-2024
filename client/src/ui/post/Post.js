import React from 'react';
import "./Post.css";

const Post = (props) =>{

    return  <div className="post">
            <div className="post-header">
                <div className="post-header-title">
                    <h1>{props.title}</h1>
                </div>
            </div>
            <div className="post-body">
                <div className="post-body-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
           
}

export default Post;