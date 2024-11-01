import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import instagram from "../assets/instagram.png";
import paperplane from "../assets/paperplane.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface MessageProps {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: string;
}

export default function Chat() {
  const location = useLocation();
  const { profileImg, instagramId, name, memberId } = location.state;

  const [myId, setMyId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [chat, setChat] = useState<MessageProps[]>([]);

  function mergeAndSortMessages(arr1: MessageProps[], arr2: MessageProps[]): MessageProps[] {
    const mergedArray = [...arr1, ...arr2];
    mergedArray.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    return mergedArray;
  }

  const handleSubmit = async () => {
    if (inputValue.trim() === "") return; // 공백 메시지 전송 방지

    const newMessage: MessageProps = {
      id: Date.now(), // 임시 ID로 현재 시간을 사용
      senderId: myId,
      receiverId: memberId,
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    // 새로운 메시지를 채팅에 추가
    setChat((prevChat) => [...prevChat, newMessage]);

    try {
      await axios.post("/api/chat/send", null, {
        params: { senderId: myId, receiverId: memberId, content: inputValue },
      });
      await handleSee(); // 새로운 메시지 가져오기
      setInputValue(""); // 입력 필드 비우기
    } catch (e) {
      console.error(e);
    }
  };

  const handleSee = async () => {
    try {
      const response1 = await axios.get("/api/chat/receive", {
        params: { senderId: memberId, receiverId: myId },
      });
      const response2 = await axios.get("/api/chat/receive", {
        params: { senderId: myId, receiverId: memberId },
      });
      const allChat = mergeAndSortMessages(response1.data, response2.data);
      setChat(allChat);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const getMemberId = async () => {
      try {
        const response = await axios.get("/api/members/session-list");
        const data = Number(Object.values(Object(response.data))[0]);
        setMyId(data);
      } catch (e) {
        console.log(e);
      }
    };
    getMemberId();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(handleSee, 2000);
    return () => clearInterval(intervalId);
  }, [chat]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-cover"
      style={{ backgroundImage: `url(${Main})` }}
    >
      <div className="relative">
        <Navbar />
        <div className="flex flex-row items-center justify-center gap-6 my-8">
          <div className="w-[300px] h-[516px] flex flex-col items-center gap-2 justify-center bg-white/10 rounded-xl">
            <img src={profileImg} className="scale-100 rounded-full w-[100px] h-[100px] mt-1" />
            <span className="flex">{name}</span>
            <div className="flex flex-row justify-center">
              <img src={instagram} />
              <span className="flex items-center text-[12px]">@{instagramId}</span>
            </div>
          </div>
          <div className="flex flex-col w-[800px] h-[516px] items-center gap-2 bg-white/10 rounded-xl">
            <div className="flex flex-col w-[800px] overflow-y-auto px-10">
              <span className="flex h-[10px] mt-10 justify-center items-center text-[white]/60 text-[13px]">
                채팅방에 들어왔습니다. {name} 님과의 인연을 시작하세요!
              </span>
              {chat.length === 0 ? (
                <p className="text-center text-gray-500">메시지가 없습니다.</p>
              ) : (
                chat.map((message) => (
                  <div
                    key={message.id}
                    className={`flex w-full mb-2 ${
                      message.senderId === myId ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[60%] p-2 rounded-lg shadow ${
                        message.senderId === myId
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-black"
                      }`}
                    >
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex flex-row w-[700px] h-[100px] justify-center items-center p-4 bg-[#FEFEFE]/0 border-t border-gray-100/30">
              <div className="flex relative w-[600px] items-center h-[50px] border border-gray-100/30 rounded-2xl font-[NanumSquareR]">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="메시지를 입력하세요"
                  className="flex h-[45px] min-w-[90%] max-w-[90%] resize-none bg-black/0 outline-none overflow-y-auto rounded-2xl p-2 ml-[10px] pr-[50px] text-[18px]"
                />
                <button
                  className="absolute flex items-center justify-center transform -translate-y-1/2 right-2 top-1/2"
                  onClick={handleSubmit}
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
}
