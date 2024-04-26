import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/Home1.jpeg'
import arrow from '../assets/download.png'

export default function Home() {
    return (
        <div className='h-[100vh] bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <nav className='flex flex-col'>
                <div className="w-full flex justify-end">
                    <Link to="/" className="text-white mt-3 mr-12 p-2 font-normal font-sans text-lg hover:border-b-4 hover:border-red-600">
                        HOME
                    </Link>
                    <Link to="/clubs" className="text-white mt-3 mr-12 p-2 font-normal font-sans text-lg hover:border-b-4 hover:border-red-600">
                        CLUBS
                    </Link>
                    <Link to="/events" className="text-white mt-3 mr-12 p-2 font-normal font-sans text-lg hover:border-b-4 hover:border-red-600">
                        EVENTS
                    </Link>
                    <div className='mt-3 py-2 px-3'>
                        <Link to="/register" className="text-white mt-3 mr-12 py-2 px-3 font-normal font-sans text-lg bg-red-500 rounded">
                            GET STARTED
                        </Link>
                    </div>
                </div>
                <div className='h-96 flex flex-col justify-center align-center'>
                    <div className='text-gray-100 flex justify-center align-center text-6xl font-medium'>
                        Discover around you
                    </div>
                    <div className='text-white flex justify-center align-center text-8xl font-bold'>
                        CHITKARA | <p className='text-red-500'>CONNECT</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center '>
                    <div className='text-white flex justify-center align-center text-4xl font-medium'>
                        Discover here
                    </div>
                    <div className='w-full h-14 flex justify-center'>
                        <img src={arrow} alt="arrow" className='w-14 h-14 m-4' />
                    </div>
                </div>
            </nav>
        </div>
    );
}
