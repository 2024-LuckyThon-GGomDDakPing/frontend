import axios from "axios";
import React, { useEffect, useState } from "react";

interface MessageProps {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: string;
}

let myId = 5; // 현재 로그인한 사용자 ID
let memberId = 4; // 채팅 상대방 ID

const ChatApp: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [chat, setChat] = useState<MessageProps[]>([]);

  function mergeAndSortMessages(arr1: MessageProps[], arr2: MessageProps[]): MessageProps[] {
    const mergedArray = [...arr1, ...arr2];
    mergedArray.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    return mergedArray;
  }

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

  const handleSubmit = async () => {
    try {
      await axios.post("/api/chat/send", null, {
        params: { senderId: myId, receiverId: memberId, content: inputValue },
      });
      await handleSee();
      setInputValue("");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleSee, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg gap-4 p-4 mx-auto bg-gray-100">
      <div className="flex flex-col w-full max-h-[400px] overflow-y-auto bg-white p-4 rounded shadow-lg">
        {chat.map((message) => (
          <div
            key={message.id}
            className={`flex w-full mb-2 ${
              message.senderId === myId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-2 rounded-lg shadow ${
                message.senderId === myId ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              <p>{message.content}</p>
              <small className="text-xs">{new Date(message.timestamp).toLocaleString()}</small>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="메시지를 입력하세요"
        className="w-full h-10 p-2 border rounded"
      />
      <button
        onClick={handleSubmit}
        className="w-full h-12 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        보내기
      </button>
    </div>
  );
};

export default ChatApp;
