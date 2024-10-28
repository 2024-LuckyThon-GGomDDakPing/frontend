import Logo from "../assets/logo.png";

export default function Navbar({ scrollToBottom }: { scrollToBottom: () => void }) {
  return (
    <div className="flex items-center justify-between w-screen h-20 px-16">
      <img src={Logo} className="w-[100px] h-30" />
      <div className="flex items-center gap-10 text-xl font-semibold text-white">
        <button className="hover:scale-105" onClick={scrollToBottom}>
          시작하기
        </button>
        <button className="hover:scale-105">로그인</button>
        <button className="hover:scale-105">회원가입</button>
      </div>
    </div>
  );
}
