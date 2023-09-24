import React from 'react';

const Detail = ({ category }) => {
    const { price, img_details, description, title } = category;
    return (
        <div className=' w-full lg:max-w-6xl l lg:mx-auto mt-20 px-5'>
            <div className='relative'>
                <img className=' w-full rounded-b-xl lg:rounded-b-3xl md:rounded-b-2xl' src={img_details} alt="" />
                <div className=' w-full h-[80px] absolute bg-[#0B0B0B80] bottom-0 rounded-b-xl lg:rounded-b-3xl md:rounded-b-2xl'>
                    <button className=' bg-[#FF444A] text-[#FFF] px-4 py-2 rounded-md mt-5 ml-5'>Donate ${price}</button>
                </div>
            </div>
            <p className=' text-[#0B0B0B] text-3xl font-bold mt-10 mb-3'>{title}</p>
            <p className=' text-base'>{description}</p>
        </div>
    );
};

export default Detail;