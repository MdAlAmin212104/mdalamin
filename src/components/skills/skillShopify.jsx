import skillData from "../../data/skillData";
import Title from "../common/Title";


const skillShopify = ({heading}) => {
  const shopify = skillData.shopify
  
  return (
    <section className="my-16">
      <Title title={heading} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8 mb-12">
        {shopify?.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={getImgUrl(item.img)}
              className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
              alt={item?.name}
            />
            <h4 className="flex justify-center mt-3">{item?.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default skillShopify;
