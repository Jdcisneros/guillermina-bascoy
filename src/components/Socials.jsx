import { FaLinkedin, FaPinterestSquare} from "react-icons/fa";

import { AiFillTikTok } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


function Socials() {
  return (
    <div className=" hidden lg:absolute md:flex  top-1/2 transform -translate-y-1/2 left-0 z-50">
      <div className="flex flex-col items-center text-stone-900 text-xl  p-2 rounded">
        
        <a
          href="#linkedin"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm p-1 my-1 duration-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#mail"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm p-1 my-1  duration-500"
        >
          <MdEmail  size={24} />
        </a>
        <a
          href="#instagram"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm p-1 my-1 duration-500"
        >
          <RiInstagramFill size={24} />
        </a>
        <a
          href="#pinterest"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm p-1 my-1  duration-500"
        >
          <FaPinterestSquare size={24} />
        </a>
       
        <a
          href="#tiktok"
          className="hover:text-zinc-50 hover:bg-zinc-950 rounded-sm p-1 my-1  duration-500"
        >
          <AiFillTikTok  size={24} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
