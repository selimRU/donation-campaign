import React from 'react';
import Category from '../Category/Category';
import { useNavigate } from 'react-router-dom';


const DonationCategories = ({ categories }) => {
    const navigate = useNavigate()
    const handleCategoryDetails = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-6xl mx-auto mt-20 px-5 md:px-5 lg:px-0'>
            {
                categories?.map(category => <Category
                    handleCategoryDetails={handleCategoryDetails}
                    key={category.id}
                    category={category}></Category>)
            }
        </div>
    );
};

export default DonationCategories;