import React from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import New from '../new'



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 10,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeigth:true,      

      };
    return (
      <Slider {...settings}>
        {this.props.carouselItems.map(generateNews)}
      </Slider>
    );
  }
}

const generateNews = (_new) => <div key={_new._id}><New _new={_new}  /></div>

export default SimpleSlider