import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../assets/css/Common/CarouselStyle.css'; // Assuming you will add styles here
import image1 from '../../assets/images/carousel1.png';
import image2 from '../../assets/images/carousel2.png';
import image3 from '../../assets/images/carousel3.png';
import image4 from '../../assets/images/carousel4.png';
import image5 from '../../assets/images/carousel5.png';

const CarouselComponent = () => {
  const images = [image1, image2, image3, image4, image5];

  const createCarouselItemImage = (image, index) => (
    <div key={index} className="carousel-item">
      <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
    </div>
  );

  const carouselItems = images.map(createCarouselItemImage);

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '0px 10px',
        marginTop: '0',
      }}
    >
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={false}
        dynamicHeight={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <li
            style={{
              background: isSelected ? '#ff8800' : '#ddd',
              width: 12,
              height: 12,
              display: 'inline-block',
              margin: '0 8px',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            id="movetop"
          />
        )}
      >
        {carouselItems}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
