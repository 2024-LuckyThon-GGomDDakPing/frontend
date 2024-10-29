import Q from "../../assets/q.png";

interface QuizProblemProps {
  handleClick: (type: boolean) => void;
  isSelected: boolean | null;
  content: string;
}

export default function QuizProblem({ handleClick, isSelected, content }: QuizProblemProps) {
  return (
    <div className="w-[850px] h-[200px] gap-2 flex flex-col items-center justify-center bg-white/20 rounded-xl">
      <div className="flex">
        <img src={Q} alt="q" className="w-5 h-5" />
        <span className="ml-1 mr-2 text-2xl">.</span>
        <p className="w-[730px]">{content}</p>
      </div>
      <button
        onClick={() => handleClick(true)}
        className={`w-[780px] h-12 flex justify-start items-center rounded-xl px-4 ${
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
