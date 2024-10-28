import { useRef } from "react";
import Main from "../assets/bg.png";
import MainSection1 from "../components/main/MainSection1";
import MainSection2 from "../components/main/MainSection2";
import MainSection3 from "../components/main/MainSection3";
import Navbar from "../components/Navbar";

export default function MainPage() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      />
      <div className="relative">
        <Navbar scrollToBottom={scrollToBottom} />
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}
