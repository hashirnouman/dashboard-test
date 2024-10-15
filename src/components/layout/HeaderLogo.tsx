import Image from "next/image";
import { BiSort } from "react-icons/bi";

const HeaderLogo = () => {
  return (
    <div className="w-full bg-black h-[80px] flex gap-[20px] items-center justify-center shadow-sm shadow-gray-500">
      <div>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={100}
          height={20}
          className="bg-cover"
        />
      </div>
      <BiSort size={25} color="white" />
    </div>
  );
};

export default HeaderLogo;
