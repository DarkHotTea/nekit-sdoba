import { BrowserRouter, Routes, Route } from "react-router";
import "./App.scss";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RecoverQuery from "./components/recoverQuery/RecoverQuery";
import RecoverPass from "./components/recoverPass/RecoverPass";
import RecoverSuccess from "./components/recoverSuccess/RecoverSuccess";
import Categories from "./components/categories/Categories";
import Profile from "./components/profile/Profile";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import Courses from "./components/courses/Courses";
import CoursesDetail from "./components/coursesDetail/CoursesDetail";
import Alboms from "./components/alboms/Alboms";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/recoverQuery" element={<RecoverQuery />} />
        <Route path="/recoverPass" element={<RecoverPass />} />
        <Route path="/recoverSuccess" element={<RecoverSuccess />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileSettings" element={<ProfileSettings />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/coursesDetail" element={<CoursesDetail />} />
        <Route path="/alboms" element={<Alboms />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
