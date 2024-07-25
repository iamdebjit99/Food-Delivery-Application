import React from "react";
import Slider from "react-slick";

import image1 from "../images/restaurants/restaurant9.avif"
import image2 from "../images/restaurants/restaurant2.avif"
import image3 from "../images/restaurants/restaurant1.avif"
import image4 from "../images/restaurants/restaurant8.webp"
import image5 from "../images/restaurants/restaurant5.jpg"
import image6 from "../images/restaurants/restaurant6.jpg"
import image7 from "../images/restaurants/restaurant7.jpg"
import image8 from "../images/restaurants/restaurant3.avif"
import image9 from "../images/restaurants/restaurant10.jpeg"
import image10 from "../images/restaurants/restaurant1.avif"




function Carousel() {

    const roundPicture = {
        height: "150px",
        width: "150px",
        overflow: "hidden",
        borderRadius: "100%"
    }

    const roundPictureImage = {
        width: "150px",
        height: "150px",
        display: "block",
        padding: "10px"
    }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{height: "150px", width:"650px", paddingTop: "30px"}} className="slider-container mx-auto m-5">
      <Slider {...settings}>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image1} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image2} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image3} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image4} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image5} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image6} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image7} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image8} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image9} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image10} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image3} alt="" srcset="" />
        </div>
        <div style={roundPicture}>
          <img style={roundPictureImage} src={image8} alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;