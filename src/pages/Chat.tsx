import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import instagram from "../assets/instagram.png";
import paperplane from "../assets/paperplane.png";
import { useLocation } from "react-router-dom";


export default function Chat() {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
        //   handleSendMessage();
    
          // 추가: Enter 키 입력 후 입력 필드를 비웁니다
        //   setTimeout(() => {
        //     if (textareaRef.current) {
        //       textareaRef.current.value = '';
        //     }
        //   }, 0);
        }
      };

    const location = useLocation();
    const { profileImg, instagramId, name,} = location.state;
    return (
        
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      >
      <div className="relative">
        <Navbar />
        <div className="flex flex-row justify-center items-center gap-6 my-8">
        <div className="w-[300px] h-[516px] flex flex-col items-center gap-2 justify-center bg-white/10 rounded-xl  ">
        <img src={profileImg} className="scale-100  rounded-full w-[100px] h-[100px] mt-1" />
        <span className="flex">{name}</span>
        <div className="flex flex-row justify-center">
                  <img src={instagram} />
                  <span className="flex items-center text-[12px]">@{instagramId}</span>
                </div>
        </div>
        <div className="flex flex-col w-[800px] h-[516px] items-center gap-2 justify-center bg-white/10 rounded-xl  ">
        <span className="flex h-[100px] justify-center items-center text-[white]/60 text-[13px]">채팅방에 들어왔습니다. {name} 님과의 인연을 시작하세요!</span>
        
        {/* // 말풍선 컨테이너들 // */}
        <div className="flex flex-col w-full h-[400px] border-black justify-end">
        
        
        <div className="flex flex-row w-full h-auto min-h-[104px] justify-end items-center ">
            <div className="flex flex-row justify-end max-w-[50%] h-auto justify-end items-center rounded-lg px-4 py-1 bg-white/20 mr-4">
                <span className="flex justify-start items-center">ㅎㅇ욘ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</span>
            </div>
            
        </div>
        <div className="flex flex-row w-full h-auto justify-start items-center">
            <img src={profileImg} className="scale-50  rounded-full w-[100px] h-[100px] mt-1" />
            <div className="flex flex-row justify-start max-w-[50%] h-auto justify-start items-center rounded-lg px-4 py-1 bg-white/20">
                <span className="flex justify-start items-center">안녕하세요</span>
            </div>
            
        </div>
        </div>
        <div className="flex flex-row w-[600px] h-[12%] justify-center items-center p-4 bg-[#FEFEFE]/0 border-t border-gray-100/30">
            <div className="flex relative w-[600px] items-center h-[50px] border border-gray-100/30 rounded-2xl font-[NanumSquareR]">
              <textarea
                // ref={textareaRef}
                wrap="soft"
                placeholder="대화를 시작하세요."
                className="flex h-[45px] min-w-[90%] max-w-[90%] resize-none bg-black/0 outline-none overflow-y-auto rounded-2xl p-2 ml-[10px] pr-[50px] text-[18px]"
                onKeyDown={handleKeyDown}
              />
              <button
                // ref={sendButtonRef}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center"
                // onClick={handleSendMessage}
              >
                <img src={paperplane} className="flex w-[40px] h-[40px] p-1 bg-white/0 mb-2" />
              </button>
            </div>
            
          </div>
        </div>
        </div>
        </div>
        </div>

    );


};