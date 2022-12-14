import "./PostsList.css";
import { useEffect, useState } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);

  const [isPostsDisplayed, setPostsDisplayed] = useState(false);

  const togglePosts = () => {
    setPostsDisplayed(!isPostsDisplayed);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className="post-list">
      <div className="post-list-button">
        <button onClick={togglePosts}>Postari</button>
      </div>
      {isPostsDisplayed ? (
        <ul className="posts">
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PostsList;
