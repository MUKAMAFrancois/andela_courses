import React, {useState} from "react";
import './comments.css';

//commenting system functional component
function CommentingSystem (){
    const [commentor, setCommentor] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentor = (e) =>{
        setCommentor(e.target.value);
    }

    const handleComment = (event) =>{
        setComment(event.target.value);

    }

    const handleSubmitComment = (event) =>{
        event.preventDefault();
        // create new comment Object
        const newComment = {commentor, comment};
        setComments([...comments, newComment]);
        setCommentor('');
        setComment('');
    }



    return (
        <div>
            <h2>Comment:Ctrld component</h2>
            <form onSubmit={handleSubmitComment}>
                <div>
                    <label htmlFor="commentor">Commentor</label>
                    <input 
                        id="commentor"
                        type="text"
                        value={commentor}
                        onChange={handleCommentor}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea 
                        id="comment"
                        value={comment}
                        onChange={handleComment}
                    />
                </div>
                <button type="submit">Add Comment</button>
            </form>
            <div>
                <h3>Comments</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index} className="single_comment">
                            <h4>{comment.commentor}</h4>
                            <p>{comment.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}


export default CommentingSystem;