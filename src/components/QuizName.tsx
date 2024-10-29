import face from "../assets/face.png";
import male from "../assets/male.png";

type QuizNameProps = {
  onClick?: () => void; // onClick prop 추가
};
export default function QuizName({ onClick }: QuizNameProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row w-[30%] h-[93.5%] rounded-xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] mx-[0.5%] hover:scale-[101.5%] cursor-pointer  rounded-lg"
    >
      <div className="flex flex-col justify-center items-center w-[30%] h-[full]">
        <div
          className="flex justify-end items-end w-[74px] h-[74px]"
          style={{ backgroundImage: `url(${face})` }}
        >
          <img src={male} alt="성별" />
        </div>
        <div className="flex justify-center items-center ">[박명수]</div>
      </div>
      <div className="flex flex-row items-center justify-center w-[55%]">맞추면 500원</div>
    </div>
  );
}
