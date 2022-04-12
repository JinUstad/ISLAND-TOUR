import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {

      render(){  return (
            <Carousel>
                <div>
                    <img src="https://www.pinkvilla.com/imageresize/salman-khan-main_3_2.jpg?width=752&format=webp&t=pvorg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.pinkvilla.com/imageresize/salman-khan-main_3_2.jpg?width=752&format=webp&t=pvorg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.pinkvilla.com/imageresize/salman-khan-main_3_2.jpg?width=752&format=webp&t=pvorg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
      }

}
    

export default DemoCarousel