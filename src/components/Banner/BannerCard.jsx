import React from 'react';
import Card from './Card';

const BannerCard = ({ foundData }) => {

    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-6xl mx-auto px-5 md:px-5 lg:px-0'>
            {
                foundData?.map(category => <Card
                    key={category.id}
                    category={category}></Card>)
            }
        </div>
    );
};

export default BannerCard;