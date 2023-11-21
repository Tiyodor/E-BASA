import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Letra() {
  const settings = {
    dots: false, // This line removes the dots
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Adjust for different breakpoints if needed
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false, // Adjust for different breakpoints if needed
        },
      },
    ],
  };
  
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Slider {...settings} >
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box1">
            <img
              src={`/assets/imgs/num${index + 1}.png`}
              alt={`level ${index + 1}`}
              style={{ height: '300px', width: '250px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Letra;