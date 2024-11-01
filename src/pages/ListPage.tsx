import { useState, useEffect } from "react";
import axios from "axios";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import QuizName from "../components/QuizName";
import QuizModal from "../components/QuizModal";
interface Quiz {
  postId: number;
  title: string;
  content: string;
  nickname: string;
  profileImg: string;
  memberId: number;
  sex: number;
}

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const handleQuizClick = (quiz: Quiz) => {
    setIsModalOpen(true);
    setSelectedQuiz(quiz);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuiz(null);
  };
  useEffect(() => {
    const fetchQuizList = async () => {
      try {
        const response = await axios.get("/api/posts");
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
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-start w-screen h-full overflow-y-hidden">
        <div className="flex flex-col items-center w-[70%] min-h-full  rounded-3xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] bg-opacity-10 px-[1%] py-[1%] overflow-y-auto">
          <div className="flex flex-col w-full h-[15%] items-center justify-center text-[25px]">
            게시물 목록
          </div>
          <div className="grid grid-cols-3 justify-items-center items-center w-[95%] min-h-[80%] max-h-[80%] overflow-y-auto">
            {quizList.map((quiz) => (
              <QuizName
                key={quiz.postId}
                title={quiz.title}
                sex={quiz.sex}
                nickname={quiz.nickname}
                profileImg={quiz.profileImg}
                onClick={() => handleQuizClick(quiz)}
              />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedQuiz && (
        <QuizModal
          onClose={handleCloseModal}
          postId={selectedQuiz.postId}
          memberId={selectedQuiz.memberId}
          sex={selectedQuiz.sex}
          title={selectedQuiz.title}
          content={selectedQuiz.content}
          profileImg={selectedQuiz.profileImg}
          nickname={selectedQuiz.nickname}
        />
      )}
    </div>
  );
}