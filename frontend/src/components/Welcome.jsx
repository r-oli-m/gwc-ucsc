import React from 'react';
import Slider from 'react-slick';
import '../styles/Welcome.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://media.licdn.com/dms/image/C4D1BAQExt2gb7chXPQ/company-background_10000/0/1583295048993/girlswhocode_cover?e=2147483647&v=beta&t=AIZD0J-1rK4wQk5X1DLlBS4cUPPh3WRvlNRIVbyRRCk',
  'https://i.ytimg.com/vi/pB-oMx00mg4/maxresdefault.jpg',
  'https://gwc.soe.ucsc.edu/sites/default/files/content-sections/2020-08/looker%20tour%20gwc%20.jpg',
  'https://www.collegetransitions.com/wp-content/uploads/2024/01/GWCODE.jpg',
];

const Welcome = () => {
  const settings = {
    dots: true, 
    arrows: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true, 
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true, 
          arrows: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='welcome'>
      <h1 className="title">&lt;\Girls Who Code @ UCSC&gt;</h1>
      <h3 className="welcome-description">
      Welcome to UCSC Girls Who Code! 
      We are a vibrant community of technologists dedicated to bridging the gender gap through
      education, mentorship, and community building.
      Join us as we explore the exciting world of computer science, professional development, and 
      support each other in our journey to become leaders in tech.
      </h3>
      <div className="custom-slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Welcome;
