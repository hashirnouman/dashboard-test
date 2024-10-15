/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <section className="w-full flex overflow-hidden">
      <Sidebar />
      <body className=" w-full ">
        <Header />
        <div className="overflow-auto bg-[#151515] h-full text-white">
          {children}
        </div>
      </body>
    </section>
  );
};

export default Layout;
