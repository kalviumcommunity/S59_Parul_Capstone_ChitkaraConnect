import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carouselOne from "../assets/ChitkUni.png"
import carouselTwo from "../assets/ChitkUni.png"
import carouselThree from "../assets/ChitkUni.png"


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };

    return (
        <div style={{ margin: "auto", width: "40vw", marginTop : "50px" }}>
            <Slider {...settings}>
                <img src={carouselOne} alt="renaissance-carousel" className="rounded"/>
                <img src={carouselTwo} alt="last-supper-carousel" className="rounded"/>
                <img src={carouselThree} alt="primavera-carousel" className="rounded"/>
            </Slider>
        </div>)
}