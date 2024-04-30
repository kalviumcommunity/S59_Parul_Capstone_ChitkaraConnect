import React from 'react'
import ChitkLogo from '../assets/ChitkLogo.png'
import Logo from '../assets/logo.jpg'

export default function () {
    return (
        <div>
            <div className='w-full flex justify-center my-14'>
                <div className='w-[70%] bg-gray-700 rounded-xl text-white flex justify-between px-[5vw] py-[3vw] border-gray-900 border-2' >
                    <div>
                        <p className='py-4 font-bold text-[1.4vw]'>Chitkara University, Himachal Pradesh</p>
                        <p>Pinjore-Barotiwala National Highway (NH-21A)</p>
                        <p>Himachal Pradesh - 174 103</p>
                    </div>
                    <div>
                        <p className='py-4 font-bold underline text-[1.3vw]'>Contact info:</p>
                        <p>Tel: +91.1795.661011</p>
                        <p>Fax: +91.1795.661013</p>
                        <p>Email: info@chitkarauniversity.edu.in</p>
                        <p>Website: <a href="https://www.chitkarauniversity.edu.in/" className='hover:text-blue-500'>www.chitkarauniversity.edu.in</a></p>
                    </div>
                </div>
            </div>
            <div className='w-full p-16 bg-red-500 flex gap-[7vw]'>
                <div className='flex items-center'>
                    <img src={ChitkLogo} alt="logo" className='w-[20vw] h-[20vw] mx-14 rounded-md' />
                </div>
                <div>
                    <div className='flex gap-6 text-4xl font-bold text-white items-center'>
                        <img src={Logo} alt="logo" className='w-[3vw] h-[3vw] rounded' />
                        <span>CONTACT US</span>
                    </div>
                    <form action="" className='flex flex-col'>
                        <div className='flex gap-14 my-6'>
                            <input type="text" placeholder='Your name' className='w-[22vw] h-[6vh] px-4 text-[1.3vw] border-2 rounded' />
                            <input type="text" placeholder='Your email' className='w-[22vw] h-[6vh] px-4 text-[1.3vw] border-2 rounded' />
                        </div>
                        <textarea type="text" placeholder='Your message to us...' className='w-[48vw] h-[13vh] px-4 py-2 text-[1.3vw] border-2 rounded' />
                        <div className='mt-6 flex w-full justify-end'>
                            <button className='bg-white text-red-500 text-[1.4vw] px-[2.4vw] py-[.5vw] font-bold rounded-md'>Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
