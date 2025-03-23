import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Dashboard from "../pages/Dashboard";
import TopicAndForum from "../pages/TopicAndForum";
import Hero from "../components/Hero";
import Reference from "../pages/Reference";
import Article from "../pages/Article";
import Forum from "../pages/Forum";
import Tutorial from "../pages/Tutorial";
import Preloader from "../components/Preloader";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Preloader />} />
      <Route path="/dashboard-main" element={<Dashboard />} />
      <Route path="/topic-and-forum" element={<TopicAndForum />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/reference" element={<Reference />} />
      <Route path="/article" element={<Article />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
export default AppRoutes;
