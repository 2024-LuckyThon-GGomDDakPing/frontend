import deletebtn from "../../assets/deletebtn.png";

interface InputFieldProps {
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  isTitle?: boolean; // 제목 필드 여부를 나타내는 선택적 prop
}

export default function InputField({
  value,
  placeholder,
  name,
  onChange,
  onClear,
  isTitle = false,
}: InputFieldProps) {
  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-[770px] ${
          isTitle ? "h-7 text-xl" : "h-6 text-md"
        } bg-transparent outline-none border-b-[1px] pr-5 pb-2 border-white`}
      />
      <img
        src={deletebtn}
        alt="deletebtn"
        className="absolute right-0 w-3 h-3 cursor-pointer top-1"
        onClick={onClear}
      />
    </div>
  );
}
