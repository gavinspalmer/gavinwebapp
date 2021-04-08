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
        src: '../assets/images/SportEvents/Sport_1.jpg',
        altText: 'CFL - Edmonton Football Club',
        caption: 'CFL - Edmonton Football Club'
    },
    {
        src: '../assets/images/SportEvents/Sport_2.jpg',
        altText: 'CFL - Stampeders',
        caption: 'CFL - Stampeders'
    },
    {
        src: '../assets/images/SportEvents/Sport_3.jpg',
        altText: 'CFL - Grey Cup',
        caption: 'CFL - Grey Cup'
    },
    {
        src: '../assets/images/SportEvents/Sport_4.jpg',
        altText: 'CFL - Grey Cup',
        caption: 'CFL - Grey Cup'
    },
    {
        src: '../assets/images/SportEvents/Sport_5.jpg',
        altText: 'Hockey - Calgary Flames',
        caption: 'Hockey - Calgary Flames'
    },
    {
        src: '../assets/images/SportEvents/Sport_6.jpg',
        altText: 'Hockey - Calgary Flames',
        caption: 'Hockey - Calgary Flames'
    },
    {
        src: '../assets/images/SportEvents/Sport_7.jpg',
        altText: 'NFL - Saints',
        caption: 'NFL - Saints'
    },
    {
        src: '../assets/images/SportEvents/Sport_8.jpg',
        altText: 'NFL - Saints',
        caption: 'NFL - Saints'
    },
    {
        src: '../assets/images/SportEvents/Sport_9.jpg',
        altText: 'NFL - Sea Hawks',
        caption: 'NFL - Sea Hawks'
    },
    {
        src: '../assets/images/SportEvents/Sport_10.jpg',
        altText: 'NFL - Sea Hawks',
        caption: 'NFL - Sea Hawks'
    },
];

const Sports = (props) => {
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
        <Row><p></p></Row>
        <Row>
            <div className="col-lg-1"></div>
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
            <div className="col-12 col-lg-5" style={{display: 'flex', alignItems: 'center'}}>
                <Media body className="ml-5">
                    <Media heading>Sporting Events</Media>
                    <p>
                        While I don’t often watch many sports on TV (exception for NFL and some playoff games) 
                        I do enjoy attending live sporting events.  Hocky and CFL are the options for us in Edmonton.  
                        We have also worked a number of trips around NFL games (Seattle, LA, New Orleans).
                    </p>
                    <p>
                        Teams I enjoy cheering for:
                    </p>
                    <li>
                        CFL – Calgary Stampeders (primary), Edmonton Football Club (secondary)
                    </li>
                    <li>
                        NFL – Seattle Seahawks (primary), New Orleans Saints (secondary)
                    </li>
                    <li>
                        Hockey – Calgary Flames
                    </li>

                </Media>
            </div>
            <div className="col-lg-1"></div>
        </Row>
        <Row><p></p></Row>
    </Container>
  );
}

export default Sports;