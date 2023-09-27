
import bg from "../../assets/Resources/bg.png";
import Category from "../Category/Category";
import BannerCard from "./BannerCard";
const Banner = ({ categories, foundData, handleSearch, handleinput, error, query }) => {

    return (
        <div className="-mt-[90px] md:-mt-[115px] lg:-mt-[170px] z-0">
            <div className='relative'>
                <div className="  md:h-[450px] lg:h-[450px]">
                    <img className="h-[400px] md:h-full md:w-full" src={bg} alt="" />
                </div>
                <div className=" bg-[#FFFFFFF2] w-full h-full absolute bottom-0"></div>
                <div className=" absolute bottom-[30%] md:bottom-[40%] lg:bottom-[35%] md:left-[25%] left-[9%]  lg:left-[30%]">
                    <h2 className=' md:text-2xl lg:text-4xl font-bold text-center text-[#0B0B0B] pb-10 placeholder:text-xs'>I Grow By Helping People In Need</h2>
                    <div className=' flex items-center justify-center'>
                        <input onChange={handleinput} className=' border py-[5px] rounded-l-md  lg:px-5' type="text" placeholder='Search here' value={query} />
                        <button onClick={handleSearch} className=' bg-[#FF444A] text-sm text-[#FFF] font-semibold px-5 py-[8px] rounded-r-md'>Search</button>
                    </div>
                    <p className=" text-red-500 text-xs py-3 pl-[2px] lg:pl-[115px] md:pl-[18px]">{error}</p>
                </div>
            </div>
            <div>
                <BannerCard foundData={foundData}></BannerCard>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-6xl mx-auto lg:mt-20 mt-10 px-5 md:px-5 lg:px-0'>
                {
                    categories?.map(category => <Category
                        key={category.id}
                        category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Banner;

