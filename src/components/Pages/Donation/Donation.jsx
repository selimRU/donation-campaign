import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";


const Donation = () => {
    const [donations, setDonations] = useState([])
    const [isSeeAll, setIsSeeAll] = useState(false)
    const [noData, setNoData] = useState('')

    useEffect(() => {
        const donated = JSON.parse(localStorage.getItem('donated'))
        console.log(donated);
        if (donated) {
            setDonations(donated)
        } else {
            setNoData('No Data Found')
        }

    }, [])

    const handleSeeAll = () => {
        setIsSeeAll(!false)
    }
    return (
        <div>
            {
                noData ? <p>{noData}</p> :
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

            <div onClick={handleSeeAll} className={`flex justify-center py-10 ${isSeeAll && 'hidden'} ${donations.length < 4 && 'hidden'}`}>
                <button className=' bg-[#009444] rounded-md px-8 text-[#FFF] py-2'>See All</button>
            </div>
        </div>
    );
};

export default Donation;