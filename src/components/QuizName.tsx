import face from "../assets/face.png";
import male from "../assets/male.png";

type QuizNameProps = {
  nickname: string;
  memberId: string;
  postId: number;
  title: string;
  onClick?: () => void;
};

export default function QuizName({ nickname, postId, title, memberId, onClick }: QuizNameProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row w-[96.5%] h-[93.5%] rounded-xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] mx-[0.5%] hover:scale-[101.5%] cursor-pointer rounded-lg"
    >
      <div className="flex flex-col justify-center items-center w-[30%] h-full">
        <div
          className="flex justify-end items-end w-[74px] h-[74px]"
          style={{ backgroundImage: `url(${face})` }}
        >
          <img src={male} alt="성별" />
        </div>
        <div className="flex justify-center items-center">{nickname}</div>
      </div>
      <div className="flex flex-row items-center justify-center w-[55%]">{title}</div>
    </div>
  );
}
