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
        src: '../assets/images/Food/Food_1.jpeg',
        altText: 'Cassoulet',
        caption: 'Cassoulet'
    },
    {
        src: '../assets/images/Food/Food_2.jpg',
        altText: 'Chili',
        caption: 'Chili'
    },
    {
        src: '../assets/images/Food/Food_3.jpg',
        altText: 'Chili Contest Winner!',
        caption: 'Chili Contest Winner!'
    },
    {
        src: '../assets/images/Food/Food_4.jpeg',
        altText: 'Fondue',
        caption: 'Fondue'
    },
    {
        src: '../assets/images/Food/Food_5.jpeg',
        altText: 'Outdoor Grilling',
        caption: 'Outdoor Grilling'
    },
    {
        src: '../assets/images/Food/Food_6.jpg',
        altText: 'Outdoor Tools!',
        caption: 'Outdoor Tools!'
    },
    {
        src: '../assets/images/Food/Food_7.jpg',
        altText: 'Gumbo',
        caption: 'Gumbo'
    },
    {
        src: '../assets/images/Food/Food_8.jpeg',
        altText: 'Pumpkin Soup',
        caption: 'Pumpkin Soup'
    },
    {
        src: '../assets/images/Food/Food_9.jpeg',
        altText: 'Baby Back Ribs',
        caption: 'Baby Back Ribs'
    },
    {
        src: '../assets/images/Food/Food_10.jpg',
        altText: 'Wine Time',
        caption: 'Wine Time'
    },

];

const Food = (props) => {
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
    <Container className="themed-container" fluid={true} style={{backgroundColor: '#A9B3CE'}}>
        <Row>
        <div className="col-12 col-lg-5 order-lg-2">
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
            <div className="col-12 col-lg-7 order-lg-1">
                <Media body className="ml-7">
                    <Media heading>Food!</Media>
                    <p>Information about food!!</p>

                </Media>
            </div>
        </Row>
        
    </Container>
  );
}

export default Food;