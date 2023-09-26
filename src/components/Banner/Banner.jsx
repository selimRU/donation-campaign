import { useNavigate } from "react-router-dom";
import bg from "../../assets/Resources/donor.png";
import Category from "../Category/Category";
import BannerCard from "./BannerCard";
const Banner = ({ categories, foundData, handleSearch, handleinput }) => {
    const navigate = useNavigate()
    const handleCategoryDetails = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div>
            <div className='relative'>
                <div className="lg:h-[450px]">
                    <img className=" h-full w-full" src={bg} alt="" />
                </div>
                <div className=" bg-[#FFFFFFF2] w-full h-full absolute bottom-0"></div>
                <div className=" absolute bottom-[30%] md:bottom-[20%] lg:bottom-[45%] md:left-[25%] left-[10%]  lg:left-[30%]">
                    <h2 className=' md:text-2xl lg:text-4xl font-bold text-center text-[#0B0B0B] pb-10 placeholder:text-xs'>I Grow By Helping People In Need</h2>
                    <div className=' flex items-center justify-center'>
                        <input onChange={handleinput} className=' border py-[5px] rounded-l-md px-5' type="text" placeholder='Search here' />
                        <button onClick={handleSearch} className=' bg-[#FF444A] text-sm text-[#FFF] font-semibold px-5 py-[8px] rounded-r-md'>Search</button>
                    </div>
                </div>
            </div>
            <div>
                <BannerCard foundData={foundData}></BannerCard>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-6xl mx-auto mt-20 px-5 md:px-5 lg:px-0'>
                {
                    categories?.map(category => <Category
                        handleCategoryDetails={handleCategoryDetails}
                        key={category.id}
                        category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Banner;