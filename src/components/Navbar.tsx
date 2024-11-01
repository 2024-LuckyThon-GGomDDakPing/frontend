import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar({ scrollToBottom }: { scrollToBottom: () => void }) {
  const aaaa = () => {
    console.log(document.cookie);
  };
  return (
    <div className="flex items-center justify-between w-screen h-20 px-16">
      <Link to="/">
        <img src={Logo} className="w-[100px] h-30" />
      </Link>
      <div className="flex items-center gap-10 text-xl font-semibold text-white">
        {window.location.pathname === "/" && (
          <button className="hover:scale-105" onClick={scrollToBottom}>
            시작하기
          </button>
        )}
        <button className="hover:scale-105" onClick={aaaa}>
          로그인
        </button>
        <button className="hover:scale-105">회원가입</button>
      </div>
    </div>
  );
}
