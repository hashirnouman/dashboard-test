import { ReactElement } from "react";
interface IMenuItem {
  title: string;
  icon: ReactElement;
  active: boolean;
}
const MenuItem = ({ title, icon, active }: IMenuItem) => {
  return (
    <div
      className={`h-[52px]  text-[#D9D9D9] flex justify-center items-center gap-[12px] cursor-pointer ${
        active ? "bg-[#6E56E0] rounded-tr-[40px] rounded-br-[40px]" : ""
      }  `}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default MenuItem;
