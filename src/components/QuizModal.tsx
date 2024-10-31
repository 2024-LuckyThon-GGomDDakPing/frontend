import face from "../assets/face.png";
import male from "../assets/male.png";
import btn2 from "../assets/btn2.png";
import x from "../assets/x.png";

interface QuizModalProps {
  memberId: string;
  title: string;
  content: string;
  onClose: () => void;
}

export default function QuizModal({ memberId, title, content, onClose }: QuizModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="relative flex flex-col bg-[#001d40]/80  p-8 rounded-2xl shadow-lg  w-[40%] h-[50%]">
        <button className="absolute top-3 right-3 text-gray-500" onClick={onClose}>
          <img src={x} alt="close" />
        </button>
        <div className="flex flex-row justify-center w-full h-auto -ml-[3%]">
          <div
            className="flex justify-end items-end min-w-[74px] max-w-[74px] h-[74px] mx-[3%]"
            style={{ backgroundImage: `url(${face})` }}
          >
            <img src={male} alt="성별" />
          </div>
          <div className="flex items-center justify-center mx-[0%] text-[22px]">
            {memberId}님의 퀴즈
          </div>
        </div>
        <div className="flex justify-center items-center w-full min-h-[30%] text-[20px]">
          {title}
        </div>
        <div className="flex justify-center items-center w-full min-h-[30%] text-[18px]">
          {content}
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="flex min-w-[50%] items-end text-[17px] opacity-70">
            퀴즈를 4개 이상 맞추시면 보상이 있어요!
          </div>
          <div className="flex w-full justify-end items-end">
            <button className="flex items-center justify-center text-xl bg-white/25 rounded-lg hover:scale-105 w-auto h-auto p-2">
              <img src={btn2} alt="btn" className="w-[31.2px] h-[31.2px] text-[20px]" />
              퀴즈 풀기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
