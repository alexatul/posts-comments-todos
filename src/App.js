import "./App.css";
import CommentsList from "./CommentsList";
import PostsList from "./PostsList";
import TodosList from "./TodosList";

function App() {
  return (
    <div className="App">
      <PostsList />
      <CommentsList />
      <TodosList />
    </div>
  );
}

export default App;
