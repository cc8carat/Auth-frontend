import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import MySpace from "./components/MySpace";
import CreatePost from "./components/CreatePost";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="myspace" element={<MySpace />}>
          <Route index element={<UserProfile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
