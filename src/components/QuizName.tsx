import male from "../assets/male.png";
import female from "../assets/female.png";

type QuizNameProps = {
  nickname: string;
  title: string;
  profileImg: string;
  sex: number;
  onClick?: () => void;
};

export default function QuizName({ profileImg, nickname, title, sex, onClick }: QuizNameProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row w-[96.5%] h-[70%] shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] mx-[0.5%] hover:scale-[101.5%] cursor-pointer rounded-lg"
    >
      <div className="flex flex-col justify-center items-center w-[30%] h-full">
        <div className="relative">
          <img
            src={profileImg}
            alt="profile"
            className="aa flex justify-end rounded-full items-end w-[74px] h-[74px]"
          />
          {sex === 0 && <img src={male} alt="성별" className="absolute -bottom-4 -right-4" />}
          {sex === 1 && <img src={female} alt="성별" className="absolute -bottom-3 -right-3" />}
        </div>

        <div className="flex items-center justify-center">[{nickname}]</div>
      </div>
      <div className="flex flex-row items-center justify-center w-[55%]">{title}</div>
    </div>
  );
}
