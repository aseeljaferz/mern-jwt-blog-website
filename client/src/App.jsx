import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePostPage";
import { UserContextProvider } from "./context/UserContext";
import PostPage from "./pages/PostPage";
import EditPostPage from "./pages/EditPostPage";
import DeletePostPage from "./pages/DeletePostPage";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/post/:id" element={<PostPage/>} />
          <Route path="/edit/:id" element={<EditPostPage/>} />
          <Route path="/delete/:id" element={<DeletePostPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
