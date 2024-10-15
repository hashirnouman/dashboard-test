import { menuItems } from "../../../constants/menu";
import HeaderLogo from "./HeaderLogo";
import MenuItem from "./MenuItem";
const Sidebar = () => {
  return (
    <aside className="bg-black w-[240px] h-screen">
      <HeaderLogo />
      <div className="flex flex-col justify-start pr-[20px] gap-[8px]">
        {menuItems?.map((item, index) => (
          <MenuItem
            title={item.title}
            icon={item.icon}
            key={index}
            active={item.active}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
