import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

function Letra() {
  const settings = {
    dots: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  
  return (
    <div>
      <div>
        <Navbar />
        <Sidenav />
      </div>
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
            <a href={`/guidepage/${index + 1}`} rel="noopener noreferrer">
              <img
                src={`/assets/imgs/num${index + 1}.png`}
                alt={`level ${index + 1}`}
                style={{ height: '300px', width: '250px' }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Letra;
