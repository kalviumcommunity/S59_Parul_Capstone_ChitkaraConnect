import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Search from '../../assets/search.png';
import Carousel from '../Carousel'
import IETE from '../../assets/IETE.jpg'
import { Link } from 'react-router-dom'

export default function Clubs() {
    const [clubs, setClubs] = useState([])
    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/clubs');
                setClubs(response.data);
            } catch (error) {
                console.error('Error fetching clubs:', error);
            }
        };

        fetchClubs();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='flex w-full'>
                <div className='bg-black h-[100vh] w-[50vw]'>
                    <h1 className='text-white text-[4.3vw] font-bold text-center'>EXPLORE <span className='text-red-500'>CLUBS</span></h1>
                    <Carousel />
                </div>
                <div className='w-[50vw] h-[100vh] flex flex-col items-center pt-8'>
                    <div className='py-4 flex'>
                        <input type="text" placeholder='Search here...' className='border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-md px-4 py-2 w-[24vw] text-[1.25vw] font-semibold' />
                        <img src={Search} alt="search" className='w-12 h-12 p-2 rounded-r-md border-2 border-gray-400 border border-l-0 bg-red-500' />
                    </div>
                    <div className='flex flex-wrap justify-center px-4 pt-4 gap-20 overflow-y-scroll'>
                        {clubs.map((club) => (
                            <div key={club._id} className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-8 border-0 flex items-center justify-center rounded'>
                                <Link to={`/Club/${club._id}`}>
                                    <div className='text-center'>
                                        <img src={IETE} alt="" />
                                        <p className='text-[1.2vw] font-semibold text-black'>{club.clubName}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
