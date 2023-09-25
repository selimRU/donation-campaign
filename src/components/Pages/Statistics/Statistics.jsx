import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#FF444A', '#00C49F'];

const Statistics = () => {
    const [donated, setDonated] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const donations = useLoaderData()
    const total = donations.reduce((pre, item) => pre + item.price, 0)

    const donationPercentage = parseInt((totalPrice / total) * 100);
    const remaining = 100 - donationPercentage

    useEffect(() => {
        const localStorageData = localStorage.getItem('donated');
        if (localStorageData) {
            setDonated(JSON.parse(localStorageData));
        }
    }, []);

    useEffect(() => {

        const calculatedTotalPrice = donated.reduce((total, item) => total + item.price, 0);
        setTotalPrice(calculatedTotalPrice);
    }, [donated]);



    const data = [
        {
            data: 'price', price: donationPercentage
        },
        {
            data: 'price', price: remaining
        }
    ]

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div>
            <div className='flex justify-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="price"
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={150}
                        fill="#8884d8"
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </div>
            <div className=' flex flex-col md:flex-row items-center gap-10 justify-center'>
                <div className=' flex gap-3 items-center'>
                    <p className=' text-[#0B0B0B] text-base'>Total Donation: {remaining} %</p>
                    <div className=' bg-[#00C49F] w-[100px] h-[12px]'></div>
                </div>
                <div className=' flex gap-3 items-center'>
                    <p className=' text-[#0B0B0B] text-base'>My Donation: {donationPercentage} %</p>
                    <div className=' bg-[#FF444A] w-[100px] h-[12px]'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
