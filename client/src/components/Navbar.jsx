import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='flex flex-col bg-cover bg-black'>
                <div className="flex justify-end align-center my-4 navbar">
                    <div className='flex align-center mt-3 mr-12 p-2'>
                        <div className='mx-6'>
                            <Link to="/" className="text-white p-1 font-normal text-lg hover:border-b-4 hover:border-red-600">
                                HOME
                            </Link>
                        </div>
                        <div className='mx-6'>
                            <Link to="/clubs" className="text-white p-1 font-normal text-lg hover:border-b-4 hover:border-red-600">
                                CLUBS
                            </Link>
                        </div>
                        <div className='ml-6'>
                            <Link to="/events" className="text-white p-1 font-normal text-lg hover:border-b-4 hover:border-red-600">
                                EVENTS
                            </Link>
                        </div>
                    </div>
                    <div className='mt-3 py-2 px-3'>
                        <Link to="/register" className="text-white mt-3 mr-12 py-2 px-3 font-normal font-sans text-lg bg-red-500 rounded">
                            GET STARTED
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
