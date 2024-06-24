import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import IETE from '../../assets/IETE.jpg'

const ClubCarousel = () => {
    const [clubs, setClubs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/clubs')
                setClubs(response.data)
            } catch (error) {
                console.error('Error fetching clubs:', error);
                if (!error.response) {
                    setError('Network error. Please check your connection.');
                } else if (error.response.status >= 500) {
                    setError('Server error. Please try again later.');
                } else {
                    setError('Unexpected error. Please try again.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchClubs()
    }, []);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="slick-arrow slick-next"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    transform: 'translateX(50%)',
                    right: '1%',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: '#808080',
                    padding: '5px'
                }}
            >
                ≫
            </div>
        )
    }

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="slick-arrow slick-prev"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: '#808080',
                    padding: '5px'
                }}
            >
                ≪
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }

    return (
        <div className='mx-10 mt-28 mb-20'>
            <p className='text-[3.9vw] text-red-500 font-extrabold'>OUR CLUBS</p>
            {loading && <p>Loading clubs...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            {!loading && !error && (
                <Slider {...settings}>
                    {clubs.map((club) => (
                        <div key={club._id}>
                            <div className='shadow shadow-gray-400 m-6 p-4 border-0 flex flex-col justify-center rounded'>
                                <img src={IETE} alt={club.clubName} className='w-[12vw] m-auto p-2' />
                                <p className='text-[1.2vw] px-1 font-semibold text-black mt-2'>{club.clubName}</p>
                                <p className='text-[1vw] px-1 text-gray-500 mt-2'>{club.clubDesc}</p>
                                <Link to={`/Club/${club._id}`} className='px-1'>
                                    <button className='mt-4 mb-4 px-4 py-2 bg-blue-500 text-white rounded'>View Club</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    )
}

export default ClubCarousel
