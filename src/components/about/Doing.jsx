import Title from "../common/Title";
import { TbReplace } from "react-icons/tb";
import { LuReplace } from "react-icons/lu";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiShopify } from "react-icons/si";

const Doing = () => {
  return (
    <section className="my-16">
      <Title sTitle title={"What I'm Doing"} />
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Shopify App Development */}
        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-4 items-start">
          <div>
            <SiShopify className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Shopify App Development</h2>
            <p className="text-[15px] pt-1">
              Building custom, scalable Shopify apps tailored for business needs.
            </p>
          </div>
        </div>

        {/* Shopify Theme Customization */}
        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-2 items-start">
          <div>
            <BsFiletypeHtml className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Shopify Theme Customization</h2>
            <p className="text-[15px] pt-1">
              Customize Shopify themes for better UI, UX, and faster performance.
            </p>
          </div>
        </div>

        {/* Shopify Store Design / Redesign */}
        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-5 items-start">
          <div>
            <TbReplace className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Shopify Store Design / Redesign</h2>
            <p className="text-[15px] pt-1">
              Professional store design or redesign to make your brand stand out.
            </p>
          </div>
        </div>

        {/* Web Development / Frontend Work */}
        <div className="bg-[#242425] px-4 py-8 rounded-2xl border border-[#383838] flex gap-2 items-start">
          <div>
            <LuReplace className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="md:text-lg font-bold">Web Development</h2>
            <p className="text-[15px] pt-1">
              Frontend & MERN stack development for modern, scalable web solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Doing;
