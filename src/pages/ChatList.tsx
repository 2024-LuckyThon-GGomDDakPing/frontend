import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import face from "../assets/face.png";
export default function ChatList() {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
          <div
            className="fixed top-0 left-0 w-full h-screen bg-cover"
            style={{ backgroundImage: `url(${Main})` }}
          />
          <div className="relative">
            <Navbar />
          </div>
          <div className="flex flex items-center justify-center w-screen h-full">
            <div className="flex flex-row items-center justify-center w-[500px]  max-h-[90%]  p-7 rounded-2xl   mb-10">
            <div className="relative flex flex-col w-full h-[450px] items-center bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] p-8 rounded-2xl shadow-lg overflow-y-auto ">
                <span className="flex jusify-center items-center">채팅방</span>
                <div className="flex flex-row items-center w-full min-h-[100px] border-b border-white/30">
                <img src={face} className="flex scale-[80%]"/>
                <div className="flex flex-col items-start justify-center w-full h-full p-1">
                    <span className="flex items-center text-white/90 ml-1">이름</span>
                    <span className="flex items-center text-white/60 ml-1">안녕</span>
                </div>
                </div>

                <div className="flex flex-row items-center w-full min-h-[100px] border-b border-white/30">
                <img src={face} className="flex scale-[80%]"/>
                <div className="flex flex-col items-start justify-center w-full h-full p-1">
                    <span className="flex items-center text-white/90 ml-1">이름</span>
                    <span className="flex items-center text-white/60 ml-1">안녕</span>
                </div>
                </div>
                
                <div className="flex flex-row items-center w-full min-h-[100px] border-b border-white/30">
                <img src={face} className="flex scale-[80%]"/>
                <div className="flex flex-col items-start justify-center w-full h-full p-1">
                    <span className="flex items-center text-white/90 ml-1">이름</span>
                    <span className="flex items-center text-white/60 ml-1">안녕</span>
                </div>
                </div>
                
                <div className="flex flex-row items-center w-full min-h-[100px] border-b border-white/30">
                <img src={face} className="flex scale-[80%]"/>
                <div className="flex flex-col items-start justify-center w-full h-full p-1">
                    <span className="flex items-center text-white/90 ml-1">이름</span>
                    <span className="flex items-center text-white/60 ml-1">안녕</span>
                </div>
                </div>
                
                <div className="flex flex-row items-center w-full min-h-[100px] border-b border-white/30">
                <img src={face} className="flex scale-[80%]"/>
                <div className="flex flex-col items-start justify-center w-full h-full p-1">
                    <span className="flex items-center text-white/90 ml-1">이름</span>
                    <span className="flex items-center text-white/60 ml-1">안녕</span>
                </div>
                </div>
                
                <div className="flex flex-row items-center w-full min-h-[100px] border-b border-white/30">
                <img src={face} className="flex scale-[80%]"/>
                <div className="flex flex-col items-start justify-center w-full h-full p-1">
                    <span className="flex items-center text-white/90 ml-1">이름</span>
                    <span className="flex items-center text-white/60 ml-1">안녕</span>
                </div>
                </div>
            </div>
                
                </div>
                </div>
                </div>
);
}