import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import "./index.css";
import CreateQuiz from "./pages/CreateQuiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
