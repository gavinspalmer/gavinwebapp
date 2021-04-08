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
        <Row><p></p></Row>
        <Row>
            <div className="col-lg-1 order-lg-1"></div>
            <div className="col-12 col-lg-5 order-lg-3">
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
            <div className="col-12 col-lg-5" style={{display: 'flex', alignItems: 'center'}}>
                <Media body className="ml-5">
                    <Media heading>Food</Media>
                    <p>
                        Cooking new things is an activity that has always excited me.  Primarily I like to grill, 
                        and there is no temperature that is too cold (okay, -35°C is getting there).  I also enjoy 
                        chili’s, gumbo’s, and an assortment of other dishes.  It is fun to have a new challenging 
                        dish to cook.
                    </p>
                    <p>
                        For a long time I only did propane grilling.  This changed in 2019 when I picked up an egg 
                        charcoal grill.  It’s not the best option on the market, but one day I’ll upgrade it.  Either 
                        way, it was a game changer!
                    </p>
                    <p>
                        My favorite place to get meat is a butcher out in Sherwood Park called “<a href="https://www.facebook.com/charliesmeatss/">Charlies Place</a>.”  
                        The quality is much better than I have ever gotten at a chain store, and the price isn’t too bad!
                    </p>
                </Media>
            </div>
            <div className="col-lg-1 order-lg-4"></div>
        </Row>
        <Row><p></p></Row>
        
    </Container>
  );
}

export default Food;