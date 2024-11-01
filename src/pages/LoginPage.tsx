import axios from "axios";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [loginId, setIoginId] = useState("");
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

  const handleLogin = async () => {
    if (!loginId || !password) {
      setError("아이디 혹은 비밀번호를 입력해 주세요");
      return;
    }
    try {
      const response = await axios.post(
        "/api/members/login",
        {
          loginId,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        try {
          const response = await axios.get("/api/members/session-list");
        } catch (e) {
          console.log(e);
        }
        alert("로그인 성공");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      alert("로그인 실패")
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
      <div className="z-50 flex items-center justify-center w-screen h-full bg-opacity-10">
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
                  className="text-base text-left outline-none text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="아이디"
                  value={loginId}
                  onChange={(e) => {
                    setIoginId(e.target.value);
                    setError("");
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
                  className="text-base text-left outline-none text-[#FFFFFF] w-full h-[30px] bg-white/0"
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
              <div className="flex items-center justify-center w-full mt-2">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleLogin}
            className="flex items-center justify-center w-auto gap-4 px-3 mx-auto mt-6 text-xl text-blue-400 transition-transform duration-100 border border-blue-400 rounded-lg cursor-pointer bg-white/0"
          >
            로그인
          </button>
          <div className="flex justify-center items-center w-[90%] mx-auto mt-4 gap-4 ">
            <p className="text-sm text-gray-300">
              아직 계정이 없으신가요?{" "}
              <Link
                to="/signup"
                className="inline-block text-blue-500 transition-transform duration-100 cursor-pointer hover:scale-105"
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
