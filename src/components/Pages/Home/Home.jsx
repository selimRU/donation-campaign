import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';

const Home = () => {
    const [categories, setCategories] = useState([])
    const [query, setQuery] = useState('')
    const [foundData, setFoundData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })

    }, [])

    const handleinput = (e) => {
        setQuery(e.target.value)

    }
    const handleSearch = () => {

        if (query.length === 0) {
            setError('Opps! write something first')
        }
        const filtered = categories?.filter(item => item.category_name?.toLowerCase().includes(query.toLowerCase()));
        setFoundData([...filtered])
        setCategories([])
    }
    return (
        <div>
            <Banner 
                query={query} error={error}
                handleinput={handleinput} foundData={foundData}
                categories={categories} handleSearch={handleSearch}></Banner>
        </div>
    );
};

export default Home;