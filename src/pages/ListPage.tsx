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

// let qq: Quiz[] = [
//   {
//     postId: 1,
//     title: "월별 부정적 뉴스 수를 그래프",
//     content: "지의 기간에서 최대 300개의 뉴스 제목을 가져와",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 1,
//     sex: 0,
//   },
//   {
//     postId: 2,
//     title: "Google 감정 분석 API",
//     content: "뉴스 API를 올바르게 연결한 후에",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 2,
//     sex: 1,
//   },
//   {
//     postId: 3,
//     title: "111111111",
//     content: "22222222222",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 1,
//     sex: 0,
//   },
//   {
//     postId: 4,
//     title: "111111111",
//     content: "22222222222",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 1,
//     sex: 1,
//   },
//   {
//     postId: 5,
//     title: "111111111",
//     content: "22222222222",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 1,
//     sex: 0,
//   },
//   {
//     postId: 6,
//     title: "111111111",
//     content: "22222222222",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 1,
//     sex: 1,
//   },
//   {
//     postId: 7,
//     title: "111111111",
//     content: "22222222222",
//     nickname: "aass",
//     profileImage:
//       "https://blogthumb.pstatic.net/MjAyNDEwMzFfMjA1/MDAxNzMwMzU2ODYzNjMz.gZkji1Hc_Y8eaXd6St80zWPdpBA89ISjxZAu-bQ6q3Ag.3SOxAMvzPy-dPv8LkvIAy4OeMlq_IUWwbvUGJvRC6egg.JPEG/IMG_4926.JPG?type=s2",
//     memberId: 1,
//     sex: 0,
//   },
// ];

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
      <div className="flex flex-col items-center justify-start w-screen h-full">
        <div className="flex flex-col items-center w-[70%] min-h-[700px] h-auto rounded-3xl shadow-xl overflow-auto backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] bg-opacity-10 px-[1%] py-[1%]">
          <div className="flex flex-col w-full h-[15%] items-center justify-center text-[25px]">
            게시물 목록
          </div>
          <div className="grid grid-cols-3 justify-items-center items-center w-[95%] h-full">
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
