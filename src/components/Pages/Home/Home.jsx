import React from 'react';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import DonationCategories from '../../DonationCategories/DonationCategories';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <DonationCategories categories={categories}></DonationCategories>
        </div>
    );
};

export default Home;