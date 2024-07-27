import PostsList from "./features/posts/PostsList.jsx";
import AddPostForm from "./features/posts/AddPostForm.jsx";

const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;
