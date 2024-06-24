import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/Home.jpg';
import arrow from '../assets/download.png';
import ChitkUni from '../assets/ChitkUni.png';
import rectangle from '../assets/rectangle.png';
import scrollup from '../assets/scrollup.png';
import ClubCarousel from './club/ClubCarousel';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Login from './Login';
import '../App.css';

export default function Home() {
    const exploreSectionRef = useRef(null);
    const navRef = useRef(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToExploreSection = () => {
        exploreSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const navHeight = navRef.current.offsetHeight;
                const scrollPosition = window.scrollY;
                setShowScrollButton(scrollPosition > navHeight / 2);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav ref={navRef} className='flex flex-col h-[100vh] bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
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
                        <Link to="/SignUp" className="text-white mt-3 mr-12 py-2 px-3 font-normal font-sans text-lg bg-red-500 rounded">
                            GET STARTED
                        </Link>
                    </div>
                </div>
                <div className='h-96 flex flex-col justify-center align-center head'>
                    <div className='text-gray-300 flex justify-center align-center text-6xl font-medium pl-12'>
                        Discover around you
                    </div>
                    <div className='text-white flex justify-center align-center text-8xl font-bold'>
                        CHITKARA | <p className='text-red-500'>CONNECT</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-white flex justify-center align-center text-3xl font-normal'>
                        Discover here
                    </div>
                    <div className='w-full h-14 flex justify-center'>
                        <img
                            src={arrow}
                            alt="arrow"
                            className='w-10 h-10 m-4 cursor-pointer transition-transform transform hover:scale-110 focus:scale-11'
                            onClick={scrollToExploreSection}
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter') scrollToExploreSection() }}
                        />
                    </div>
                </div>
            </nav>

            <div ref={exploreSectionRef} className='my-16'>
                <div className='text-6xl font-extrabold mx-10'>EXPLORE AT CHITKARA</div>
                <div className='my-8 flex'>
                    <div className='w-56 h-72 bg-red-500'></div>
                    <img src={ChitkUni} alt="Chitkara University" className='w-[35vw] h-[39vh] mx-6' />
                    <img src={rectangle} alt="bg" className='w-[47vw] h-[39vh]' />
                </div>
                <div className="flex gap-16 mx-24 my-10">
                    <Link to="https://maps.app.goo.gl/qzqUPcT2Rhm7iFVe6" target='_blank'>
                        <button className="text-xl bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-transform hover:translate-y-[-2px]">
                            View Location
                        </button>
                    </Link>
                    <Link to="https://www.chitkarauniversity.edu.in/" target="_blank" rel="noopener noreferrer">
                        <button className="text-xl text-red-500 hover:bg-red-100 border-[.2vw] border-red-500 font-bold py-2 px-4 rounded transition-transform hover:translate-y-[-2px]">
                            Visit Website
                        </button>
                    </Link>
                </div>

                {showScrollButton && (
                    <button className='fixed bottom-8 right-6 bg-gray-400 hover:bg-red-600 rounded-[50%] transition-transform hover:translate-y-[-3px]' onClick={scrollToTop}>
                        <img src={scrollup} alt="scroll" className='w-[5vw] h-[5vw] rounded-[45%] p-4' />
                    </button>
                )}
            </div>
            <ClubCarousel />
            <Login />
            <ContactUs />
            <Footer />
        </div>
    );
}
