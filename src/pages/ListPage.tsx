import { useState, useRef } from "react";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import "aos/dist/aos.css";
import QuizName from "../components/QuizName";
import QuizModal from "../components/QuizModal";

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuizClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      />
      <div className="relative">
        <Navbar scrollToBottom={scrollToBottom} />
      </div>
      <div className="flex flex-col items-center justify-start w-screen h-full">
        <div className="flex flex-col w-[70%] h-[80%] rounded-3xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] bg-opacity-10 px-[1%] py-[1%]">
          <div className="flex flex-col w-full h-[15%] items-center justify-center text-[25px]">
            게시물 목록
          </div>
          <div className="flex flex-row justify-center w-full h-[30%]">
            <QuizName onClick={handleQuizClick} />
            <QuizName onClick={handleQuizClick} />
            <QuizName onClick={handleQuizClick} />
          </div>
          <div className="flex flex-row justify-center w-full h-[30%]">
            <QuizName onClick={handleQuizClick} />
            <QuizName onClick={handleQuizClick} />
            <QuizName onClick={handleQuizClick} />
          </div>
          <div className="flex flex-row justify-center w-full h-[30%]">
            <QuizName onClick={handleQuizClick} />
            <QuizName onClick={handleQuizClick} />
            <QuizName onClick={handleQuizClick} />
          </div>
        </div>
      </div>
      {isModalOpen && <QuizModal onClose={handleCloseModal} />}
    </div>
  );
}
