import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Legend } from 'recharts';



const Statistics = () => {
    const [donated, setDonated] = useState([]);
    
    const COLORS = ['#FF444A', '#00C49F'];

    const donations = useLoaderData()
    const totalDonation = donations.length

    // calculation part of given donations and remaining donations percentage
    const donatedPercentages = (donated.length / totalDonation) * 100;
    const remaining = 100 - donatedPercentages


    useEffect(() => {
        const localStorageData = localStorage.getItem('donated');
        if (localStorageData) {
            setDonated(JSON.parse(localStorageData));
        }
    }, []);

    const data = [
        {
            data: 'donation', quantity: donatedPercentages
        },
        {
            data: 'donation', quantity: remaining
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
                        dataKey="quantity"
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
                </PieChart>
            </div>
            <div className=' flex flex-col md:flex-row items-center gap-10 justify-center'>
                <div className=' flex gap-3 items-center'>
                    <p className=' text-[#0B0B0B] text-base'>Total Donation</p>
                    <div className=' bg-[#00C49F] w-[100px] h-[12px]'></div>
                </div>
                <div className=' flex gap-3 items-center'>
                    <p className=' text-[#0B0B0B] text-base'>My Donation</p>
                    <div className=' bg-[#FF444A] w-[100px] h-[12px]'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
