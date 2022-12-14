import "./CommentsList.css";
import { useEffect, useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([]);

  const [isCommentsDisplayed, setCommentsDisplayed] = useState(false);

  const toggleComments = () => {
    setCommentsDisplayed(!isCommentsDisplayed);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
      });
  }, []);

  return (
    <div className="comment-list">
      <div className="comment-list-button">
        <button onClick={toggleComments}>Commentari</button>
      </div>
      {isCommentsDisplayed ? (
        <ul className="comments">
          {comments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CommentsList;
