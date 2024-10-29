import { useEffect } from "react";
import lq from "../../assets/leftquotes.png";
import rq from "../../assets/rightquotes.png";
import "aos/dist/aos.css";
import AOS from "aos";

export default function MainSection1() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full text-white"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div
        className="flex items-center justify-center gap-16"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <div className="flex flex-col items-center font-semibold justify-start gap-8 text-5xl text-white w-[600px]">
          <p className="relative ml-40">
            <img src={lq} alt="img" className="absolute w-2 h-3 -left-6 -top-4" />
            나만의 퀴즈를 통한
          </p>
          <p>새로운 소개팅 서비스,</p>
          <p className="relative ml-72">
            QNLOVE
            <img src={rq} alt="img" className="absolute w-2 h-3 -bottom-6 -right-4" />
          </p>
        </div>
        <div className="text-2xl text-white mt-40 w-[500px]">
          <p className="mt-36">나만의 퀴즈를 통해 상대방을 알아가는</p>
          <p>소개팅 서비스입니다. 호감이 가는 사람에</p>
          <p>대해 의미 있는 퀴즈를 나누며 서로의 궁합을</p>
          <p>자연스럽게 알아가보세요.</p>
        </div>
      </div>
      <div
        className="flex flex-col self-center space-x-4 animate-bounce"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-easing="linear"
      >
        <img
          src="https://i.ibb.co/cN37MBb/chevron-down.png"
          alt="Scroll down"
          className="self-center size-6 lg:size-8 xl:size-10 2xl:size-10"
        />
      </div>
    </div>
  );
}
