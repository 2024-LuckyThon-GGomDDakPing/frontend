import { useState } from "react";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import QuizProblem from "../components/quiz/QuizProblem";

let quiz = {
  memberId: 1,
  title: "김. 다. 오.",
  content: "김밥 다림쥐 오두막집의 줄임말이다.",
  quizList: [
    { content: "나는 해산물을 좋아한다.", answer: true },
    { content: "나는 정보기술대학 학생이다.", answer: true },
    { content: "일주일에 1번 만나도 괜찮다", answer: true },
    { content: "나는 전어를 좋아한다.", answer: true },
    { content: "술을 싫어한다.", answer: true },
  ],
};

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(Array(5).fill(null));

  const handleAnswerClick = (index: number, type: boolean) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = type;
    setSelectedAnswers(newSelectedAnswers);
    console.log(newSelectedAnswers);
  };

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
          {quiz.quizList.map((quizItem, index) => (
            <QuizProblem
              key={index}
              content={quizItem.content}
              handleClick={(type) => handleAnswerClick(index, type)}
              isSelected={selectedAnswers[index]}
            />
          ))}
          <button type="submit" className="w-32 h-12 text-lg bg-white/20 rounded-xl">
            제출
          </button>
        </div>
      </div>
    </div>
  );
}
