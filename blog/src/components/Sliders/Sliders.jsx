import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import theme1 from '../../img/theme1.jpg';
import theme2 from '../../img/theme2.JPG';

const Sliders = () => {
  return (
    <Carousel 
      autoPlay={true} // Tự động chạy Carousel
      interval={3000} // Thời gian chờ giữa các hình ảnh (3 giây)
      transitionTime={500} // Thời gian chuyển đổi giữa các hình ảnh (0.5 giây)
      infiniteLoop={true} // Vòng lặp vô hạn
      showThumbs={false} // Không hiển thị thumbnails
      showStatus={false} // Không hiển thị trạng thái
    >
      <div>
        <img src={theme1} alt="Slider 1" />
      </div>
      <div>
        <img src={theme2} alt="Slider 2" />
      </div>
    </Carousel>
  );
}

export default Sliders;
