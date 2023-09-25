import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCard = ({ item }) => {
    const { id, category_name, image, price, cardBgColor, categoryBgColor, categoryTextColor, title } = item;
    return (
        <div style={{ backgroundColor: cardBgColor }} className='flex items-center rounded-md'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className=' pl-5 space-y-3'>
                <p style={{ backgroundColor: categoryBgColor, color: categoryTextColor }} className=' text-center rounded-md text-xs md:text-sm lg:text-sm py-1'>{category_name}</p>
                <p className=' text-[#0B0B0B] text-xl lg:text-2xl font-semibold'>{title}</p>
                <p style={{ color: categoryTextColor }}>{price}</p>
                <Link to={`/details/${id}`}><button style={{ backgroundColor: categoryTextColor }} className=' rounded-md px-5 text-[#FFF] py-2'>View Details</button></Link>
            </div>
        </div>
    );
};

export default DonatedCard;