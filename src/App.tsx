import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import ListPage from "./pages/ListPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/List" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
