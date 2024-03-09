import React from 'react';
import "./administration.css";

const Administration = () => {
    return (
        <div className="administration">
            <h1>Administration</h1>
            <div className='postRequest border'>
            <input className='postTitle' type="text" />
            <textarea className='postText'></textarea>
            <button className='postButton'>Post</button>
            </div>
        </div>
    );
}

export default Administration;