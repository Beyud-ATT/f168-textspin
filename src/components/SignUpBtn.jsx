import { Link } from "react-router";

export default function SignUpBtn() {
  return (
    <Link to="" target="_blank" className="leading-0">
      <button
        style={{
          borderRadius: "44.081px",
          border: "1.16px solid #FFF9E7",
          background: "linear-gradient(180deg, #FFE0B1 0%, #ECBF86 100%)",
          boxShadow: "0px 4.64px 0px 0px #892700",
        }}
        className="lg:w-[212px] lg:h-[52px] md:w-[150px] md:h-[35px] w-[101px] h-[25px] p-3"
      >
        <span className="lg:text-xl md:text-sm text-[10px] text-[#B9242D] uppercase font-bold h-full flex justify-center items-center">
          đăng ký
        </span>
      </button>
    </Link>
  );
}
