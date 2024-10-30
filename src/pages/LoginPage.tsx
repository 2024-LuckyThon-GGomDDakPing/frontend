import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 제출 방지
      handleLogin();
    }
  };
  // 임시로 회원가입 시 입력했다고 가정하는 더미 데이터
  const dummyUser = {
    id: "test123",
    password: "test123",
  };

  const handleLogin = () => {
    // 입력값 검증
    if (!id || !password) {
      setError("아이디 혹은 비밀번호를 입력해 주세요");
      return;
    }

    // 임시 로그인 검증 (실제로는 서버와 통신하여 검증)
    if (id === dummyUser.id && password === dummyUser.password) {
      navigate("/list");
    } else {
      setError("아이디와 비밀번호가 일치하지 않습니다");
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      />
      <div className="relative">
        <Navbar scrollToBottom={scrollToBottom} />
      </div>
      <div className="flex justify-center items-center justify-center w-screen h-full bg-opacity-10 z-50">
        <div className="relative flex flex-col items-center bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] p-8 rounded-2xl shadow-lg w-[30%] h-auto mb-16">
          <div className="flex flex-col justify-start items-start w-full mx-auto mt-0 gap-0.5">
            <div className="flex justify-center items-center w-full h-[0%]">로그인</div>
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                ID
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="text"
                  className="text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="아이디"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                    setError(""); // 입력 시 에러 메시지 초기화
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                Password
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="password"
                  className="text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(""); // 입력 시 에러 메시지 초기화
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            {error && (
              <div className="flex justify-center items-center w-full mt-2">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleLogin}
            className="flex text-xl justify-center items-center w-auto px-3 mx-auto mt-6 gap-4 rounded-lg bg-white/0 border border-blue-400 text-blue-400 cursor-pointer transition-transform duration-100 hover:scale-105"
          >
            로그인
          </button>
          <div className="flex justify-center items-center w-[90%] mx-auto mt-4 gap-4 ">
            <p className="text-sm text-gray-300">
              아직 계정이 없으신가요?{" "}
              <Link
                to="/signup"
                className="text-blue-500 cursor-pointer hover:scale-105 transition-transform duration-100 inline-block"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
