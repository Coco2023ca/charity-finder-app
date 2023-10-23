import React, { useEffect, useState } from 'react';
import { useOutletContext , Link } from 'react-router-dom';
import Charity from '../types/CharityTypes';
import axios from 'axios';

const CharityList: React.FC = () => {
    const [keyword, _] = useOutletContext<string>();
    const [charities, setCharities] = useState<Charity[]>([]);

    const fetchCharitiesByKeyword = (keyword: string) => {
        const term = keyword ? keyword : "animals";
        const url = `https://partners.every.org/v0.2/browse/${term}?apiKey=${import.meta.env.VITE_API_KEY}`;
        axios.get(url)
        .then((resp) => resp.data.nonprofits)
        .then((resp) => resp.filter((obj: Charity) => obj.ein !== undefined))
        .then((resp: Charity[]) => setCharities(resp))
        .catch((e) => console.log(e));
    }

    useEffect(() => fetchCharitiesByKeyword(keyword), [keyword])

    return (
        <div className='mb-14 '>
            <h1 className='pt-8 text-3xl mt-2 font-semibold flex justify-center text-gray-700'>You May Interest</h1>
        <div className="px-4 mt-5 grid justify-items-center grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3 md:px-20">
            
                {charities.map((charity) => (
                    <a className="mt-5 px-5 py-5 w-full rounded-md bg-white shadow-lg hover:bg-[#FBFBFB]">
                    <div key={charity.ein} >
                        <span className='flex items-center text-lg font-semibold'>
                        <img src={charity.logoUrl} alt={`${charity.name} Logo`} className="mr-3 rounded-full" />
                        <h1 className="text-xl font-bold mb-2">{charity.name}</h1>
                        </span>
                        <div className="w-full my-3 border-b border-gray-300"></div>
                        <span className='flex items-center'>
                            <p className="text-sm">Location: {charity.location}</p>
                            <Link to={`/charity/${charity.ein}`} className="block mt-4 text-blue-500">Learn More</Link>
                        </span>
                    </div>
                    </a>
                ))}
           
        </div>
        </div>
    );
};

export default CharityList;