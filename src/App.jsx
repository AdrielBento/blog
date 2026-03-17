import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/biblioteca" element={<LibraryPage />} />
      <Route path="/posts/:slug" element={<PostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
