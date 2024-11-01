import male from "../assets/male.png";
import female from "../assets/female.png";
import btn2 from "../assets/btn2.png";
import x from "../assets/x.png";

interface QuizModalProps {
  memberId: number;
  nickname: string;
  title: string;
  profileImg: string;
  content: string;
  sex: number;
  onClose: () => void;
}

export default function QuizModal({
  nickname,
  title,
  content,
  profileImg,
  sex,
  onClose,
}: QuizModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative flex flex-col bg-[#001d40]/80  p-8 rounded-2xl shadow-lg w-[28%] h-[26%]">
        <button className="absolute text-gray-500 top-3 right-3" onClick={onClose}>
          <img src={x} alt="close" />
        </button>
        <div className="flex">
          <div className="relative flex w-24 h-20 flex-col -ml-[3%]">
            <div className="relative">
              <img
                src={profileImg}
                alt="profile"
                className="rounded-full items-end w-[74px] h-[74px] mx-[3%]"
              />
              {sex === 0 && <img src={male} alt="성별" className="absolute right-0 -bottom-3" />}
              {sex === 1 && <img src={female} alt="성별" className="absolute right-0 -bottom-3" />}
            </div>
            <p className="justify-center items-center text-[18px] ml-3">[{nickname}]</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-8">
            <div className="flex justify-center items-center w-full min-h-[30%] text-[20px]">
              {title}
            </div>
            <p className="flex text-center text-[18px]">{content}</p>
          </div>
        </div>

        <div className="flex flex-row w-full h-full">
          <div className="flex items-end text-sm opacity-70">
            퀴즈를 4개 이상 맞추시면 보상이 있어요!
          </div>
          <div className="flex items-end justify-end w-full">
            <button className="flex items-center justify-center w-auto h-auto p-2 text-lg rounded-lg bg-white/25 hover:scale-105">
              <img src={btn2} alt="btn" className="w-6 h-6 pr-1" />
              퀴즈 풀기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
