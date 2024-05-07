import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Email from '../assets/emailIcon.png'
import Eye from '../assets/eye.png'
import UniStudent from '../assets/UniStudent.png'

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        loginUser(data)
    }

    const loginUser = (data) => {
       
        axios.post('http://localhost:8080/user/login', data)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("Error posting user:", error)
            })
    }

    return (
        <div>
            <div className='w-[100%] flex'>
                <div className='bg-black w-[45%] py-14 px-16'>
                    <h1 className='text-[3vw] font-bold text-red-500'>Get Started</h1>
                    <p className='text-white text-[1.3vw]'>Become part of our community. Join us and organize events!</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='py-4'>
                        <div className='my-4 flex'>
                            <input type="email" placeholder='Enter your mail' {...register('email', { required: true })} className='px-4 py-[.7vw] text-[1.3vw] w-[28vw] rounded-l-md' />
                            <div className='bg-red-500 w-[4.5vw] h-[4vw] flex items-center justify-center rounded-r-md'>
                                <img src={Email} alt="email" className='w-[2.5vw] h-[2.5vw]' />
                            </div>
                        </div>
                        {errors.email && <p className='text-red-500 text-[1vw]'>Email is required.</p>}
                        <div className='my-4 flex'>
                            <input type="password" placeholder='Enter password' {...register('password', { required: true })} className='px-4 py-[.7vw] text-[1.3vw] w-[28vw] rounded-l-md' />
                            <div className='bg-red-500 w-[4.5vw] h-[4vw] flex items-center justify-center rounded-r-md'>
                                <img src={Eye} alt="password" className='w-[2.5vw] h-[2.5vw] cursor-pointer' />
                            </div>
                        </div>
                        {errors.password && <p className='text-red-500 text-[1vw]'>Password is required.</p>}
                        <div className='mt-8'>
                            <button className='text-white bg-red-500 px-6 py-2 rounded-md font-semibold text-xl transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-white'>Login</button>
                            <Link to="/SignUp">
                                <button type='submit' className='bg-black text-red-500 border-2 border-red-500 mx-6 px-4 py-2 rounded-md font-semibold text-xl transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-white'>Create a new account</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='bg-red-500 w-[55%] flex items-center justify-around'>
                    <h1 className='w-[80%] text-[5vw] font-bold mb-22 pl-9'>JOIN US HERE!</h1>
                    <div className='h-[29vw] w-[55vw]'>
                        <img src={UniStudent} alt="uniStudent" />
                    </div>
                </div>
            </div>
        </div>
    )
}
