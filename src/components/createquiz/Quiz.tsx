import Q from "../../assets/q.png";
import deletebtn from "../../assets/deletebtn.png";

interface QuizProps {
  handleClick: (type: boolean) => void;
  isSelected: boolean | null;
  inputValue: string; // 현재 입력 값을 받기 위한 prop 추가
  clearInput: () => void; // 입력 값을 지우는 함수 추가
  onInputChange: (value: string) => void; // 입력 값 변경 핸들러 추가
}

export default function Quiz({
  handleClick,
  isSelected,
  inputValue,
  clearInput,
  onInputChange,
}: QuizProps) {
  return (
    <div className="w-[850px] h-[200px] gap-2 flex flex-col items-center justify-center bg-white/20 rounded-xl">
      <div className="relative flex">
        <img src={Q} alt="q" className="w-5 h-5" />
        <span className="ml-1 mr-2 text-2xl">.</span>
        <input
          type="text"
          placeholder="문제 제목을 입력해주세요."
          value={inputValue} // 입력 값 상태 추가
          onChange={(e) => onInputChange(e.target.value)} // onChange 핸들러 추가
          className="w-[730px] h-6 bg-transparent pr-5 outline-none border-b-[1px] border-white pb-2"
        />
        <img
          src={deletebtn}
          alt="deletebtn"
          className="absolute right-0 w-3 h-3 cursor-pointer top-1"
          onClick={clearInput} // 버튼 클릭 시 clearInput 호출
        />
      </div>
      <button
        onClick={() => handleClick(true)}
        className={`w-[780px] h-12 flex justify-start items-center  rounded-xl px-4 ${
          isSelected === true ? "bg-white/50 border border-white" : "bg-white/20"
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full border border-white ${
            isSelected === true ? "bg-white" : "bg-white/0"
          }`}
        />
        <p className="ml-3 text-lg">맞다</p>
      </button>
      <button
        onClick={() => handleClick(false)}
        className={`w-[780px] h-12 flex justify-start items-center rounded-xl px-4 ${
          isSelected === false ? "bg-white/50 border border-white" : "bg-white/20"
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full border border-white ${
            isSelected === false ? "bg-white" : "bg-white/0"
          }`}
        />
        <p className="ml-3 text-lg">틀리다</p>
      </button>
    </div>
  );
}
