import bg from "../../assets/Resources/donor.png";
const Banner = () => {
    return (
        <div className='relative'>
            <div className="lg:h-[450px]">
                <img className=" h-full w-full" src={bg} alt="" />
            </div>
            <div className=" bg-[#FFFFFFF2] w-full h-full absolute bottom-0"></div>
            <div className=" absolute bottom-[30%] md:bottom-[20%] lg:bottom-[45%] md:left-[25%] left-[10%]  lg:left-[30%]">
                <h2 className=' md:text-2xl lg:text-4xl font-bold text-center text-[#0B0B0B] pb-10 placeholder:text-xs'>I Grow By Helping People In Need</h2>
                <div className=' flex items-center justify-center'>
                    <input className=' border py-[5px] rounded-l-md px-5' type="text" placeholder='Search here' />
                    <button className=' bg-[#FF444A] text-sm text-[#FFF] font-semibold px-5 py-[8px] rounded-r-md'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;