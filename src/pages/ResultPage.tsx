import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import congrats from "../assets/congrats.png";
import congrats2 from "../assets/congrats2.png";
import instagram from "../assets/instagram.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
export default function ResultPage() {
  const location = useLocation();
  const { profileImg, instagramId, name } = location.state;
  const shakeAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      x: [0, -10, 10, -10, 10, 0], // 흔들리는 효과를 위한 keyframes
      transition: { delay: 1.0, duration: 0.5 },
    },
  };
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
        <div className="flex flex-row items-center justify-center w-[40%] h-auto max-h-[90%]  p-7 rounded-2xl   mb-10">
          <div className="relative flex flex-col items-center bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] p-8 rounded-2xl shadow-lg w-full h-full mx-1 ml-3">
            <motion.div
              className="flex flex-row justify-center items-center w-full mx-auto mt-0 gap-0.5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              <motion.img
                className="scale-150"
                initial="initial"
                animate="animate"
                variants={shakeAnimation}
                src={congrats}
              />

              <motion.span
                className="flex w-full justify-center mx-5 text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                축하해요!
              </motion.span>
              <motion.img
                className="scale-150"
                initial="initial"
                animate="animate"
                variants={shakeAnimation}
                src={congrats2}
              />
            </motion.div>
            <motion.div
              className="flex items-center justify-center w-full h-[23%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.0 }}
            >
              <span className="flex text-14px">4문제 이상 맞췄어요!</span>
            </motion.div>
            <div className="flex flex-col justify-center items-center w-full h-auto mx-auto gap-0.5 mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0, duration: 1.0 }}
              >
                <img src={profileImg} className="scale-100  rounded-full w-[100px] h-[100px] mt-1" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0, duration: 1.0 }}
              >
                <span className="flex">{name}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.0, duration: 0.5 }}
              >
                <div className="flex flex-row justify-center">
                  <img src={instagram} />
                  <span className="flex items-center text-[12px]">@{instagramId}</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1.0 }}
              >
                <span className="flex h-[30px] items-center text-xl mt-5">
                  당신에게 어울리는, 새로운 인연을 이어나가 보세요!
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6, duration: 1.0 }}
              >
                <p className="text-sm text-gray-300 mt-5 -mb-5">
                  다른 퀴즈도 풀어보고싶다면?{" "}
                  <Link
                    to="/list"
                    className="text-blue-500 cursor-pointer hover:scale-105 transition-transform duration-100 inline-block"
                  >
                    돌아가기
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
