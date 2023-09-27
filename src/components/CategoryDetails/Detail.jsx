import React from 'react';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Detail = ({ category }) => {
    const { id, price, img_details, description, title,categoryTextColor } = category;

    const handleDonation = () => {
        const added = []
        const donated = localStorage.getItem('donated') ? JSON.parse(localStorage.getItem('donated')) : [];
        if (!donated) {
            added.push(category)
            localStorage.setItem('donated', JSON.stringify(added))
            swal("Good job!", "You have donated successfully!", "success");
        }
        const exists = donated?.find(item => item.id == id)
        if (!exists) {
            added.push(...donated, category)
            localStorage.setItem('donated', JSON.stringify(added))
            swal("Good job!", "You have donated successfully!", "success");
        }
        else {
            toast.error("Already donated it !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    return (
        <div className=' w-full lg:max-w-6xl l lg:mx-auto mt-20 px-5'>
            <div className='relative'>
                <img className=' w-full h-[500px] rounded-b-xl lg:rounded-b-3xl md:rounded-b-2xl' src={img_details} alt="" />
                <div className=' w-full h-[80px] absolute bg-[#0B0B0B80] bottom-0 rounded-b-xl lg:rounded-b-3xl md:rounded-b-2xl'>
                    <button style={{backgroundColor:categoryTextColor}} onClick={handleDonation} className=' text-[#FFF] px-4 py-2 rounded-md mt-5 ml-5'>Donate ${price}</button>
                </div>
            </div>
            <p className=' text-[#0B0B0B] text-3xl font-bold mt-10 mb-3'>{title}</p>
            <p className=' text-base'>{description}</p>
            <ToastContainer />
        </div>
    );
};

export default Detail;