import tasklogo from "../assets/tasklogo1.svg";
const NavBar = () => {
  return (
    <nav className="max-w-[1280px]  mx-auto pt-[10px]">
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex justify-between items-center gap-[50px] text-[#1A171A] font-[400] text-[18px] cursor-pointer">
            {["Home", "Shop", "Blogs", "Contact"].map((item, index) => (
              <li
                key={index}
                className="relative transition-all duration-300 hover:text-[#6C5DD3] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#6C5DD3] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
            <img src={tasklogo} alt="logo" />
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
