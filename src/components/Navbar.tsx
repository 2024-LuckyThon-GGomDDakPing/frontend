import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar({ scrollToBottom }: { scrollToBottom: () => void }) {
  const [isMemberId, setIsMemberId] = useState(false);

  const logout = async () => {
    try {
      const response = await axios.post("/api/members/logout");
      // console.log(response);
      if (response.status === 200) {
        setIsMemberId(false);
        alert("로그아웃 성공");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getMemberId = async () => {
      try {
        const response = await axios.get("/api/members/session-list");
        console.log(Object(response.data));

        if (response.data && Object.keys(response.data).length > 0) {
          setIsMemberId(true);
        } else {
          setIsMemberId(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getMemberId();
  }, []);

  return (
    <div className="flex items-center justify-between w-screen h-20 px-16">
      <Link to="/">
        <img src={Logo} className="w-[100px] h-30" alt="Logo" />
      </Link>
      <div className="flex items-center gap-10 text-xl font-semibold text-white">
        {window.location.pathname === "/" && (
          <button className="hover:scale-105" onClick={scrollToBottom}>
            시작하기
          </button>
        )}
        {isMemberId ? (
          <Link to="/" type="button" className="hover:scale-105" onClick={logout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/login" className="hover:scale-105">
            로그인
          </Link>
        )}

        <Link to="/signup" className="hover:scale-105">
          회원가입
        </Link>
      </div>
    </div>
  );
}
