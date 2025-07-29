

const Button = ({text}) => {
    return (
        <div>
            <button className="py-[16px] px-[32px] text-[18px] font-dm bg-[#B0DD1D] hover:bg-white relative text-black rounded-[100px] font-[500] transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_#B0DD1D] animate-glow ">{text}</button>
        </div>
    );
};

export default Button;