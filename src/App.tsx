import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import "./index.css";
import CreateQuiz from "./pages/CreateQuiz";
import SignupPage from "./pages/SignupPage";
import ResultPage from "./pages/ResultPage";
import ResultPage2 from "./pages/ResultPage2";
import Chat from "./pages/Chat";
import ChatList from "./pages/ChatList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result2" element={<ResultPage2 />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatlist" element={<ChatList />} />
      </Routes>
    </BrowserRouter>
  );
}
