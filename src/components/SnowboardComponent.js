import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Media
  } from 'reactstrap';

const items = [
    {
        src: '../assets/images/Snowboarding/Snowboard_1.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_2.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_3.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_4.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_5.jpeg',
        altText: 'Kicking Horse (BC)',
        caption: 'Kicking Horse (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_6.jpeg',
        altText: 'Kicking Horse (BC)',
        caption: 'Kicking Horse (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_7.jpg',
        altText: 'Revelstoke (BC)',
        caption: 'Revelstoke (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_8.jpg',
        altText: 'Revelstoke (BC)',
        caption: 'Revelstoke (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_9.jpg',
        altText: 'Sunshine Village (AB)',
        caption: 'Sunshine Village (AB)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_10.jpg',
        altText: 'Sunshine Village (AB)',
        caption: 'Sunshine Village (AB)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_11.jpeg',
        altText: 'Sunshine Village (AB)',
        caption: 'Sunshine Village (AB)'
    },

];

const Snowboard = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='carousel_image'/>
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container className="themed-container" fluid={true} style={{backgroundColor: '#8CFBDE'}}>
        <Row>
            <div className="col-12 col-lg-5">
                <Carousel
                    size="md"
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>    
            </div>
            <div className="col-12 col-lg-7">
                <Media body className="ml-7">
                    <Media heading>Snowboarding!</Media>
                    <p>Information about snowboarding!!</p>

                </Media>
            </div>
        </Row>
        
    </Container>
  );
}

export default Snowboard;