import Title from "../components/common/Title";
import skillData from "../data/skillData";
import { getImgUrl } from "../utils/getImageUrl";
import { motion } from "framer-motion";

const Skills = () => {
  const { shopify, client, Server, Tools } = skillData;

  return (
    <div>
      <Title title={"Shopify Ecosystem"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8 mb-12">
        {shopify?.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={getImgUrl(item.img)}
              className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
              alt=""
            />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>

      <Title title={"Client Side"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8 mb-12">
        {client?.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={getImgUrl(item.img)}
              className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
              alt=""
            />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>


      <Title title={"Server Side"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8 mb-12">
        {Server?.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={getImgUrl(item.img)}
              className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
              alt=""
            />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>


      <Title title={"Tools"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8 mb-12">
        {Tools?.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={getImgUrl(item.img)}
              className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
              alt=""
            />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
