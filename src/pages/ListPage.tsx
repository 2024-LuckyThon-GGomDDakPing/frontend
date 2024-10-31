import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import "aos/dist/aos.css";
import QuizName from "../components/QuizName";
import QuizModal from "../components/QuizModal";

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizList, setQuizList] = useState([]); // State for fetched quiz data
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

  // Fetch quiz data on component mount
  useEffect(() => {
    const fetchQuizList = async () => {
      try {
        const response = await axios.get("/api/posts"); // Proxy handles '/api' prefix
        setQuizList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch quiz list", error);
      }
    };
    fetchQuizList();
  }, []);

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
        <div className="flex flex-col items-center w-[70%] h-[80%] rounded-3xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] bg-opacity-10 px-[1%] py-[1%]">
          <div className="flex flex-col w-full h-[15%] items-center justify-center text-[25px]">
            게시물 목록
          </div>
          <div className="grid grid-rows-3 grid-cols-3 justify-items-center items-center w-[95%] h-full">
            {quizList.map((quiz) => (
              <QuizName
                key={quiz.postId}
                postId={quiz.postId}
                title={quiz.title}
                nickname={quiz.nickname}
                onClick={handleQuizClick}
              />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <QuizModal onClose={handleCloseModal} />}
    </div>
  );
}
