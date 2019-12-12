import React from 'react';

const Comment = (props) => {
    const { title, statement, date, language } = props;
    return (
        <div>
            <div className="comment-top">
                <p>{title}</p>
            </div>
            <div className="comment-body">
                <p>{statement}</p>
            </div>
        </div>
    );
}
 
export default Comment;