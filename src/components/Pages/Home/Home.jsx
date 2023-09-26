import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';

const Home = () => {
    const [categories, setCategories] = useState([])
    const [query, setQuery] = useState('')
    const [foundData, setFoundData] = useState([])

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })

    }, [])

    const handleinput = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

    }
    const handleSearch = () => {
        const filtered = categories?.filter(item => item.category_name?.toLowerCase().includes(query.toLowerCase()));
        setFoundData([...filtered])
        setCategories([])
        setQuery('')
    }
    return (
        <div>
            <Banner handleinput={handleinput} foundData={foundData} categories={categories} handleSearch={handleSearch}></Banner>
        </div>
    );
};

export default Home;