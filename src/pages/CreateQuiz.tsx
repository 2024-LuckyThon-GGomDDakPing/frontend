import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import Quiz from "../components/createquiz/Quiz";
import InputField from "../components/createquiz/InputField";
import { useEffect, useState } from "react";

export default function CreateQuiz() {
  const [inputs, setInputs] = useState({
    title: "",
    subtitle: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const clearInput = (inputName: string) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: "",
    }));
  };

  // 각 문제에 대한 선택 상태를 관리하는 배열
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(Array(5).fill(null));

  // 선택된 답변을 업데이트하는 함수
  const handleAnswerClick = (index: number, type: boolean) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = type; // 선택된 답변만 업데이트
    setSelectedAnswers(newSelectedAnswers);
    console.log(newSelectedAnswers);
  };

  // 각 문제의 입력 값을 관리하기 위한 상태
  const [quizInputs, setQuizInputs] = useState(Array(5).fill(""));

  // 특정 문제의 입력 값을 업데이트하는 함수
  const handleQuizInputChange = (index: number, value: string) => {
    const newQuizInputs = [...quizInputs];
    newQuizInputs[index] = value;
    setQuizInputs(newQuizInputs);
  };

  // 특정 문제의 입력 값을 지우는 함수
  const clearQuizInput = (index: number) => {
    handleQuizInputChange(index, "");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      />
      <div className="relative">
        <Navbar />
        <div className="flex flex-col items-center gap-6 my-8">
          <div className="w-[850px] h-28 flex flex-col items-center gap-2 justify-center bg-white/20 rounded-b-xl border-t-2 border-white">
            <InputField
              name="title"
              value={inputs.title}
              placeholder="제목을 입력해주세요."
              onChange={handleInputChange}
              onClear={() => clearInput("title")}
              isTitle={true}
            />
            <InputField
              name="subtitle"
              value={inputs.subtitle}
              placeholder="소개글을 입력해주세요."
              onChange={handleInputChange}
              onClear={() => clearInput("subtitle")}
              isTitle={false}
            />
          </div>
          {Array.from({ length: 5 }, (_, index) => (
            <Quiz
              key={index}
              handleClick={(type) => handleAnswerClick(index, type)}
              isSelected={selectedAnswers[index]}
              clearInput={() => clearQuizInput(index)} // 입력값 지우기 함수 전달
              inputValue={quizInputs[index]} // 현재 입력값 전달
              onInputChange={(value) => handleQuizInputChange(index, value)} // 입력 값 변경 핸들러 전달
            />
          ))}
          <button type="submit" className="w-32 h-12 text-lg bg-white/20 rounded-xl">
            등록
          </button>
        </div>
      </div>
    </div>
  );
}
