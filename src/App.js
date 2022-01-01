import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import MySpace from "./components/MySpace";
import CreatePost from "./components/CreatePost";
import UserProfile from "./components/UserProfile";
import Register from "./components/Register";
import AuthState from "./context/AuthContext";

const App = () => {
  return (
    <AuthState>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='myspace' element={<MySpace />}>
            <Route index element={<UserProfile />} />
            <Route path='create-post' element={<CreatePost />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthState>
  );
};

export default App;
