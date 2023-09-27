import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";
import { Link } from "react-router-dom";
import img from "../../../assets/Resources/donate.jpg"
import './Donation.css'
const Donation = () => {
    const [donations, setDonations] = useState([])
    const [isSeeAll, setIsSeeAll] = useState(false)
    const [noData, setNoData] = useState('')

    useEffect(() => {
        const donated = JSON.parse(localStorage.getItem('donated'))
        if (donated) {
            setDonations(donated)
        } else {
            setNoData('You have not given any donation')
        }

    }, [])

    // const handleSeeAll = () => {

    // }

    const handleDeleteAll = () => {
        localStorage.clear()
        setDonations([])
        setNoData('You have not given any donation')
    }
    return (
        <div className=" max-w-6xl mx-auto">
            <div>
                <div className={`flex justify-center ${donations.length <= 0 && 'hidden'}`}>
                    <button onClick={handleDeleteAll}
                        className=" capitalize mt-10 middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Delete All
                    </button>
                </div>
            </div>
            {
                noData ? <div>
                    <img className="don w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]  mx-auto rounded-full mt-5" src={img} alt="" />
                    <p className=' text-sm lg:text-2xl text-center font-semibold mt-20'>{noData}</p>
                </div> :
                    !isSeeAll ?
                        <div className=" grid md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto gap-4 mt-20 px-5">
                            {
                                donations.slice(0, 4).map(item => <DonatedCard key={item.id} item={item}></DonatedCard>)
                            }
                        </div> :
                        <div className=" grid md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto gap-4 mt-20 px-5">
                            {
                                donations.map(item => <DonatedCard key={item.id} item={item}></DonatedCard>)
                            }
                        </div>
            }

            <div onClick={() => setIsSeeAll(!isSeeAll)} className={`flex justify-center py-10  ${donations.length < 4 && 'hidden'}`}>
                <button className=' bg-[#009444] rounded-md px-8 text-[#FFF] py-2'>{isSeeAll && donations.length > 4 ? 'See Less' : 'See All'}</button>
            </div>
            <Link to='/'><div className={`flex justify-center py-10 ${donations.length > 0 && 'hidden'}`}>
                <button className=' bg-[#009444] rounded-md px-8 text-[#FFF] py-2'>Go Back Home</button>
            </div>
            </Link>
        </div>
    );
};

export default Donation;