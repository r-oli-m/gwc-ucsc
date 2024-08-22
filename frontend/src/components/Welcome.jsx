import React from 'react';
import Slider from 'react-slick';
import '../styles/Welcome.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    'https://media.licdn.com/dms/image/C4D1BAQExt2gb7chXPQ/company-background_10000/0/1583295048993/girlswhocode_cover?e=2147483647&v=beta&t=AIZD0J-1rK4wQk5X1DLlBS4cUPPh3WRvlNRIVbyRRCk',
    'https://i.ytimg.com/vi/pB-oMx00mg4/maxresdefault.jpg',
    'https://gwc.soe.ucsc.edu/sites/default/files/content-sections/2020-08/looker%20tour%20gwc%20.jpg',
    'https://www.collegetransitions.com/wp-content/uploads/2024/01/GWCODE.jpg',
  ];

  return (
    <div className='welcome'>
      <h1 className="title">&lt;\Girls Who Code @ UCSC&gt;</h1>
      <h3 className="welcome-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
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
