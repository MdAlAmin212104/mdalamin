import { GiOpenBook } from "react-icons/gi";
import Title from "../common/Title";
import "./EduStyle.css";

const Edu = () => {
  return (
    <section className="my-8">
      <div className=" flex items-center gap-3">
        <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
          <GiOpenBook className=" text-lg font-bold text-primary" />
        </div>
        <Title sTitle title={"Education"} />
      </div>

      <div className="time-line-area flex flex-col gap-8">
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold text-[24px]">Northern University Bangladesh, Bangladesh</h3>
          <h3 className=" text-primary mt-1 text-[18px]">October, 2025 - present</h3>
          <p>I'm currently studying CSE (Computer Science and Engineering)</p>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
  <h3 className="font-bold text-[24px]">Kurigram Polytechnic Institute, Kurigram</h3>
  <h3 className="text-primary mt-1 text-[18px]">June, 2020 - October, 2024</h3>
  <p>I completed my Diploma in Computer Science and Technology.</p>
</div>

      </div>
    </section>
  );
};

export default Edu;
