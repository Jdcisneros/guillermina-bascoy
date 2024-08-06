import { FaInstagram, FaLinkedin, FaPinterestSquare} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiFillTikTok } from "react-icons/ai";

function Socials() {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-0 z-50">
      <div className="flex flex-col items-center text-stone-900 text-xl bg-white/50 p-2 shadow-lg rounded">
        <a
          href="#instagram"
          className="nav-item font-bold hover:text-lime-400 my-2 transition"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="#linkedin"
          className="nav-item font-bold hover:text-lime-400 my-2 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="#pinterest"
          className="nav-item font-bold hover:text-lime-400 my-2 transition"
        >
          <FaPinterestSquare size={30} />
        </a>
        <a
          href="#mail"
          className="nav-item font-bold hover:text-lime-400 my-2 transition"
        >
          <HiMail  size={30} />
        </a>
        <a
          href="#tiktok"
          className="nav-item font-bold hover:text-lime-400 my-2 transition"
        >
          <AiFillTikTok  size={30} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
