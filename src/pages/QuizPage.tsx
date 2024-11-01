import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import QuizProblem from "../components/quiz/QuizProblem";
import axios from "axios";

export default function QuizPage() {
  const location = useLocation();
  const { postId, profileImg, nickname } = location.state;
  const [quiz, setQuiz] = useState<any>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchQuiz() {
      try {
        const response = await axios.get(`/api/api/posts/${postId}`);
        const quizData = response.data;
        setQuiz(quizData);
        setSelectedAnswers(Array(quizData.quizDtoList.length).fill(null));
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    }
    fetchQuiz();
  }, []);
  const handleAnswerClick = (index: number, answer: boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };
  const handleSubmit = () => {
    if (!quiz) return;
    const correctCount = quiz.quizDtoList.reduce((count: number, question: any, index: number) => {
      return count + (question.answer === selectedAnswers[index] ? 1 : 0);
    }, 0);
    if (correctCount >= 4) {
      navigate("/result", {
        state: {
          profileImg,
          instagramId: quiz.instagramId,
          name: quiz.name,
          memberId: quiz.memberId,
        },
      });
    } else {
      navigate("/result2", { state: { nickname } });
    }
  };
  if (!quiz)
    return <div className="flex items-center justify-center w-screen h-screen">Loading...</div>;
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      />
      <div className="relative">
        <Navbar />
        <div className="flex flex-col items-center gap-6 my-8">
          <div className="w-[850px] h-28 flex flex-col items-center gap-2 justify-center bg-white/20 rounded-b-xl border-t-2 border-white">
            <p className="w-[770px] text-xl">{quiz.title}</p>
            <p className="w-[770px] text-md">{quiz.content}</p>
          </div>
          {quiz.quizDtoList.map((quizItem: any, index: number) => (
            <QuizProblem
              key={index}
              content={quizItem.content}
              handleClick={(answer: boolean) => handleAnswerClick(index, answer)}
              isSelected={selectedAnswers[index]}
            />
          ))}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-32 h-12 text-lg bg-white/20 rounded-xl"
          >
            제출
          </button>
        </div>
      </div>
    </div>
  );
}
