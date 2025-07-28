import tasklogo from "../assets/tasklogo1.svg";
import user from "../assets/user1.svg";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
const NavBar = () => {
  return (
    <nav className="max-w-[1280px]  mx-auto pt-[10px]">
      <div className="flex justify-between items-center relative">
        <div>
          <ul className="flex justify-between items-center gap-[50px] text-[#1A171A] font-[400] text-[18px] cursor-pointer">
            {["Home", "Shop", "Blogs", "Contact"].map((item, index) => (
              <li
                key={index}
                className="relative transition-all duration-300 hover:text-[#B0DD1D] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B0DD1D] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-dashed border-2 flex justify-center items-center p-[10px] ">
            <img src={tasklogo} alt="logo" />
        </div>
        <div className="flex justify-between items-center gap-[55px]">
            <div className="flex justify-between items-center gap-[11px] cursor-pointer">
                <p className="text-[18px] font-[400] ">Login</p>
                <img src={user} alt="user" className="border-dashed border-2 pt-[2px] pr-[4px] pb-[4px] pl-[2px]" />
            </div>
            <img src={search} alt="search" className="pt-[2px] pr-[4px] pb-[4px] pl-[2px] border-dashed border-2 cursor-pointer" />
            <div className=" relative">
            <img src={bag} alt="bag" className="pt-[2px] pr-[4px] pb-[4px] pl-[2px] border-dashed border-2 cursor-pointer"/>
            <div className="flex justify-center items-center -top-1 left-[50%] absolute  bg-black text-white rounded-full h-[18px] w-[18px]">0</div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
