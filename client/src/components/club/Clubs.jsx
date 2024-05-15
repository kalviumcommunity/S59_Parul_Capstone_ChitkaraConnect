import React from 'react'
import Navbar from '../Navbar'
import Search from '../../assets/search.png'

export default function Clubs() {
    return (
        <div>
            <Navbar />
            <div className='flex w-full '>
                <div className='bg-black h-[100vh] w-[50vw]'>
                    <h1 className='text-white text-[4vw] font-bold text-center'>EXPLORE <span className='text-red-500'>CLUBS</span></h1>
                </div>
                <div className='w-[50vw] h-[100vh] flex flex-col items-center pt-8'>
                    <div className='py-4 flex'>
                        <input type="text" placeholder='Search here...' className='border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-md px-4 py-2 w-[24vw] text-[1.25vw] font-semibold' />
                        <img src={Search} alt="search" className='w-12 h-12 p-2 rounded-r-md border-2 border-gray-400 border-l-0 bg-red-500' />
                    </div>
                    <div className='flex flex-wrap justify-center px-4 pt-4 gap-20 overflow-y-scroll'>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                        <div className='w-[13vw] h-[13vw] max-w-[200px] max-h-[200px] shadow shadow-gray-400 p-4 border-0 flex items-center justify-center rounded'>
                            <img src={Search} alt="csi" className='max-w-full max-h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}