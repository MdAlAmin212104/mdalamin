import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex justify-end gap-6 pr-2 text-gray-400 text-xl">
      <a
        title="blank"
        target="_blank"
        href="https://www.facebook.com/md.al.amin.716294/
"
        className="text-primary hover:text-white duration-300"
      >
        <FaFacebook />
      </a>
      <a
        title="blank"
        target="_blank"
        href="https://www.linkedin.com/in/al-amin21
"
        className="text-primary hover:text-white duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        title="blank"
        target="_blank"
        href="https://github.com/MdAlAmin212104
"
        className="text-primary hover:text-white duration-300"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
