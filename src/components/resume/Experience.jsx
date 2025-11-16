import { TbCertificate } from "react-icons/tb";
import Title from "../common/Title";
import "./EduStyle.css";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

import { FaEye } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className="mb-8 md:mt-12 mt-6 relative">
      <div className=" flex items-center gap-3">
        <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
          <TbCertificate className=" text-lg font-bold text-primary" />
        </div>

        <Title sTitle title={"Experience"} />
      </div>
      <div className="time-line-area flex flex-col gap-8">
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Shopify Developer at SM Technology</h3>
          <h3 className=" text-primary mt-1">Sep, 2024 - Present</h3>
          <p>
            Working on Shopify store design and redesign based on client needs, along with
            custom Shopify app development.
          </p>
        </div>

        <div className="text-[15px] flex flex-col gap-1">
          <h3 className=" font-bold ">Complete Web Development Course</h3>
          <h3 className=" text-primary mt-1">Dec, 2023 - Jun, 2024</h3>
          <p>
            I Completed the <strong>Complete Web Development</strong> by
            Programming Hero. I learn from this course HTML, CSS, JavaScript,
            MongoDB, Express, React.js, Next.js and created many websites.
          </p>
          <a
            target="blank"
            className=" flex items-center gap-2 text-primary hover:underline"
            href={
              "https://drive.google.com/file/d/1nY9_yoE88IJuKJXZI33dPgqFn1h_2Jn2/view"
            }
          >
            Show Certificate
            <span>
              <FaEye></FaEye>
            </span>
          </a>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className="font-bold">
            Advance React and Next.js Course - Europena IT Ltd
          </h3>
          <h3 className="text-primary mt-1">Jun, 2024 - Sep, 2024</h3>

          <p>
            I learned Frontend Development using React and Next.js to enhance my
            development skills and take them to the next level. I also completed my
            Industrial Training at European IT Ltd during my 8th semester as part of my
            diploma program.
          </p>

          <a
            target="blank"
            className="flex items-center gap-2 text-primary hover:underline"
            href={
              "https://drive.google.com/file/d/1Q5HC5Kebnoz0bDuvgT5ftt6uEsRBNPl1/view"
            }
          >
            Show Certificate
            <span>
              <FaEye />
            </span>
          </a>
        </div>


        <div className="text-[15px] flex flex-col gap-1">
          <h3 className="font-bold">
            Natinal Skills Development Authority (NSDA),  Level-3
          </h3>
          <h3 className="text-primary mt-1">Jun, 2024 - Sep, 2024</h3>

          <p>
            I learned web design and development for freelancing, including HTML, CSS,
            Bootstrap, basic JavaScript, and responsive website creation. This training
            helped me build a strong foundation for real-world client projects.
          </p>

          <a
            target="blank"
            className="flex items-center gap-2 text-primary hover:underline"
            href={
              "https://drive.google.com/file/d/1uqIIjC-Dfpei1pwsSGM3vwsbLYuPMVwK/view"
            }
          >
            Show Certificate
            <span>
              <FaEye />
            </span>
          </a>
        </div>
      </div>
      <a
        target="blank"
        className=" absolute top-0 right-0 "
        href={
          "https://drive.google.com/file/d/1DKQdPCZcIyLIU3MQx_6podjrva2IbBHi/view?usp=drive_link"
        }
      >
        <motion.button
          whileTap={{ scale: 0.5 }}
          whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
          className="md:text-[15px] text-[13px]  md:px-6 md:py-2  px-4 py-1 bg-gradient-to-b from-primary border border-transparent hover:border hover:border-primary hover:text-primary hover:bg-none duration-300 text-black rounded-lg via-primary to-primary flex items-center justify-between gap-1"
        >
          Resume
          <span>
            <MdFileDownload />
          </span>
        </motion.button>
      </a>
    </section>
  );
};

export default Experience;
