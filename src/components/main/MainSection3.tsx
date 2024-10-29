import btn1 from "../../assets/btn1.png";
import btn2 from "../../assets/btn2.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function MainSection3() {
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
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="w-[70%] h-[40%] rounded-3xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] bg-opacity-10">
          <div className="grid h-[300px]">
            <div className="my-auto space-y-3 text-center">
              <h1 className="p-0 text-3xl font-semibold text-white">소중한 연인을 찾아보세요</h1>
              <p className="text-white text-muted-foreground">원하는 버튼을 선택하세요</p>
            </div>
            <div className="flex items-center justify-center gap-16 text-white">
              <button className="flex items-center justify-center w-[350px] h-[120px] text-xl bg-white/10 rounded-lg hover:scale-105">
                <img src={btn1} alt="btn" className="w-8 h-8 mr-2" />
                퀴즈 생성하기
              </button>
              <button className="flex items-center justify-center w-[350px] h-[120px] text-xl bg-white/10 rounded-lg hover:scale-105">
                <img src={btn2} alt="btn" className="w-8 h-8 mr-2" />
                퀴즈 풀기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
