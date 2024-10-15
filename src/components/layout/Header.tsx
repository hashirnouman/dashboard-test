import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";
const Header = () => {
  return (
    <header className="bg-black h-[80px] w-full flex text-white items-center justify-start pl-40 shadow-sm shadow-gray-500">
      <div className="w-[80%] h-full flex justify-between items-center">
        <div>
          <Image
            src="/assets/images/logo2.png"
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="bg-[#151515] rounded-[20px] h-[40px] w-[280px]  flex items-center px-[16px] gap-2">
            <RiSearchLine size={25} />
            <input
              type="text"
              className=" h-full w-full outline-none bg-transparent "
            />
          </div>
          <LuSettings2 size={25} />
          <CiBellOn size={25} />
          <Image
            src="/assets/images/profile.png"
            alt="profile"
            className="w-[40px] h-[40px] rounded-[30px]"
            width={100}
            height={100}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
