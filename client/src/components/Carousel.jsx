import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselOne from '../assets/clubsProfile 1.jpg'
import CarouselTwo from '../assets/Nati.jpg'
import CarouselThree from '../assets/Crowd.jpg'


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
        <div style={{ margin: "auto", width: "33vw", marginTop : "80px" }}>
            <Slider {...settings}>
                <img src={CarouselOne} alt="club" className="rounded"/>
                <img src={CarouselTwo} alt="socieites" className="rounded"/>
                <img src={CarouselThree} alt="club" className="rounded"/>
            </Slider>
        </div>)
}