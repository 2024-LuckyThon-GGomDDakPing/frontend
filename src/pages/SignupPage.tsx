import axios from "axios";
import Main from "../assets/bg.png";
import Navbar from "../components/Navbar";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [sex, setSex] = useState(""); // 0 : 남자, 1 : 여자
  const [profileImage, setProfileImage] = useState("");
  // const [profileImage, setProfileImage] = useState<File | null>(null);
  const [nickname, setNickname] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const onLoadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setProfileImage(file);
  };
  const [errors, setErrors] = useState({
    loginId: "",
    password: "",
    confirmPassword: "",
    name: "",
    age: "",
    instagramId: "",
    sex: "",
    profileImage: "",
    nickname: "",
  });

  const validate = () => {
    const idRegex = /^[a-zA-Z0-9]+$/;
    const nameRegex = /^[가-힣]+$/;
    const newErrors = {
      loginId: "",
      password: "",
      confirmPassword: "",
      name: "",
      age: "",
      instagramId: "",
      sex: "",
      profileImage: "",
      nickname: "",
    };

    if (!idRegex.test(loginId)) {
      newErrors.loginId = "아이디는 영어와 숫자로만 입력해야 합니다.";
    }

    if (!nameRegex.test(name)) {
      newErrors.name = "이름은 한글로만 입력해야 합니다.";
    }

    if (password.length < 4) {
      newErrors.password = "비밀번호는 4글자 이상이어야 합니다.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!age) {
      newErrors.age = "나이를 입력해 주세요.";
    } else if (isNaN(Number(age)) || Number(age) <= 0) {
      newErrors.age = "올바른 나이를 입력해 주세요.";
    }

    if (!instagramId) {
      newErrors.instagramId = "인스타그램 ID를 입력해 주세요.";
    }

    if (!sex) {
      newErrors.sex = "성별을 선택해 주세요.";
    }

    if (!profileImage) {
      newErrors.profileImage = "프로필 이미지를 업로드해 주세요.";
    }

    if (!nickname) {
      newErrors.nickname = "닉네임을 입력해 주세요.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // const handleSignup = async () => {
  //   if (validate()) {
  //     try {
  //       const response = await axios.post("/api/members/register", {
  //         loginId,
  //         password,
  //         name,
  //         age,
  //         sex,
  //         nickname,
  //         instagramId,
  //         profileImage,
  //       });
  //       if (response.status === 200) {
  //         console.log(response.data);
  //         alert("회원가입 성공!");
  //         navigate("/login");
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  const handleSignup = async () => {
    if (validate()) {
      try {
        const formData = new FormData();
        formData.append("loginId", loginId);
        formData.append("password", password);
        formData.append("name", name);
        formData.append("age", age);
        formData.append("sex", sex);
        formData.append("nickname", nickname);
        formData.append("instagramId", instagramId);
        formData.append("profileImage", profileImage);
        const response = await axios.post("/api/members/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          alert("회원가입 성공!");
          navigate("/login");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 제출 방지
      handleSignup();
    }
  };
  useEffect(() => {
    console.log(profileImage);
  }, [profileImage]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${Main})` }}
      />
      <div className="relative">
        <Navbar scrollToBottom={scrollToBottom} />
      </div>
      <div className="inset-0 flex items-center justify-center w-screen h-full max-h-[90%] bg-opacity-10 z-50">
        <div className="relative flex flex-col items-center bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] p-8 rounded-2xl shadow-lg w-[30%] h-auto mb-16">
          <div className="flex flex-col justify-start items-start w-full mx-auto mt-0 gap-0.5">
            <div className="flex justify-center items-center w-full h-[0%]">회원가입</div>

            {/* ID Field */}
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                ID
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="text"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="아이디"
                  value={loginId}
                  onChange={(e) => setloginId(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.loginId && <p className="text-sm text-red-500">{errors.loginId}</p>}
            </div>

            {/* Password Fields */}
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                Password
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="password"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9] mt-1">
                <input
                  type="password"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Name Field */}
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                Name
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="text"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="이름"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Age Field */}
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                Age
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="text"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="나이"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
            </div>

            {/* Instagram Field */}
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                Instagram
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="text"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="인스타 ID"
                  value={instagramId}
                  onChange={(e) => setInstagramId(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.instagramId && <p className="text-sm text-red-500">{errors.instagramId}</p>}
            </div>

            {/* Nickname Field */}
            <div className="flex flex-col justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <label className="self-stretch flex-grow-0 flex-shrink-0 w-[90%] text-base font-bold text-left text-[#FFFFFF]">
                닉네임
              </label>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]">
                <input
                  type="text"
                  className="outline-none text-base text-left text-[#FFFFFF] w-full h-[30px] bg-white/0"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.nickname && <p className="text-sm text-red-500">{errors.nickname}</p>}
            </div>

            {/* sex Field */}
            <div className="flex flex-row justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden pr-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]/0">
                성별을 알려주세요
              </div>
              <div className="container flex items-center justify-end mx-auto mt-1 transition-transform duration-100 min-w-sm">
                <form className="flex">
                  <select
                    id="sex"
                    className="flex outline-none text-gray-100 w-full h-[30px] bg-white/0 rounded-lg border border-[#D9D9D9]"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    onKeyDown={handleKeyDown}
                  >
                    <option value="" disabled>
                      성별을 선택하세요
                    </option>
                    <option
                      value="0"
                      className="bg-white rounded-lg border border-[#D9D9D9] text-gray-800"
                    >
                      남성
                    </option>
                    <option value="1" className="text-gray-800">
                      여성
                    </option>
                  </select>
                </form>
              </div>
            </div>
            {errors.sex && (
              <p className="flex flex-row justify-center w-full text-sm text-red-500">
                {errors.sex}
              </p>
            )}

            {/* File Upload Field */}
            <div className="flex flex-row justify-start items-start w-[90%] mx-auto mt-0 gap-0.5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden pr-4 h-[40px] rounded-lg bg-white/0 border border-[#D9D9D9]/0">
                프로필 이미지를 업로드 해 주세요
              </div>
              <input
                className="flex text-gray-100 w-full h-[30px] bg-white/0 rounded-lg border border-[#D9D9D9]/80 cursor-pointer mt-1"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={onLoadFile}
              />
            </div>
            {errors.profileImage && (
              <p className="flex flex-row justify-center w-full text-sm text-red-500">
                {errors.profileImage}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center w-[90%] mx-auto mt-4 gap-0.5">
            <button
              onClick={handleSignup}
              className="px-4 py-2 text-xl font-semibold text-blue-400 transition-transform duration-100 border border-blue-400 rounded-lg hover:scale-105"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
