import React from 'react'
import Logo from '../assets/logo.jpg'
import User from '../assets/user.png'
import Email from '../assets/mail.png'

export default function SignUp() {
    return (
        <div className='w-full h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className="w-[85vw] h-[43vw] m-16 rounded-xl shadow-xl flex justify-between items-center">
                <div className='bg-red-500 w-[50vw] h-[100%] rounded-l-xl rounded-r-[8vw] p-6 text-white flex flex-col'>
                    <p className='text-3xl text-center mt-10'>Hello</p>
                    <p className='font-semibold text-[2.7vw] text-center mb-[5vw]'>Welcome to!</p>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Logo} alt="ChitkLogo" className='w-[6vw] h-[6vw] rounded-xl mt-4' />
                        <h1 className='font-bold text-6xl my-4'>Chitkara Connect</h1>
                    </div>
                </div>
                <div className='flex flex-col p-10 w-[50vw] h-[100%] m-2'>
                    <h1 className='text-red-500 font-bold text-4xl my-2'>Sign Up!</h1>
                    <p className='py-1 text-[1.1vw]'>Hey! Enter you details to be the part of the Chitkara Connect.</p>
                    <form action="" className='w-[32vw] mt-6'>
                        <div className='flex items-center gap-1 px-4 border-2 rounded-xl'>
                            <img src={User} alt="username" className='w-[2vw] h-[2vw]'/>
                            <input type="text" placeholder='Enter your name' className='text-[1.2vw] w-[30vw] my-4 rounded px-2 font-medium' />
                        </div>
                        <label className="block text-gray-700 text-[1.4vw] mt-8 font-semibold">Choose your occupation:</label>
                        <div className='my-4 mx-4 flex flex justify-around text-[1.3vw]'>
                            <div>
                                <input type="radio" id="student" name="occupation" value="student" />
                                <label htmlFor="student">Student</label>
                            </div>
                            <div>
                                <input type="radio" id="faculty" name="occupation" value="faculty" />
                                <label htmlFor="faculty">Faculty</label>
                            </div>
                            <div>
                                <input type="radio" id="guest" name="occupation" value="guest" />
                                <label htmlFor="guest">Guest</label>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 px-4 mt-10 border-2 rounded-xl'>
                            <img src={Email} alt="email" className='w-[2vw] h-[2vw]'/>
                            <input type="text" placeholder='Enter your email' className='text-[1.2vw] w-[30vw] my-4 rounded px-2 font-medium' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}